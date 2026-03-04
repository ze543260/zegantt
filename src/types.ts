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
    /** When true renders one project-header row per project and groups tasks by project */
    groupByProject?: boolean;
    onTaskChange?: (task: GanttTask) => void;
    onTaskClick?: (task: GanttTask) => void;
    onAddNewStage?: (date?: Date, projectId?: string) => void;
    onViewStage?: (task: GanttTask) => void;
    onEditStage?: (task: GanttTask) => void;
    onDeleteStage?: (taskId: string) => void;
    onCreateDependency?: (params: CreateDependencyParams) => Promise<void>;
    onDeleteDependency?: (dependencyId: string) => Promise<void>;
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
}
