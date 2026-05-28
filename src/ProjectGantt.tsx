import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import type React from 'react';
import { GanttProvider } from './context/GanttContext';
import { GanttHeader } from './components/GanttHeader';
import { GanttGrid } from './components/GanttGrid';
import { GanttChart } from './components/GanttChart';
import { useGanttScroll } from './hooks/useGanttScroll';
import { useGanttData } from './hooks/useGanttData';
import { useGanttExport } from './hooks/useGanttExport';
import { C, DAY_W_MONTH, DAY_W_WEEK, DAY_W_YEAR } from './utils/constants';
import { addDays, diffDays } from './utils/date';
import type { ProjectGanttProps, DependencyType } from './types';
import type { OriginalType, InternalTask, ConnectState, PendingConnection, ViewMode } from './types/internal';
import { PinboardDrawer } from './components/PinboardDrawer';
import { resolveTranslation } from './translations';
import { wouldCreateDependencyCycle } from './utils/dependencies';
import { generateGanttTheme } from './utils/theme';

const MIN_DAY_WIDTH = 1.6;
const SIDEBAR_MIN = 200;
const SIDEBAR_MAX = 700;
const SIDEBAR_STORAGE_KEY = 'zg-sidebar-w';
const MAX_DAY_WIDTH = 140;
const ZOOM_IN_RATIO = 1.2;
const ZOOM_OUT_RATIO = 1 / ZOOM_IN_RATIO;

const getTouchClient = (event: TouchEvent | React.TouchEvent) => {
    const touch = event.touches[0] || event.changedTouches[0];
    return touch ? { clientX: touch.clientX, clientY: touch.clientY } : { clientX: 0, clientY: 0 };
};

const getTouchDistance = (touches: TouchList | React.TouchList) => {
    if (touches.length < 2) return 0;
    const a = touches[0];
    const b = touches[1];
    return Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
};

const getTouchCenter = (touches: TouchList | React.TouchList) => {
    if (touches.length < 2) {
        return touches.length === 1
            ? { clientX: touches[0].clientX, clientY: touches[0].clientY }
            : { clientX: 0, clientY: 0 };
    }
    const a = touches[0];
    const b = touches[1];
    return {
        clientX: (a.clientX + b.clientX) / 2,
        clientY: (a.clientY + b.clientY) / 2,
    };
};

const clampDayWidth = (value: number) => Math.min(MAX_DAY_WIDTH, Math.max(MIN_DAY_WIDTH, value));

