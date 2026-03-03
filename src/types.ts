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
