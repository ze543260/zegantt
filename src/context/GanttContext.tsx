import { createContext, useContext } from 'react';
import type React from 'react';
import type { RefObject, ReactNode } from 'react';
import type { ProjectGanttProps, DependencyType } from '../types';
import type { ViewMode, InternalTask, OriginalType, ConnectState, PendingConnection, DisplayRow, TimelineInfo } from '../types/internal';
import type { ArrowPath } from '../utils/dependencies';

export interface GanttContextState {
    props: ProjectGanttProps;
    t: (key: string, fallback?: string) => string;

    viewMode: ViewMode;
    setViewMode: (v: ViewMode) => void;
    hoveredTaskId: string | null;
    setHoveredTaskId: (id: string | null) => void;
    selectedTaskId: string | null;
    setSelectedTaskId: (v: string | null | ((prev: string | null) => string | null)) => void;
    tooltip: { task: InternalTask; x: number; y: number } | null;
    setTooltip: (v: { task: InternalTask; x: number; y: number } | null) => void;
    popupState: { isOpen: boolean; position: { x: number; y: number }; task: InternalTask | null };
    setPopupState: (v: { isOpen: boolean; position: { x: number; y: number }; task: InternalTask | null }) => void;
    dragState: { task: InternalTask; startMouseX: number; originalStart: Date; originalEnd: Date; offsetDays: number } | null;
    setDragState: (v: { task: InternalTask; startMouseX: number; originalStart: Date; originalEnd: Date; offsetDays: number } | null) => void;
    resizeState: { task: InternalTask; edge: 'left' | 'right'; startMouseX: number; originalStart: Date; originalEnd: Date; offsetDays: number } | null;
    setResizeState: (v: { task: InternalTask; edge: 'left' | 'right'; startMouseX: number; originalStart: Date; originalEnd: Date; offsetDays: number } | null) => void;
    visibleTypes: Set<OriginalType>;
    setVisibleTypes: (v: Set<OriginalType> | ((prev: Set<OriginalType>) => Set<OriginalType>)) => void;
    toggleVisibility: (type: OriginalType) => void;
    collapsedGroups: Set<string>;
    setCollapsedGroups: (v: Set<string> | ((prev: Set<string>) => Set<string>)) => void;
    toggleGroup: (key: string) => void;
    collapsedProjects: Set<string>;
    setCollapsedProjects: (v: Set<string> | ((prev: Set<string>) => Set<string>)) => void;
    toggleProject: (projectId: string) => void;

    connectState: ConnectState | null;
    setConnectState: (v: ConnectState | null) => void;
    pendingConnection: PendingConnection | null;
    setPendingConnection: (v: PendingConnection | null) => void;
    depModalType: DependencyType;
    setDepModalType: (v: DependencyType) => void;
    depModalLag: number;
    setDepModalLag: (v: number) => void;
    depCreating: boolean;
    setDepCreating: (v: boolean) => void;
    deletingDepId: string | null;
    setDeletingDepId: (v: string | null) => void;

    chartMenu: { x: number; y: number; date: Date; projectId?: string } | null;
    setChartMenu: (v: { x: number; y: number; date: Date; projectId?: string } | null) => void;
    newActionOpen: boolean;
    setNewActionOpen: (v: boolean | ((prev: boolean) => boolean)) => void;

    // Computed Data
    tasks: InternalTask[];
    timeline: TimelineInfo;
    displayRows: DisplayRow[];
    taskRowIndex: Map<string, number>;
    arrows: ArrowPath[];
    criticalIds: Set<string>;
    delayedIds: Set<string>;
    relatedIds: Set<string>;

    // Refs and Callbacks from Scroll hook
    leftBodyRef: RefObject<HTMLDivElement | null>;
    rightBodyRef: RefObject<HTMLDivElement | null>;
    timeHeaderRef: RefObject<HTMLDivElement | null>;
    newActionRef: RefObject<HTMLDivElement | null>;
    handleRightScroll: () => void;
    handleLeftScroll: () => void;
    handleChartMouseDown: (e: React.MouseEvent) => void;
    handleChartWheel: (e: React.WheelEvent) => void;
    screenXToDate: (x: number) => Date;
    screenYToProjectId: (y: number) => string | undefined;
    openChartMenu: (e: React.MouseEvent) => void;
    handleBarMouseDown: (e: React.MouseEvent, task: InternalTask) => void;
    handleResizeMouseDown: (e: React.MouseEvent, task: InternalTask, edge: 'left' | 'right') => void;
    handleConnectDotMouseDown: (e: React.MouseEvent, task: InternalTask, edge: 'left' | 'right') => void;
    handleCreateDependency: () => void;
}

const GanttContext = createContext<GanttContextState | undefined>(undefined);

export function GanttProvider({ children, value }: { children: ReactNode; value: GanttContextState }) {
    return <GanttContext.Provider value={value}>{children}</GanttContext.Provider>;
}

export function useGanttContext() {
    const context = useContext(GanttContext);
    if (!context) {
        throw new Error('useGanttContext must be used within a GanttProvider');
    }
    return context;
}
