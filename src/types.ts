import type { GanttTheme } from './utils/theme';

export type PredecessorType = "STEP" | "MILESTONE";
export type DependencyType = "FS" | "SS" | "FF" | "SF";

// Generic Gantt step item
export interface GanttStep {
    id: string;
    name: string;
    startDate?: Date | string;
    finishDate?: Date | string;
    previsionStartDate?: Date | string;
    previsionFinishDate?: Date | string;
    conclusionPercent?: number | string; // 0-1 or 0-100 depending on mapper
    projectId?: string;
    projectTitle?: string;
    /** Custom color for the task bar (Hex, RGB or CSS Var) */
    barColor?: string;
    /** Custom color for the progress part of the task bar */
    progressColor?: string;
    /** Custom color for the task bar border */
    borderColor?: string;
}

// Generic Gantt milestone
export interface GanttMilestone {
    id: string;
    name: string;
    date?: Date | string;
    finished?: boolean;
    projectId?: string;
    projectTitle?: string;
}

// Generic Gantt event
export interface GanttEvent {
    id: string;
    title: string;
    date?: Date | string;
    finished?: boolean;
    projectId?: string;
    projectTitle?: string;
}

// Generic Gantt note
export interface GanttNote {
    id: string;
    title: string;
    targetId?: string;
    predecessorId?: string;
    description?: string;
    author?: string;
    date?: Date | string;
    color?: string; // hex
    filesCount?: number;
    projectId?: string;
    projectTitle?: string;
}

// Generic Gantt dependency
export interface GanttDependency {
    id: string;
    predecessorId: string;
    predecessorName?: string;
    predecessorType: PredecessorType;
    successorId: string;
    successorName?: string;
    successorType: PredecessorType;
    type: DependencyType;
    lag: number;
}

/** Compatible task shape exposed through callbacks */
export interface GanttTask {
    id: string;
    name: string;
    start: Date;
    end: Date;
    type: string;
    progress: number;
}

export interface CreateDependencyParams {
    predecessorId: string;
    predecessorType: PredecessorType;
    successorId: string;
    successorType: PredecessorType;
    type: DependencyType;
    lag: number;
}

export interface DependencyValidationError {
    code: 'CYCLIC_DEPENDENCY';
    message: string;
    predecessorId: string;
    successorId: string;
}

export interface GanttNonWorkingDay {
    date: Date | string;
    label?: string;
}

export interface ProjectGanttProps {
    steps: GanttStep[];
    milestones?: GanttMilestone[];
    events?: GanttEvent[];
    notes?: GanttNote[];
    dependencies?: GanttDependency[];
    loading?: boolean;
    projectName?: string;
    /** BCP 47 locale tag used for date formatting (default: 'en') */
    locale?: string;
    /** Object containing localized strings or a translation function */
    translations?: Record<string, string> | ((key: string, fallback?: string) => string);
    /** Global theme customization */
    theme?: GanttTheme;
    /** When true renders one project-header row per project and groups tasks by project */
    groupByProject?: boolean;
    /** Enables infinite-canvas interaction model (zoom + pan viewport). */
    infiniteCanvas?: boolean;
    /** Hides left task list/sidebar and keeps only timeline viewport. */
    hideSidebar?: boolean;
    /** Applies automatic fit-to-screen on first paint in infinite-canvas mode. */
    initialFitToScreen?: boolean;
    onTaskChange?: (task: GanttTask) => void;
    onTaskClick?: (task: GanttTask) => void;
    onAddNewStage?: (date?: Date, projectId?: string) => void;
    onViewStage?: (task: GanttTask) => void;
    onEditStage?: (task: GanttTask) => void;
    onDeleteStage?: (taskId: string) => void;
    onCreateDependency?: (params: CreateDependencyParams) => Promise<void>;
    onDeleteDependency?: (dependencyId: string) => Promise<void>;
    onDependencyError?: (error: DependencyValidationError) => void;
    onAddMilestone?: (date?: Date, projectId?: string) => void;
    onAddEvent?: (date?: Date, projectId?: string) => void;
    onAddNote?: (date?: Date, projectId?: string) => void;
    onSaveNote?: (data: {
        title: string;
        description: string;
        color: string;
        date: string;
        predecessorId: string;
        dependencyType: DependencyType;
        files: File[];
    }) => Promise<void>;
    /** When true (default), renders task name to the right of bars narrower than 55px */
    showLabelOutside?: boolean;
    /** Dates to mark as non-working (holidays, shutdowns). Distinct from weekends. */
    nonWorkingDays?: GanttNonWorkingDay[];
    /** Controlled sidebar width in px. Uncontrolled default reads from localStorage. */
    sidebarWidth?: number;
    /** When true, shows ISO week numbers in day/week view header */
    showWeekNumbers?: boolean;
    /** Called when progress is updated via inline slider */
    onProgressChange?: (taskId: string, percent: number) => void;
    /** Called when multiple tasks are deleted in bulk */
    onBulkDelete?: (taskIds: string[]) => Promise<void>;
    /** Called when progress is updated in bulk for multiple tasks */
    onBulkProgressChange?: (taskIds: string[], percent: number) => Promise<void>;
}
