import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import type React from 'react';
import { GanttProvider } from './context/GanttContext';
import { GanttHeader } from './components/GanttHeader';
import { GanttGrid } from './components/GanttGrid';
import { GanttChart } from './components/GanttChart';
import { useGanttScroll } from './hooks/useGanttScroll';
import { useGanttData } from './hooks/useGanttData';
import { Loader2 } from 'lucide-react';
import { C } from './utils/constants';
import { addDays } from './utils/date';
import type { ProjectGanttProps, DependencyType } from './types';
import type { OriginalType, InternalTask, ConnectState, PendingConnection, ViewMode } from './types/internal';
import { PinboardDrawer } from './components/PinboardDrawer';
import { resolveTranslation } from './translations';
import { wouldCreateDependencyCycle } from './utils/dependencies';

const getTouchClient = (event: TouchEvent | React.TouchEvent) => {
    const touch = event.touches[0] || event.changedTouches[0];
    return touch ? { clientX: touch.clientX, clientY: touch.clientY } : { clientX: 0, clientY: 0 };
};

export function ProjectGantt(props: ProjectGanttProps) {
    const {
        onTaskChange,
        onCreateDependency,
        onDependencyError,
        dependencies,
        translations,
    } = props;

    // State
    const [viewMode, setViewMode] = useState<ViewMode>('day');
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

    // Visibility and Grouping
    const [visibleTypes, setVisibleTypes] = useState<Set<OriginalType>>(new Set(['step', 'milestone', 'event', 'note']));
    const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());
    const [collapsedProjects, setCollapsedProjects] = useState<Set<string>>(new Set());

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
        viewMode,
        locale: props.locale,
        visibleTypes,
        collapsedGroups,
        collapsedProjects,
        groupByProject: props.groupByProject,
        selectedTaskId: selectedTaskId || null
    });
    const scroll = useGanttScroll(data.timeline);

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
            if (d !== dragState.offsetDays) setDragState(prev => prev ? { ...prev, offsetDays: d } : null);
        };
        const onTouchMove = (e: TouchEvent) => {
            if (e.cancelable) e.preventDefault();
            const touch = getTouchClient(e);
            const dx = touch.clientX - dragState.startMouseX;
            const d = Math.round(dx / data.timeline.dayWidth);
            if (d !== dragState.offsetDays) setDragState(prev => prev ? { ...prev, offsetDays: d } : null);
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
        const point = getTouchClient(e);
        setPanState({ startX: point.clientX, startY: point.clientY, scrollLeft: rb.scrollLeft, scrollTop: rb.scrollTop });
    }, [resizeState, dragState, connectState, scroll.rightBodyRef]);

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

    // Chart Context Menu
    const openChartMenu = useCallback((e: React.MouseEvent) => {
        e.preventDefault(); e.stopPropagation();

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

    // Construct Context Value
    const contextValue = useMemo(() => ({
        props,
        t: (k: string, d?: string) => resolveTranslation(props.translations, k, d),
        viewMode, setViewMode,
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
        tasks: data.tasks,
        timeline: data.timeline,
        displayRows: data.displayRows,
        taskRowIndex: data.taskRowIndex || new Map(),
        arrows: data.arrows,
        criticalIds: data.criticalIds,
        delayedIds: data.delayedIds,
        relatedIds: data.relatedIds,
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
        openChartMenu,
        handleBarMouseDown,
        handleBarTouchStart,
        handleResizeMouseDown,
        handleResizeTouchStart,
        handleConnectDotMouseDown,
        handleConnectDotTouchStart,
        handleCreateDependency
    }), [
        props, viewMode, hoveredTaskId, selectedTaskId, tooltip, popupState, dragState, resizeState, connectState,
        visibleTypes, collapsedGroups, collapsedProjects, pendingConnection, depModalType, depModalLag, depCreating,
        deletingDepId, chartMenu, newActionOpen, activePinboardTask, data, scroll, toggleVisibility, toggleGroup, toggleProject,
        handleChartMouseDown, handleChartTouchStart, openChartMenu,
        handleBarMouseDown, handleBarTouchStart,
        handleResizeMouseDown, handleResizeTouchStart,
        handleConnectDotMouseDown, handleConnectDotTouchStart,
        handleCreateDependency
    ]);

    if (props.loading) {
        return (
            <div role="status" aria-live="polite" style={{ padding: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: C.textSecondary }}>
                <Loader2 size={32} style={{ animation: 'zg-spin 1.5s linear infinite', color: C.group }} />
            </div>
        );
    }

    return (
        <GanttProvider value={contextValue}>
            <div
                className="zg-root"
                style={{
                    width: '100%', display: 'flex', flexDirection: 'column',
                    marginLeft: 'auto', marginRight: 'auto',
                    background: 'var(--zg-surface)', borderRadius: 12,
                    boxShadow: 'var(--zg-shadow-panel)',
                    overflow: 'hidden',
                    height: 'calc(100vh - 48px)', minHeight: 600,
                    border: `1px solid ${C.borderLight}`,
                    opacity: activePinboardTask ? 0.6 : 1,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: activePinboardTask ? 'none' : 'auto',
                }}
            >
                <GanttHeader />
                <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative', background: C.surfaceAlt }}>
                    <GanttGrid />
                    <GanttChart />
                </div>
                <PinboardDrawer />
            </div>
        </GanttProvider>
    );
}

export default ProjectGantt;
