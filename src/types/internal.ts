export type OriginalType = 'step' | 'milestone' | 'event' | 'note';

export interface InternalTask {
    id: string;
    name: string;
    start: Date;
    end: Date;
    progress: number;
    originalType: OriginalType;
    deps: string[];
    noteCount?: number;
    colorIdx?: number;
    noteColor?: string;
    filesCount?: number;
    noteProjectTitle?: string;
    previsionStart?: Date;
    previsionEnd?: Date;
    hasActualDates?: boolean;
    projectId?: string;
    projectTitle?: string;
}

export type ViewMode = 'day' | 'month';

export interface TimelineInfo {
    start: Date;
    end: Date;
    totalDays: number;
    dayWidth: number;
    totalWidth: number;
    months: { date: Date; label: string; startDay: number; days: number; width: number }[];
    years?: { label: string; width: number }[];
    days: { date: Date; isToday: boolean; isWeekend: boolean }[];
    todayIndex: number;
}

export interface ConnectState {
    fromTaskId: string;
    fromEdge: 'left' | 'right';
    fromScreenX: number;
    fromScreenY: number;
    currentScreenX: number;
    currentScreenY: number;
    hoverTargetId: string | null;
}

export interface PendingConnection {
    fromTaskId: string;
    fromEdge: 'left' | 'right';
    toTaskId: string;
}

export type DisplayRow =
    | { kind: 'group'; groupType: OriginalType; label: string; count: number; collapsed: boolean; projectId?: string }
    | { kind: 'projectHeader'; projectId: string; projectTitle: string; collapsed: boolean }
    | { kind: 'task'; task: InternalTask };

export const GROUP_LABELS: Record<OriginalType, string> = {
    step: 'Etapas', milestone: 'Marcos', event: 'Eventos', note: 'Notas',
};