export function ProjectGantt(props: ProjectGanttProps) {
    const {
        onTaskChange,
        onCreateDependency,
        onDependencyError,
        dependencies,
        translations,
    } = props;
    const isInfiniteCanvas = !!props.infiniteCanvas;

    // State
    const [viewModeState, setViewModeState] = useState<ViewMode>('day');
    const [dayWidth, setDayWidth] = useState<number>(DAY_W_MONTH);
    const dayWidthRef = useRef(dayWidth);
    const [hoveredTaskId, setHoveredTaskId] = useState<string | null>(null);
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
    const [tooltip, setTooltip] = useState<{ task: InternalTask; x: number; y: number } | null>(null);
    const [popupState, setPopupState] = useState<{ isOpen: boolean; position: { x: number; y: number }; task: InternalTask | null }>({
        isOpen: false, position: { x: 0, y: 0 }, task: null
    });

    // Drag & Drop / Interactions
    const [dragState, setDragState] = useState<{ task: InternalTask; startMouseX: number; originalStart: Date; originalEnd: Date; offsetDays: number } | null>(null);
    const [resizeState, setResizeState] = useState<{ task: InternalTask; edge: 'left' | 'right'; startMouseX: number; originalStart: Date; originalEnd: Date; offsetDays: number } | null>(null);
    const [connectState, setConnectState] = useState<ConnectState | null>(null);

    // Dependency Creation Modal
    const [pendingConnection, setPendingConnection] = useState<PendingConnection | null>(null);
    const [depModalType, setDepModalType] = useState<DependencyType>('FS');
    const [depModalLag, setDepModalLag] = useState(0);
    const [depCreating, setDepCreating] = useState(false);
    const [deletingDepId, setDeletingDepId] = useState<string | null>(null);

    // Chart Create Menu
    const [chartMenu, setChartMenu] = useState<{ x: number; y: number; date: Date; projectId?: string } | null>(null);
    const [newActionOpen, setNewActionOpen] = useState(false);
    const newActionRef = useRef<HTMLDivElement>(null);

    const [activePinboardTask, setActivePinboardTask] = useState<InternalTask | null>(null);
    const isDraggingRef = useRef(false);

    const [sidebarW, setSidebarW] = useState<number>(() => {
        if (props.sidebarWidth) return props.sidebarWidth;
        try {
            const stored = localStorage.getItem(SIDEBAR_STORAGE_KEY);
            return stored ? Number(stored) : LEFT_W;
        } catch {
            return LEFT_W;
        }
    });

    useEffect(() => {
        if (props.sidebarWidth !== undefined) setSidebarW(props.sidebarWidth);
    }, [props.sidebarWidth]);

    // Search
    const [searchQuery, setSearchQuery] = useState('');

    // Export
    const { exportRef, exportPng } = useGanttExport();

    // Visibility and Grouping
    const [visibleTypes, setVisibleTypes] = useState<Set<OriginalType>>(new Set(['step', 'milestone', 'event', 'note']));
    const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());
    const [collapsedProjects, setCollapsedProjects] = useState<Set<string>>(new Set());

    useEffect(() => {
        dayWidthRef.current = dayWidth;
    }, [dayWidth]);

    const inferViewModeFromWidth = useCallback((width: number, currentMode: ViewMode) => {
        if (!isInfiniteCanvas) return currentMode;
        if (currentMode === 'day' && width <= 7) return 'month';
        if (currentMode === 'month' && width >= 10) return 'day';
        return currentMode;
    }, [isInfiniteCanvas]);

    const setViewMode = useCallback((nextMode: ViewMode) => {
        setViewModeState(nextMode);
        if (!isInfiniteCanvas) {
            const widthMap: Record<ViewMode, number> = {
                day: DAY_W_MONTH,
                week: DAY_W_WEEK,
                month: DAY_W_YEAR,
            };
            setDayWidth(widthMap[nextMode]);
        }
    }, [isInfiniteCanvas]);

    // Toggles
    const toggleVisibility = useCallback((type: OriginalType) => {
        setVisibleTypes(prev => { const next = new Set(prev); if (next.has(type)) next.delete(type); else next.add(type); return next; });
    }, []);
    const toggleGroup = useCallback((key: string) => {
        setCollapsedGroups(prev => { const next = new Set(prev); if (next.has(key)) next.delete(key); else next.add(key); return next; });
    }, []);
    const toggleProject = useCallback((projectId: string) => {
        setCollapsedProjects(prev => { const next = new Set(prev); if (next.has(projectId)) next.delete(projectId); else next.add(projectId); return next; });
    }, []);

    // Hooks
    const data = useGanttData({
        steps: props.steps,
        milestones: props.milestones,
        events: props.events,
        notes: props.notes,
        dependencies: props.dependencies,
        viewMode: viewModeState,
        dayWidth,
        locale: props.locale,
        visibleTypes,
        collapsedGroups,
        collapsedProjects,
        groupByProject: props.groupByProject,
        selectedTaskId: selectedTaskId || null,
        nonWorkingDays: props.nonWorkingDays,
        searchQuery,
    });
    const scroll = useGanttScroll(data.timeline);

    const setDayWidthWithModeSync = useCallback((nextWidth: number) => {
        const clamped = clampDayWidth(nextWidth);
        setDayWidth(clamped);
        if (isInfiniteCanvas) {
            setViewModeState(prev => inferViewModeFromWidth(clamped, prev));
        }
        return clamped;
    }, [inferViewModeFromWidth, isInfiniteCanvas]);

    const applyZoomAtClientPoint = useCallback((clientX: number, nextWidth: number) => {
        const rb = scroll.rightBodyRef.current;
        if (!rb) {
            setDayWidthWithModeSync(nextWidth);
            return;
        }

        const rect = rb.getBoundingClientRect();
        const localX = clientX - rect.left;
        const safeLocalX = Number.isFinite(localX) ? localX : rb.clientWidth / 2;
        const currentWidth = dayWidthRef.current || DAY_W_MONTH;
        const worldX = rb.scrollLeft + safeLocalX;
        const clamped = setDayWidthWithModeSync(nextWidth);
        const ratio = clamped / currentWidth;

        requestAnimationFrame(() => {
            const body = scroll.rightBodyRef.current;
            if (!body) return;
            body.scrollLeft = Math.max(0, worldX * ratio - safeLocalX);
            if (scroll.timeHeaderRef.current) scroll.timeHeaderRef.current.scrollLeft = body.scrollLeft;
        });
    }, [scroll.rightBodyRef, scroll.timeHeaderRef, setDayWidthWithModeSync]);

    const zoomByFactor = useCallback((factor: number, clientX?: number) => {
        const rb = scroll.rightBodyRef.current;
        const anchorX = clientX ?? (rb ? rb.getBoundingClientRect().left + rb.clientWidth / 2 : 0);
        applyZoomAtClientPoint(anchorX, dayWidthRef.current * factor);
    }, [applyZoomAtClientPoint, scroll.rightBodyRef]);

    const zoomIn = useCallback(() => {
        zoomByFactor(ZOOM_IN_RATIO);
    }, [zoomByFactor]);

    const zoomOut = useCallback(() => {
        zoomByFactor(ZOOM_OUT_RATIO);
    }, [zoomByFactor]);

    const fitToScreen = useCallback(() => {
        const rb = scroll.rightBodyRef.current;
        if (!rb || data.tasks.length === 0) return;

        let minStart = data.tasks[0].start;
        let maxEnd = data.tasks[0].end;
        for (const task of data.tasks) {
            if (task.start < minStart) minStart = task.start;
            if (task.end > maxEnd) maxEnd = task.end;
        }

        const totalTaskDays = Math.max(1, diffDays(minStart, maxEnd) + 1);
        const horizontalPadding = 40;
        const availableWidth = Math.max(80, rb.clientWidth - horizontalPadding * 2);
        const fittedWidth = setDayWidthWithModeSync(availableWidth / totalTaskDays);

        requestAnimationFrame(() => {
            const body = scroll.rightBodyRef.current;
            if (!body) return;

            const startOffsetDays = diffDays(data.timeline.start, minStart);
            body.scrollLeft = Math.max(0, startOffsetDays * fittedWidth - horizontalPadding);
            body.scrollTop = 0;
            if (scroll.leftBodyRef.current) scroll.leftBodyRef.current.scrollTop = body.scrollTop;
            if (scroll.timeHeaderRef.current) scroll.timeHeaderRef.current.scrollLeft = body.scrollLeft;
        });
    }, [data.tasks, data.timeline.start, scroll.rightBodyRef, scroll.leftBodyRef, scroll.timeHeaderRef, setDayWidthWithModeSync]);

    const didInitialFit = useRef(false);
    useEffect(() => {
        if (!isInfiniteCanvas || !props.initialFitToScreen || didInitialFit.current || data.tasks.length === 0) return;
        const rb = scroll.rightBodyRef.current;
        if (!rb || rb.clientWidth <= 0) return;
        fitToScreen();
        didInitialFit.current = true;
    }, [isInfiniteCanvas, props.initialFitToScreen, data.tasks.length, fitToScreen, scroll.rightBodyRef]);

    // Event Handlers for UI Interactions
    const handleBarMouseDown = useCallback((e: React.MouseEvent, task: InternalTask) => {
        e.preventDefault(); e.stopPropagation();
        setDragState({ task, startMouseX: e.clientX, originalStart: new Date(task.start), originalEnd: new Date(task.end), offsetDays: 0 });
    }, []);

    const handleBarTouchStart = useCallback((e: React.TouchEvent, task: InternalTask) => {
        e.preventDefault(); e.stopPropagation();
        const point = getTouchClient(e);
        setDragState({ task, startMouseX: point.clientX, originalStart: new Date(task.start), originalEnd: new Date(task.end), offsetDays: 0 });
    }, []);

    const handleResizeMouseDown = useCallback((e: React.MouseEvent, task: InternalTask, edge: 'left' | 'right') => {
        e.preventDefault(); e.stopPropagation();
        setResizeState({ task, edge, startMouseX: e.clientX, originalStart: new Date(task.start), originalEnd: new Date(task.end), offsetDays: 0 });
    }, []);

    const handleResizeTouchStart = useCallback((e: React.TouchEvent, task: InternalTask, edge: 'left' | 'right') => {
        e.preventDefault(); e.stopPropagation();
        const point = getTouchClient(e);
        setResizeState({ task, edge, startMouseX: point.clientX, originalStart: new Date(task.start), originalEnd: new Date(task.end), offsetDays: 0 });
    }, []);

    const handleConnectDotMouseDown = useCallback((e: React.MouseEvent, task: InternalTask, edge: 'left' | 'right') => {
        e.preventDefault(); e.stopPropagation();
        setConnectState({ fromTaskId: task.id, fromEdge: edge, fromScreenX: e.clientX, fromScreenY: e.clientY, currentScreenX: e.clientX, currentScreenY: e.clientY, hoverTargetId: null });
    }, []);

    const handleConnectDotTouchStart = useCallback((e: React.TouchEvent, task: InternalTask, edge: 'left' | 'right') => {
        e.preventDefault(); e.stopPropagation();
        const point = getTouchClient(e);
        setConnectState({
            fromTaskId: task.id,
            fromEdge: edge,
            fromScreenX: point.clientX,
            fromScreenY: point.clientY,
            currentScreenX: point.clientX,
            currentScreenY: point.clientY,
            hoverTargetId: null,
        });
    }, []);

    const handleBarClick = useCallback((e: React.MouseEvent, task: InternalTask) => {
        if (isDraggingRef.current) return;
        e.stopPropagation();
        const isAlreadySelected = selectedTaskId === task.id;
        setSelectedTaskId(isAlreadySelected ? null : task.id);
        setPopupState(prev => {
            const popupShowingThis = prev.isOpen && prev.task?.id === task.id;
            if (isAlreadySelected || popupShowingThis) {
                return { isOpen: false, position: { x: 0, y: 0 }, task: null };
            }
            return { isOpen: true, position: { x: e.clientX, y: e.clientY }, task };
        });
    }, [selectedTaskId]);

    const handleCreateDependency = useCallback(async () => {
        if (!pendingConnection || !onCreateDependency) return;
        const taskMap = new Map(data.tasks.map(t => [t.id, t]));
        const fromTask = taskMap.get(pendingConnection.fromTaskId);
        const toTask = taskMap.get(pendingConnection.toTaskId);
        if (!fromTask || !toTask) return;

        const typeFromOrig = (t: InternalTask) => (t.originalType === 'step' ? 'STEP' : 'MILESTONE') as 'STEP' | 'MILESTONE';
        const predTask = pendingConnection.fromEdge === 'right' ? fromTask : toTask;
        const succTask = pendingConnection.fromEdge === 'right' ? toTask : fromTask;

        if (wouldCreateDependencyCycle(dependencies || [], predTask.id, succTask.id)) {
            const message = resolveTranslation(
                translations,
                'gantt.error.circularDependency',
                'Circular dependency is not allowed.',
            );
            onDependencyError?.({
                code: 'CYCLIC_DEPENDENCY',
                message,
                predecessorId: predTask.id,
                successorId: succTask.id,
            });

            if (!onDependencyError) {
                window.alert(message);
            }

            setPendingConnection(null);
            return;
        }

        setDepCreating(true);
        try {
            await onCreateDependency({ predecessorId: predTask.id, predecessorType: typeFromOrig(predTask), successorId: succTask.id, successorType: typeFromOrig(succTask), type: depModalType, lag: depModalLag });
            setPendingConnection(null);
        } finally {
            setDepCreating(false);
        }
    }, [pendingConnection, data.tasks, onCreateDependency, dependencies, translations, onDependencyError, depModalType, depModalLag]);

    // Global drag & drop effects (Mouse move/up on document)
    // Drag
    useEffect(() => {
        if (!dragState) return;
        const nonPassive = { passive: false } as AddEventListenerOptions;

        const onMove = (e: MouseEvent) => {
            const dx = e.clientX - dragState.startMouseX;
            const d = Math.round(dx / data.timeline.dayWidth);
            if (d !== dragState.offsetDays) {
                if (d !== 0) isDraggingRef.current = true;
                setDragState(prev => prev ? { ...prev, offsetDays: d } : null);
            }
        };
        const onTouchMove = (e: TouchEvent) => {
            if (e.cancelable) e.preventDefault();
            const touch = getTouchClient(e);
            const dx = touch.clientX - dragState.startMouseX;
            const d = Math.round(dx / data.timeline.dayWidth);
            if (d !== dragState.offsetDays) {
                if (d !== 0) isDraggingRef.current = true;
                setDragState(prev => prev ? { ...prev, offsetDays: d } : null);
            }
        };
        const onUp = () => {
            if (dragState.offsetDays !== 0 && onTaskChange) {
                onTaskChange({
                    id: dragState.task.id, name: dragState.task.name,
                    start: addDays(dragState.originalStart, dragState.offsetDays),
                    end: addDays(dragState.originalEnd, dragState.offsetDays),
                    type: dragState.task.originalType === 'step' ? 'task' : 'milestone',
                    progress: dragState.task.progress,
                });
            }
            setDragState(null);
            requestAnimationFrame(() => { isDraggingRef.current = false; });
        };
        const onTouchEnd = () => onUp();
        document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', onUp);
        document.addEventListener('touchmove', onTouchMove, nonPassive);
        document.addEventListener('touchend', onTouchEnd);
        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
        };
    }, [dragState, data.timeline.dayWidth, onTaskChange]);

    // Resize
    useEffect(() => {
        if (!resizeState) return;
        const nonPassive = { passive: false } as AddEventListenerOptions;

        const onMove = (e: MouseEvent) => {
            const dx = e.clientX - resizeState.startMouseX;
            const d = Math.round(dx / data.timeline.dayWidth);
            if (d !== resizeState.offsetDays) setResizeState(prev => prev ? { ...prev, offsetDays: d } : null);
        };
        const onTouchMove = (e: TouchEvent) => {
            if (e.cancelable) e.preventDefault();
            const touch = getTouchClient(e);
            const dx = touch.clientX - resizeState.startMouseX;
            const d = Math.round(dx / data.timeline.dayWidth);
            if (d !== resizeState.offsetDays) setResizeState(prev => prev ? { ...prev, offsetDays: d } : null);
        };
        const onUp = () => {
            if (resizeState.offsetDays !== 0 && onTaskChange) {
                const newStart = resizeState.edge === 'left' ? addDays(resizeState.originalStart, resizeState.offsetDays) : resizeState.originalStart;
                const newEnd = resizeState.edge === 'right' ? addDays(resizeState.originalEnd, resizeState.offsetDays) : resizeState.originalEnd;
                if (newEnd > newStart) onTaskChange({ id: resizeState.task.id, name: resizeState.task.name, start: newStart, end: newEnd, type: 'task', progress: resizeState.task.progress });
            }
            setResizeState(null);
        };
        const onTouchEnd = () => onUp();
        document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', onUp);
        document.addEventListener('touchmove', onTouchMove, nonPassive);
        document.addEventListener('touchend', onTouchEnd);
        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
        };
    }, [resizeState, data.timeline.dayWidth, onTaskChange]);

    // Connect
    const connectFromTaskId = connectState?.fromTaskId;
    const connectFromEdge = connectState?.fromEdge;

    useEffect(() => {
        if (!connectFromTaskId || !connectFromEdge) return;
        const nonPassive = { passive: false } as AddEventListenerOptions;
        const fromTaskId = connectFromTaskId;
        const fromEdge = connectFromEdge;

        const onMove = (e: MouseEvent) => {
            let hoverTarget: string | null = null;
            for (const el of document.elementsFromPoint(e.clientX, e.clientY)) {
                const tid = (el as HTMLElement).dataset?.taskId;
                if (tid && tid !== fromTaskId) { hoverTarget = tid; break; }
            }
            setConnectState(prev => prev ? { ...prev, currentScreenX: e.clientX, currentScreenY: e.clientY, hoverTargetId: hoverTarget } : null);
        };
        const onTouchMove = (e: TouchEvent) => {
            if (e.cancelable) e.preventDefault();
            const touch = getTouchClient(e);
            let hoverTarget: string | null = null;
            for (const el of document.elementsFromPoint(touch.clientX, touch.clientY)) {
                const tid = (el as HTMLElement).dataset?.taskId;
                if (tid && tid !== fromTaskId) { hoverTarget = tid; break; }
            }
            setConnectState(prev => prev ? { ...prev, currentScreenX: touch.clientX, currentScreenY: touch.clientY, hoverTargetId: hoverTarget } : null);
        };
        const onUp = (e: MouseEvent) => {
            let targetId: string | null = null;
            for (const el of document.elementsFromPoint(e.clientX, e.clientY)) {
                const tid = (el as HTMLElement).dataset?.taskId;
                if (tid && tid !== fromTaskId) { targetId = tid; break; }
            }
            if (targetId && onCreateDependency) {
                setPendingConnection({ fromTaskId, fromEdge, toTaskId: targetId });
                setDepModalType('FS'); setDepModalLag(0);
            }
            setConnectState(null);
        };
        const onTouchEnd = (e: TouchEvent) => {
            const touch = getTouchClient(e);
            let targetId: string | null = null;
            for (const el of document.elementsFromPoint(touch.clientX, touch.clientY)) {
                const tid = (el as HTMLElement).dataset?.taskId;
                if (tid && tid !== fromTaskId) { targetId = tid; break; }
            }
            if (targetId && onCreateDependency) {
                setPendingConnection({ fromTaskId, fromEdge, toTaskId: targetId });
                setDepModalType('FS'); setDepModalLag(0);
            }
            setConnectState(null);
        };
        document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', onUp);
        document.addEventListener('touchmove', onTouchMove, nonPassive);
        document.addEventListener('touchend', onTouchEnd);
        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
        };
    }, [connectFromTaskId, connectFromEdge, onCreateDependency]);

    // Pan (grab-drag)
    const [panState, setPanState] = useState<{ startX: number; startY: number; scrollLeft: number; scrollTop: number } | null>(null);
    const [pinchState, setPinchState] = useState<{ startDistance: number; startDayWidth: number; centerClientY: number; startScrollTop: number } | null>(null);

    const handleChartMouseDown = useCallback((e: React.MouseEvent) => {
        if (resizeState || dragState || e.button === 2) return;
        const rb = scroll.rightBodyRef.current;
        if (!rb) return;
        e.preventDefault();
        setPanState({ startX: e.clientX, startY: e.clientY, scrollLeft: rb.scrollLeft, scrollTop: rb.scrollTop });
    }, [resizeState, dragState, scroll.rightBodyRef]);

    const handleChartTouchStart = useCallback((e: React.TouchEvent) => {
        if (resizeState || dragState || connectState) return;
        const rb = scroll.rightBodyRef.current;
        if (!rb) return;

        if (isInfiniteCanvas && e.touches.length >= 2) {
            if (e.cancelable) e.preventDefault();
            setPanState(null);
            const distance = getTouchDistance(e.touches);
            const center = getTouchCenter(e.touches);
            setPinchState({
                startDistance: Math.max(1, distance),
                startDayWidth: dayWidthRef.current,
                centerClientY: center.clientY,
                startScrollTop: rb.scrollTop,
            });
            return;
        }

        const point = getTouchClient(e);
        setPanState({ startX: point.clientX, startY: point.clientY, scrollLeft: rb.scrollLeft, scrollTop: rb.scrollTop });
    }, [resizeState, dragState, connectState, scroll.rightBodyRef, isInfiniteCanvas]);

    const handleChartWheel = useCallback((e: React.WheelEvent) => {
        if (!isInfiniteCanvas) {
            scroll.handleChartWheel(e);
            return;
        }

        const rb = scroll.rightBodyRef.current;
        if (!rb) return;
        e.preventDefault();

        const delta = Math.abs(e.deltaY) > 0 ? e.deltaY : e.deltaX;
        const factor = Math.exp(-delta * 0.0015);
        applyZoomAtClientPoint(e.clientX, dayWidthRef.current * factor);
    }, [isInfiniteCanvas, scroll, applyZoomAtClientPoint]);

    useEffect(() => {
        if (!panState) return;
        const nonPassive = { passive: false } as AddEventListenerOptions;

        const onMove = (e: MouseEvent) => {
            const rb = scroll.rightBodyRef.current;
            if (!rb) return;
            rb.scrollLeft = panState.scrollLeft - (e.clientX - panState.startX);
            rb.scrollTop = panState.scrollTop - (e.clientY - panState.startY);
            if (scroll.leftBodyRef.current) scroll.leftBodyRef.current.scrollTop = rb.scrollTop;
            if (scroll.timeHeaderRef.current) scroll.timeHeaderRef.current.scrollLeft = rb.scrollLeft;
        };
        const onTouchMove = (e: TouchEvent) => {
            if (e.cancelable) e.preventDefault();
            const rb = scroll.rightBodyRef.current;
            if (!rb) return;
            const point = getTouchClient(e);
            rb.scrollLeft = panState.scrollLeft - (point.clientX - panState.startX);
            rb.scrollTop = panState.scrollTop - (point.clientY - panState.startY);
            if (scroll.leftBodyRef.current) scroll.leftBodyRef.current.scrollTop = rb.scrollTop;
            if (scroll.timeHeaderRef.current) scroll.timeHeaderRef.current.scrollLeft = rb.scrollLeft;
        };
        const onUp = () => setPanState(null);
        const onTouchEnd = () => setPanState(null);
        document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', onUp);
        document.addEventListener('touchmove', onTouchMove, nonPassive);
        document.addEventListener('touchend', onTouchEnd);
        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
        };
    }, [panState, scroll.rightBodyRef, scroll.leftBodyRef, scroll.timeHeaderRef]);

    useEffect(() => {
        if (!pinchState || !isInfiniteCanvas) return;
        const nonPassive = { passive: false } as AddEventListenerOptions;

        const onTouchMove = (e: TouchEvent) => {
            if (e.touches.length < 2) return;
            if (e.cancelable) e.preventDefault();

            const rb = scroll.rightBodyRef.current;
            if (!rb) return;

            const distance = getTouchDistance(e.touches);
            const center = getTouchCenter(e.touches);
            const ratio = Math.max(0.1, distance / pinchState.startDistance);
            applyZoomAtClientPoint(center.clientX, pinchState.startDayWidth * ratio);

            rb.scrollTop = pinchState.startScrollTop - (center.clientY - pinchState.centerClientY);
            if (scroll.leftBodyRef.current) scroll.leftBodyRef.current.scrollTop = rb.scrollTop;
        };

        const onTouchEnd = (e: TouchEvent) => {
            if (e.touches.length < 2) {
                setPinchState(null);
            }
        };

        document.addEventListener('touchmove', onTouchMove, nonPassive);
        document.addEventListener('touchend', onTouchEnd);
        document.addEventListener('touchcancel', onTouchEnd);
        return () => {
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
            document.removeEventListener('touchcancel', onTouchEnd);
        };
    }, [pinchState, isInfiniteCanvas, scroll.rightBodyRef, scroll.leftBodyRef, applyZoomAtClientPoint]);

    // Chart Context Menu
    const openChartMenu = useCallback((e: React.MouseEvent) => {
        e.preventDefault(); e.stopPropagation();
        setPopupState({ isOpen: false, position: { x: 0, y: 0 }, task: null });
        setNewActionOpen(false);

        const screenXToDate = (screenX: number): Date => {
            const rb = scroll.rightBodyRef.current;
            if (!rb) return new Date();
            const rect = rb.getBoundingClientRect();
            const relX = screenX - rect.left + rb.scrollLeft;
            return addDays(data.timeline.start, Math.max(0, Math.floor(relX / data.timeline.dayWidth)));
        };

        const screenYToProjectId = (screenY: number): string | undefined => {
            if (!props.groupByProject) return undefined;
            const lb = scroll.leftBodyRef.current;
            if (!lb) return undefined;
            const rect = lb.getBoundingClientRect();
            const relY = screenY - rect.top + lb.scrollTop;
            const rowIdx = Math.max(0, Math.floor(relY / 50)); // ROW_H = 50
            for (let i = Math.min(rowIdx, data.displayRows.length - 1); i >= 0; i--) {
                const row = data.displayRows[i];
                if (row.kind === 'projectHeader') return row.projectId;
                if (row.kind === 'task' && row.task.projectId) return row.task.projectId;
                if (row.kind === 'group' && row.projectId) return row.projectId;
            }
            return undefined;
        };

        setChartMenu({ x: e.clientX, y: e.clientY, date: screenXToDate(e.clientX), projectId: screenYToProjectId(e.clientY) });
        setPanState(null);
    }, [data.timeline, data.displayRows, props.groupByProject, scroll.rightBodyRef, scroll.leftBodyRef]);

    // Close Modals/Menus on outside click / escape
    useEffect(() => {
        if (!chartMenu) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setChartMenu(null); };
        const onDown = (e: MouseEvent) => { if (!(e.target as HTMLElement).closest('[data-menu="chart-create"]')) setChartMenu(null); };
        const onTouchStart = (e: TouchEvent) => {
            if (!(e.target as HTMLElement).closest('[data-menu="chart-create"]')) setChartMenu(null);
        };
        const onScroll = () => setChartMenu(null);
        document.addEventListener('keydown', onKey); document.addEventListener('click', onDown); document.addEventListener('touchstart', onTouchStart); window.addEventListener('scroll', onScroll, true);
        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('click', onDown);
            document.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('scroll', onScroll, true);
        };
    }, [chartMenu]);

    // Close popup on outside click / escape
    useEffect(() => {
        if (!popupState.isOpen) return;
        const onMouseDown = (e: MouseEvent) => {
            if (!(e.target as HTMLElement).closest('[data-popup="gantt-action"]')) {
                setPopupState({ isOpen: false, position: { x: 0, y: 0 }, task: null });
            }
        };
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setPopupState({ isOpen: false, position: { x: 0, y: 0 }, task: null });
        };
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('keydown', onKey);
        };
    }, [popupState.isOpen]);

    // Close newAction dropdown on outside click / escape
    useEffect(() => {
        if (!newActionOpen) return;
        const onMouseDown = (e: MouseEvent) => {
            if (newActionRef.current && !newActionRef.current.contains(e.target as Node)) {
                setNewActionOpen(false);
            }
        };
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setNewActionOpen(false);
        };
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('keydown', onKey);
        };
    }, [newActionOpen]);

    // Construct Context Value
    const contextValue = useMemo(() => ({
        props,
        t: (k: string, d?: string) => resolveTranslation(props.translations, k, d),
        viewMode: viewModeState,
        setViewMode,
        isInfiniteCanvas,
        dayWidth,
        zoomPercent: Math.round((dayWidth / DAY_W_MONTH) * 100),
        zoomIn,
        zoomOut,
        fitToScreen,
        hoveredTaskId, setHoveredTaskId,
        selectedTaskId, setSelectedTaskId,
        tooltip, setTooltip,
        popupState, setPopupState,
        dragState, setDragState,
        resizeState, setResizeState,
        connectState, setConnectState,
        visibleTypes, setVisibleTypes, toggleVisibility,
        collapsedGroups, setCollapsedGroups, toggleGroup,
        collapsedProjects, setCollapsedProjects, toggleProject,
        pendingConnection, setPendingConnection,
        depModalType, setDepModalType,
        depModalLag, setDepModalLag,
        depCreating, setDepCreating,
        deletingDepId, setDeletingDepId,
        chartMenu, setChartMenu,
        newActionOpen, setNewActionOpen,
        activePinboardTask, setActivePinboardTask,
        searchQuery, setSearchQuery,
        nonWorkingDaySet: data.nonWorkingDaySet,
        exportPng,
        tasks: data.tasks,
        timeline: data.timeline,
        displayRows: data.displayRows,
        taskRowIndex: data.taskRowIndex || new Map(),
        arrows: data.arrows,
        criticalIds: data.criticalIds,
        delayedIds: data.delayedIds,
        relatedIds: data.relatedIds,
        groupProgress: data.groupProgress,
        sidebarW,
        ...scroll,
        newActionRef,
        screenXToDate: (screenX: number) => {
            const rb = scroll.rightBodyRef.current;
            if (!rb) return new Date();
            const rect = rb.getBoundingClientRect();
            const relX = screenX - rect.left + rb.scrollLeft;
            return addDays(data.timeline.start, Math.max(0, Math.floor(relX / data.timeline.dayWidth)));
        },
        screenYToProjectId: (screenY: number) => {
            if (!props.groupByProject) return undefined;
            const lb = scroll.leftBodyRef.current;
            if (!lb) return undefined;
            const rect = lb.getBoundingClientRect();
            const relY = screenY - rect.top + lb.scrollTop;
            const rowIdx = Math.max(0, Math.floor(relY / 50));
            for (let i = Math.min(rowIdx, data.displayRows.length - 1); i >= 0; i--) {
                const row = data.displayRows[i];
                if (row.kind === 'projectHeader') return row.projectId;
                if (row.kind === 'task' && row.task.projectId) return row.task.projectId;
                if (row.kind === 'group' && row.projectId) return row.projectId;
            }
            return undefined;
        },
        handleChartMouseDown,
        handleChartTouchStart,
        handleChartWheel,
        openChartMenu,
        handleBarClick,
        handleBarMouseDown,
        handleBarTouchStart,
        handleResizeMouseDown,
        handleResizeTouchStart,
        handleConnectDotMouseDown,
        handleConnectDotTouchStart,
        handleCreateDependency,
        scrollToToday: () => {
            const rb = scroll.rightBodyRef.current;
            const th = scroll.timeHeaderRef.current;
            if (!rb || data.timeline.todayIndex < 0) return;
            const targetScrollLeft = Math.max(0, data.timeline.todayIndex * data.timeline.dayWidth - rb.clientWidth / 2);
            rb.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
            if (th) th.scrollLeft = targetScrollLeft;
        },
        isTodayVisible: data.timeline.todayIndex >= 0,
    }), [
        props, viewModeState, isInfiniteCanvas, dayWidth, zoomIn, zoomOut, fitToScreen,
        hoveredTaskId, selectedTaskId, tooltip, popupState, dragState, resizeState, connectState,
        visibleTypes, collapsedGroups, collapsedProjects, pendingConnection, depModalType, depModalLag, depCreating,
        deletingDepId, chartMenu, newActionOpen, activePinboardTask, data, scroll, sidebarW, toggleVisibility, toggleGroup, toggleProject,
        handleChartMouseDown, handleChartTouchStart, handleChartWheel, openChartMenu,
        handleBarClick, handleBarMouseDown, handleBarTouchStart,
        handleResizeMouseDown, handleResizeTouchStart,
        handleConnectDotMouseDown, handleConnectDotTouchStart,
        handleCreateDependency
    ]);

    if (props.loading) {
        return (
            <div
                role="status"
                aria-label="Loading Gantt chart"
                aria-live="polite"
                style={{
                    width: '100%', display: 'flex', flexDirection: 'column',
                    background: 'var(--zg-surface, #fff)',
                    borderRadius: 12, overflow: 'hidden',
                    boxShadow: 'var(--zg-shadow-panel)',
                    border: `1px solid var(--zg-border-light, #ECECEC)`,
                    height: 'calc(100vh - 48px)', minHeight: 600,
                    ...generateGanttTheme(props.theme),
                }}
            >
                {/* Header skeleton */}
                <div style={{ padding: '14px 18px', borderBottom: `1px solid var(--zg-border, #D9D9D9)`, background: 'var(--zg-header-bg, #F2F5F3)', display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div className="zg-skeleton" style={{ width: 140, height: 20 }} />
                    <div style={{ flex: 1 }} />
                    <div className="zg-skeleton" style={{ width: 80, height: 30, borderRadius: 8 }} />
                    <div className="zg-skeleton" style={{ width: 200, height: 30, borderRadius: 8 }} />
                    <div className="zg-skeleton" style={{ width: 120, height: 36, borderRadius: 8 }} />
                </div>
                {/* Body skeleton */}
                <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                    {/* Sidebar skeleton */}
                    <div style={{ width: 460, flexShrink: 0, borderRight: `1px solid var(--zg-border, #D9D9D9)`, padding: '0 16px' }}>
                        {/* Column headers */}
                        <div style={{ height: 64, display: 'flex', alignItems: 'center', gap: 8, borderBottom: `1px solid var(--zg-border, #D9D9D9)` }}>
                            <div className="zg-skeleton" style={{ flex: 1, height: 12 }} />
                            <div className="zg-skeleton" style={{ width: 60, height: 12 }} />
                            <div className="zg-skeleton" style={{ width: 60, height: 12 }} />
                        </div>
                        {/* Row skeletons */}
                        {Array.from({ length: 8 }, (_, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, height: 50, borderBottom: `1px solid var(--zg-border-light, #ECECEC)` }}>
                                <div className="zg-skeleton" style={{ width: 14, height: 14, borderRadius: 3, flexShrink: 0 }} />
                                <div className="zg-skeleton" style={{ width: `${45 + (i % 4) * 10}%`, height: 12 }} />
                                <div style={{ flex: 1 }} />
                                <div className="zg-skeleton" style={{ width: 50, height: 11 }} />
                                <div className="zg-skeleton" style={{ width: 50, height: 11 }} />
                            </div>
                        ))}
                    </div>
                    {/* Chart skeleton */}
                    <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
                            {Array.from({ length: 8 }, (_, i) => (
                                <div key={i} className="zg-skeleton" style={{ flex: 1, height: 30, borderRadius: 4 }} />
                            ))}
                        </div>
                        {Array.from({ length: 8 }, (_, i) => (
                            <div key={i} style={{ height: 50, display: 'flex', alignItems: 'center' }}>
                                <div
                                    className="zg-skeleton"
                                    style={{
                                        marginLeft: `${(i * 17) % 35}%`,
                                        width: `${20 + (i % 5) * 8}%`,
                                        height: 26,
                                        borderRadius: 13,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <GanttProvider value={contextValue}>
            <div
                ref={exportRef}
                className={`zg-root ${isInfiniteCanvas ? 'zg-root--infinite' : 'zg-root--framed'} ${activePinboardTask ? 'zg-root--muted' : ''}`}
                style={{
                    width: '100%', display: 'flex', flexDirection: 'column',
                    marginLeft: 'auto', marginRight: 'auto',
                    background: isInfiniteCanvas ? 'transparent' : 'var(--zg-surface)',
                    borderRadius: isInfiniteCanvas ? 0 : 12,
                    boxShadow: isInfiniteCanvas ? 'none' : 'var(--zg-shadow-panel)',
                    overflow: 'hidden',
                    height: isInfiniteCanvas ? '100%' : 'calc(100vh - 48px)',
                    minHeight: isInfiniteCanvas ? 0 : 600,
                    border: isInfiniteCanvas ? 'none' : `1px solid ${C.borderLight}`,
                    opacity: 1,
                    transition: 'opacity 0.3s ease',
                    ...generateGanttTheme(props.theme),
                }}
            >
                <GanttHeader />
                <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative', background: C.surfaceAlt }}>
                    {!props.hideSidebar && (
                        <>
                            <div style={{ width: sidebarW, flexShrink: 0 }}>
                                <GanttGrid />
                            </div>
                            <div
                                style={{
                                    width: 5,
                                    flexShrink: 0,
                                    background: 'transparent',
                                    cursor: 'col-resize',
                                    position: 'relative',
                                    zIndex: 10,
                                    transition: 'background 0.15s',
                                }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.groupGlowSoft; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    const startX = e.clientX;
                                    const startW = sidebarW;
                                    const onMove = (ev: MouseEvent) => {
                                        const next = Math.min(SIDEBAR_MAX, Math.max(SIDEBAR_MIN, startW + ev.clientX - startX));
                                        setSidebarW(next);
                                        try { localStorage.setItem(SIDEBAR_STORAGE_KEY, String(next)); } catch { /* ignore */ }
                                    };
                                    const onUp = () => {
                                        document.removeEventListener('mousemove', onMove);
                                        document.removeEventListener('mouseup', onUp);
                                    };
                                    document.addEventListener('mousemove', onMove);
                                    document.addEventListener('mouseup', onUp);
                                }}
                            />
                        </>
                    )}
                    <GanttChart />
                </div>
                <PinboardDrawer />
            </div>
        </GanttProvider>
    );
}

export default ProjectGantt;
