import React, { useState, useCallback, useMemo } from 'react';
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

export function ProjectGantt(props: ProjectGanttProps) {
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
    const newActionRef = React.useRef<HTMLDivElement>(null);

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

    const handleResizeMouseDown = useCallback((e: React.MouseEvent, task: InternalTask, edge: 'left' | 'right') => {
        e.preventDefault(); e.stopPropagation();
        setResizeState({ task, edge, startMouseX: e.clientX, originalStart: new Date(task.start), originalEnd: new Date(task.end), offsetDays: 0 });
    }, []);

    const handleConnectDotMouseDown = useCallback((e: React.MouseEvent, task: InternalTask, edge: 'left' | 'right') => {
        e.preventDefault(); e.stopPropagation();
        setConnectState({ fromTaskId: task.id, fromEdge: edge, fromScreenX: e.clientX, fromScreenY: e.clientY, currentScreenX: e.clientX, currentScreenY: e.clientY, hoverTargetId: null });
    }, []);

    const handleCreateDependency = useCallback(async () => {
        if (!pendingConnection || !props.onCreateDependency) return;
        const taskMap = new Map(data.tasks.map(t => [t.id, t]));
        const fromTask = taskMap.get(pendingConnection.fromTaskId);
        const toTask = taskMap.get(pendingConnection.toTaskId);
        if (!fromTask || !toTask) return;

        const typeFromOrig = (t: InternalTask) => (t.originalType === 'step' ? 'STEP' : 'MILESTONE') as 'STEP' | 'MILESTONE';
        const predTask = pendingConnection.fromEdge === 'right' ? fromTask : toTask;
        const succTask = pendingConnection.fromEdge === 'right' ? toTask : fromTask;

        setDepCreating(true);
        try {
            await props.onCreateDependency({ predecessorId: predTask.id, predecessorType: typeFromOrig(predTask), successorId: succTask.id, successorType: typeFromOrig(succTask), type: depModalType, lag: depModalLag });
            setPendingConnection(null);
        } finally {
            setDepCreating(false);
        }
    }, [pendingConnection, data.tasks, props.onCreateDependency, depModalType, depModalLag]);

    // Global drag & drop effects (Mouse move/up on document)
    // Drag
    React.useEffect(() => {
        if (!dragState) return;
        const onMove = (e: MouseEvent) => {
            const dx = e.clientX - dragState.startMouseX;
            const d = Math.round(dx / data.timeline.dayWidth);
            if (d !== dragState.offsetDays) setDragState(prev => prev ? { ...prev, offsetDays: d } : null);
        };
        const onUp = () => {
            if (dragState.offsetDays !== 0 && props.onTaskChange) {
                props.onTaskChange({
                    id: dragState.task.id, name: dragState.task.name,
                    start: addDays(dragState.originalStart, dragState.offsetDays),
                    end: addDays(dragState.originalEnd, dragState.offsetDays),
                    type: dragState.task.originalType === 'step' ? 'task' : 'milestone',
                    progress: dragState.task.progress,
                });
            }
            setDragState(null);
        };
        document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', onUp);
        return () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
    }, [dragState, data.timeline.dayWidth, props.onTaskChange]);

    // Resize
    React.useEffect(() => {
        if (!resizeState) return;
        const onMove = (e: MouseEvent) => {
            const dx = e.clientX - resizeState.startMouseX;
            const d = Math.round(dx / data.timeline.dayWidth);
            if (d !== resizeState.offsetDays) setResizeState(prev => prev ? { ...prev, offsetDays: d } : null);
        };
        const onUp = () => {
            if (resizeState.offsetDays !== 0 && props.onTaskChange) {
                const newStart = resizeState.edge === 'left' ? addDays(resizeState.originalStart, resizeState.offsetDays) : resizeState.originalStart;
                const newEnd = resizeState.edge === 'right' ? addDays(resizeState.originalEnd, resizeState.offsetDays) : resizeState.originalEnd;
                if (newEnd > newStart) props.onTaskChange({ id: resizeState.task.id, name: resizeState.task.name, start: newStart, end: newEnd, type: 'task', progress: resizeState.task.progress });
            }
            setResizeState(null);
        };
        document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', onUp);
        return () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
    }, [resizeState, data.timeline.dayWidth, props.onTaskChange]);

    // Connect
    React.useEffect(() => {
        if (!connectState) return;
        const onMove = (e: MouseEvent) => {
            let hoverTarget: string | null = null;
            for (const el of document.elementsFromPoint(e.clientX, e.clientY)) {
                const tid = (el as HTMLElement).dataset?.taskId;
                if (tid && tid !== connectState.fromTaskId) { hoverTarget = tid; break; }
            }
            setConnectState(prev => prev ? { ...prev, currentScreenX: e.clientX, currentScreenY: e.clientY, hoverTargetId: hoverTarget } : null);
        };
        const onUp = (e: MouseEvent) => {
            let targetId: string | null = null;
            for (const el of document.elementsFromPoint(e.clientX, e.clientY)) {
                const tid = (el as HTMLElement).dataset?.taskId;
                if (tid && tid !== connectState.fromTaskId) { targetId = tid; break; }
            }
            if (targetId && props.onCreateDependency) {
                setPendingConnection({ fromTaskId: connectState.fromTaskId, fromEdge: connectState.fromEdge, toTaskId: targetId });
                setDepModalType('FS'); setDepModalLag(0);
            }
            setConnectState(null);
        };
        document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', onUp);
        return () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
    }, [connectState?.fromTaskId, connectState?.fromEdge, props.onCreateDependency]);

    // Pan (grab-drag)
    const [panState, setPanState] = useState<{ startX: number; startY: number; scrollLeft: number; scrollTop: number } | null>(null);
    const handleChartMouseDown = useCallback((e: React.MouseEvent) => {
        if (resizeState || dragState || e.button === 2) return;
        const rb = scroll.rightBodyRef.current;
        if (!rb) return;
        e.preventDefault();
        setPanState({ startX: e.clientX, startY: e.clientY, scrollLeft: rb.scrollLeft, scrollTop: rb.scrollTop });
    }, [resizeState, dragState, scroll.rightBodyRef]);

    React.useEffect(() => {
        if (!panState) return;
        const onMove = (e: MouseEvent) => {
            const rb = scroll.rightBodyRef.current;
            if (!rb) return;
            rb.scrollLeft = panState.scrollLeft - (e.clientX - panState.startX);
            rb.scrollTop = panState.scrollTop - (e.clientY - panState.startY);
            if (scroll.leftBodyRef.current) scroll.leftBodyRef.current.scrollTop = rb.scrollTop;
            if (scroll.timeHeaderRef.current) scroll.timeHeaderRef.current.scrollLeft = rb.scrollLeft;
        };
        const onUp = () => setPanState(null);
        document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', onUp);
        return () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
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
    React.useEffect(() => {
        if (!chartMenu) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setChartMenu(null); };
        const onDown = (e: MouseEvent) => { if (!(e.target as HTMLElement).closest('[data-menu="chart-create"]')) setChartMenu(null); };
        const onScroll = () => setChartMenu(null);
        document.addEventListener('keydown', onKey); document.addEventListener('click', onDown); window.addEventListener('scroll', onScroll, true);
        return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onDown); window.removeEventListener('scroll', onScroll, true); };
    }, [chartMenu]);

    // Construct Context Value
    const contextValue = useMemo(() => ({
        props, t: (k: string, d?: string) => props.translations ? (typeof props.translations === 'function' ? props.translations(k, d) : props.translations[k] || d || '') : (d || ''),
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
        openChartMenu,
        handleBarMouseDown,
        handleResizeMouseDown,
        handleConnectDotMouseDown,
        handleCreateDependency
    }), [
        props, viewMode, hoveredTaskId, selectedTaskId, tooltip, popupState, dragState, resizeState, connectState,
        visibleTypes, collapsedGroups, collapsedProjects, pendingConnection, depModalType, depModalLag, depCreating,
        deletingDepId, chartMenu, newActionOpen, data, scroll, toggleVisibility, toggleGroup, toggleProject,
        handleChartMouseDown, openChartMenu, handleBarMouseDown, handleResizeMouseDown, handleConnectDotMouseDown, handleCreateDependency
    ]);

    if (props.loading) {
        return (
            <div style={{ padding: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: C.textSecondary }}>
                <Loader2 size={32} style={{ animation: 'spin 1.5s linear infinite', color: C.group }} />
            </div>
        );
    }

    return (
        <GanttProvider value={contextValue}>
            <div
                className="w-full flex flex-col mx-auto bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden"
                style={{ height: 'calc(100vh - 48px)', minHeight: 600, border: `1px solid ${C.borderLight}` }}
            >
                <GanttHeader />
                <div className="flex flex-1 overflow-hidden relative" style={{ background: C.surfaceAlt }}>
                    <GanttGrid />
                    <GanttChart />
                </div>
            </div>
        </GanttProvider>
    );
}

export default ProjectGantt;
