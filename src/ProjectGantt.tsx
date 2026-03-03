import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import type { GanttStep, GanttMilestone, GanttEvent, GanttNote, GanttDependency, PredecessorType, DependencyType } from './types';
import { Loader2, Flag, Clock, MessageCircle, Plus, ChevronDown, ChevronRight, AlertTriangle, Eye, Edit2, Trash2, Paperclip } from 'lucide-react';


// ═══════════════════════════════════════════════════════════════════
//  DESIGN SYSTEM
// ═══════════════════════════════════════════════════════════════════
const tw = {
    white: '#FFFFFF',
    dark_gray: '#4F4F4F',
    gray: '#7B7B7B',
    light_gray: '#D9D9D9',
    dark_green: '#1A3C30',
    water_green: '#7ab7a3',
    light_yellow: '#D1D8A0',
    light_green: '#A0D8A8',
    orange: '#CD6200',
    yellow: '#FFBB1C',
    red: '#FF0000',
};

const C = {
    pageBg: '#F8FAFB',
    surface: tw.white,         // #FFFFFF
    surfaceAlt: '#F7FAF8',        // subtle alternating row
    headerBg: '#F2F5F3',        // soft green-tinted header
    textTitle: tw.dark_green,    // #1A3C30
    textPrimary: tw.dark_gray,     // #4F4F4F
    textSecondary: tw.gray,          // #7B7B7B
    textMuted: tw.light_gray,    // #D9D9D9

    group: tw.dark_green,    // #1A3C30
    groupLight: tw.water_green,   // #4AAE8B78
    task: tw.dark_green,    // #1A3C30 (progress)
    taskLight: tw.light_yellow,  // #D1D8A0 (bar bg)
    taskMuted: tw.light_green,   // #A0D8A8 (bar border)
    milestone: tw.dark_green,    // #1A3C30
    milestoneRing: tw.light_green,   // #A0D8A8
    event: tw.orange,        // #CD6200
    eventLight: `${tw.yellow}33`, // yellow translucent
    note: tw.yellow,        // #FFBB1C

    border: tw.light_gray,    // #D9D9D9
    borderLight: '#ECECEC',
    weekendBg: '#F4F6F5',

    today: tw.red,           // #FF0000
    todayBg: '#FF000008',      // today column tint
    arrow: tw.gray,          // #7B7B7B
    arrowHover: tw.dark_green,    // #1A3C30
} as const;

// ═══════════════════════════════════════════════════════════════════
//  DIMENSIONS
// ═══════════════════════════════════════════════════════════════════
const ROW_H = 50;
const HEADER_ROW_H = 32;
const HEADER_H = HEADER_ROW_H * 2;
const LEFT_W = 460;
const BAR_H = 26;
const PILL_H = 28;   // height for point-event pills
const PILL_MIN_W = 120;  // minimum pill width so label is visible
const POSTIT_W = 90;   // post-it width
const POSTIT_H = 44;   // post-it height (portrait)
const DAY_W_MONTH = 40;
const DAY_W_YEAR = 3.5;

// ═══════════════════════════════════════════════════════════════════
//  STEP COLOR PALETTE — rotating colours per step
// ═══════════════════════════════════════════════════════════════════
const STEP_PALETTE: { bar: string; barBorder: string; progress: string }[] = [
    { bar: '#D1D8A0', barBorder: '#A0D8A8', progress: '#1A3C30' },   // sistema (light_yellow)
    { bar: '#A0D8C8', barBorder: '#6BBFA8', progress: '#14534A' },   // teal
    { bar: '#B8C9E8', barBorder: '#8AAAD6', progress: '#2C4A70' },   // blue
    { bar: '#E8C9A0', barBorder: '#D6AA7A', progress: '#6B4510' },   // amber
    { bar: '#D8A0C8', barBorder: '#C47AAE', progress: '#6B2058' },   // pink
    { bar: '#A0C8D8', barBorder: '#74ACBF', progress: '#1A4F60' },   // sky
    { bar: '#C8D8A0', barBorder: '#A8BF74', progress: '#3F5014' },   // lime
    { bar: '#D8B0A0', barBorder: '#C4907A', progress: '#6B3020' },   // coral
    { bar: '#B0A0D8', barBorder: '#937ACE', progress: '#3A2070' },   // violet
    { bar: '#A0D8B0', barBorder: '#70C888', progress: '#1A5030' },   // mint
];

// ═══════════════════════════════════════════════════════════════════
//  TYPES
// ═══════════════════════════════════════════════════════════════════
type OriginalType = 'step' | 'milestone' | 'event' | 'note';

interface InternalTask {
    id: string;
    name: string;
    start: Date;
    end: Date;
    progress: number;
    originalType: OriginalType;
    deps: string[];
    noteCount?: number;
    /** Index into STEP_PALETTE (only for steps) */
    colorIdx?: number;
    /** Hex color for notes (from note.color) */
    noteColor?: string;
    /** Number of file attachments (notes) */
    filesCount?: number;
    /** Project/obra title (notes only) */
    noteProjectTitle?: string;
    /** Planned/prevision start date (steps only) */
    previsionStart?: Date;
    /** Planned/prevision end date (steps only) */
    previsionEnd?: Date;
    /** True when the step has real startDate/finishDate (vs only prevision) */
    hasActualDates?: boolean;
    /** Project ID — used for groupByProject mode */
    projectId?: string;
    /** Project title — used for groupByProject mode */
    projectTitle?: string;
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
}

// ConnectState: tracks an in-progress connection drag
interface ConnectState {
    fromTaskId: string;
    fromEdge: 'left' | 'right';
    fromScreenX: number; // screen coords for SVG overlay
    fromScreenY: number;
    currentScreenX: number;
    currentScreenY: number;
    hoverTargetId: string | null;
}

// PendingConnection: when user drops on a target, show the type selector modal
interface PendingConnection {
    fromTaskId: string;
    fromEdge: 'left' | 'right';
    toTaskId: string;
}

type DisplayRow =
    | { kind: 'group'; groupType: OriginalType; label: string; count: number; collapsed: boolean; projectId?: string }
    | { kind: 'projectHeader'; projectId: string; projectTitle: string; collapsed: boolean }
    | { kind: 'task'; task: InternalTask };

const GROUP_LABELS: Record<OriginalType, string> = {
    step: 'Etapas', milestone: 'Marcos', event: 'Eventos', note: 'Notas',
};

type ViewMode = 'month' | 'year';

// ═══════════════════════════════════════════════════════════════════
//  DATE UTILITIES
// ═══════════════════════════════════════════════════════════════════
const MS_DAY = 86_400_000;
const addDays = (d: Date, n: number) => new Date(d.getTime() + n * MS_DAY);
const diffDays = (a: Date, b: Date) => Math.round((b.getTime() - a.getTime()) / MS_DAY);
const isWeekend = (d: Date) => d.getDay() === 0 || d.getDay() === 6;
const startOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1);
const endOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth() + 1, 0);

const fmtDateShort = (d: Date) =>
    `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;

const MONTH_NAMES_PT: Record<number, string> = {
    0: 'JANEIRO', 1: 'FEVEREIRO', 2: 'MARÇO', 3: 'ABRIL',
    4: 'MAIO', 5: 'JUNHO', 6: 'JULHO', 7: 'AGOSTO',
    8: 'SETEMBRO', 9: 'OUTUBRO', 10: 'NOVEMBRO', 11: 'DEZEMBRO',
};

// ═══════════════════════════════════════════════════════════════════
//  TIMELINE COMPUTATION
// ═══════════════════════════════════════════════════════════════════
interface TimelineInfo {
    start: Date;
    end: Date;
    totalDays: number;
    dayWidth: number;
    totalWidth: number;
    months: { date: Date; label: string; startDay: number; days: number }[];
}

function computeTimeline(tasks: InternalTask[], mode: ViewMode): TimelineInfo {
    const dayW = mode === 'month' ? DAY_W_MONTH : DAY_W_YEAR;

    if (tasks.length === 0) {
        const now = new Date();
        const s = startOfMonth(now);
        const e = endOfMonth(now);
        const totalD = diffDays(s, e) + 1;
        return {
            start: s, end: e, totalDays: totalD, dayWidth: dayW,
            totalWidth: totalD * dayW,
            months: [{ date: s, label: `${MONTH_NAMES_PT[s.getMonth()]} DE ${s.getFullYear()}`, startDay: 0, days: totalD }],
        };
    }

    let minD = new Date(tasks[0].start);
    let maxD = new Date(tasks[0].end);
    tasks.forEach(t => {
        if (t.start < minD) minD = new Date(t.start);
        if (t.end > maxD) maxD = new Date(t.end);
    });

    const s = startOfMonth(addDays(minD, -14));
    const e = endOfMonth(addDays(maxD, 14));
    const totalD = diffDays(s, e) + 1;

    const months: TimelineInfo['months'] = [];
    let cursor = new Date(s);
    while (cursor <= e) {
        const mEnd = endOfMonth(cursor);
        const clampedEnd = mEnd > e ? e : mEnd;
        const startDay = diffDays(s, cursor);
        const days = diffDays(cursor, clampedEnd) + 1;
        months.push({
            date: new Date(cursor),
            label: `${MONTH_NAMES_PT[cursor.getMonth()]} DE ${cursor.getFullYear()}`,
            startDay,
            days,
        });
        cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
    }

    return { start: s, end: e, totalDays: totalD, dayWidth: dayW, totalWidth: totalD * dayW, months };
}

function dateToX(date: Date, tl: TimelineInfo): number {
    return diffDays(tl.start, date) * tl.dayWidth;
}

// ═══════════════════════════════════════════════════════════════════
//  DEPENDENCY ARROWS (orthogonal routing)
// ═══════════════════════════════════════════════════════════════════
interface ArrowPath {
    predId: string;
    succId: string;
    path: string;
    headX: number;
    headY: number;
}

function computeArrows(
    tasks: InternalTask[],
    deps: GanttDependency[],
    tl: TimelineInfo,
    taskRowIndex: Map<string, number>,
): ArrowPath[] {
    const taskMap = new Map<string, InternalTask>();
    tasks.forEach(t => taskMap.set(t.id, t));

    return deps.map(dep => {
        const pred = taskMap.get(dep.predecessorId);
        const succ = taskMap.get(dep.successorId);
        if (!pred || !succ) return null;

        const predIdx = taskRowIndex.get(pred.id);
        const succIdx = taskRowIndex.get(succ.id);
        if (predIdx == null || succIdx == null) return null;

        const predIsPoint = pred.originalType !== 'step';
        const succIsPoint = succ.originalType !== 'step';

        // Pill left edge = dateToX - 6; right edge = dateToX - 6 + PILL_MIN_W
        const px = predIsPoint
            ? dateToX(pred.start, tl) + PILL_MIN_W    // right edge of pill + gap
            : dateToX(pred.end, tl);
        const py = predIdx * ROW_H + ROW_H / 2;

        const sx = succIsPoint
            ? dateToX(succ.start, tl) - 10             // left edge of pill - gap
            : dateToX(succ.start, tl);
        const sy = succIdx * ROW_H + ROW_H / 2;

        const gap = 14;
        const midX = Math.max(px + gap, sx - gap);

        const d = py === sy
            ? `M${px},${py} L${sx - 6},${sy}`
            : `M${px},${py} L${midX},${py} L${midX},${sy} L${sx - 6},${sy}`;

        return { predId: pred.id, succId: succ.id, path: d, headX: sx - 6, headY: sy };
    }).filter(Boolean) as ArrowPath[];
}

// ═══════════════════════════════════════════════════════════════════
//  CRITICAL PATH — find tasks with zero float via forward/backward pass
// ═══════════════════════════════════════════════════════════════════
function computeCriticalPath(tasks: InternalTask[], deps: GanttDependency[]): Set<string> {
    if (tasks.length === 0 || deps.length === 0) return new Set();
    const taskMap = new Map<string, InternalTask>();
    tasks.forEach(t => taskMap.set(t.id, t));
    const taskIds = new Set(tasks.map(t => t.id));
    const valid = deps.filter(d => taskIds.has(d.predecessorId) && taskIds.has(d.successorId));
    if (valid.length === 0) return new Set();

    const succs = new Map<string, string[]>();
    const preds = new Map<string, string[]>();
    valid.forEach(d => {
        if (!succs.has(d.predecessorId)) succs.set(d.predecessorId, []);
        succs.get(d.predecessorId)!.push(d.successorId);
        if (!preds.has(d.successorId)) preds.set(d.successorId, []);
        preds.get(d.successorId)!.push(d.predecessorId);
    });

    const dur = (t: InternalTask) => Math.max(1, diffDays(t.start, t.end));

    // Topological sort
    const visited = new Set<string>();
    const order: string[] = [];
    function visit(id: string) {
        if (visited.has(id)) return;
        visited.add(id);
        (succs.get(id) || []).forEach(visit);
        order.unshift(id);
    }
    tasks.forEach(t => visit(t.id));

    // Forward pass — earliest start/finish
    const es = new Map<string, number>();
    const ef = new Map<string, number>();
    for (const id of order) {
        const t = taskMap.get(id)!;
        const ps = preds.get(id) || [];
        let maxEF = 0;
        for (const p of ps) maxEF = Math.max(maxEF, ef.get(p) || 0);
        const start = ps.length > 0 ? maxEF : 0;
        es.set(id, start);
        ef.set(id, start + dur(t));
    }
    let projectEnd = 0;
    ef.forEach(v => { if (v > projectEnd) projectEnd = v; });

    // Backward pass — latest start/finish
    const ls = new Map<string, number>();
    const lf = new Map<string, number>();
    for (let i = order.length - 1; i >= 0; i--) {
        const id = order[i];
        const t = taskMap.get(id)!;
        const ss = succs.get(id) || [];
        let minLS = projectEnd;
        for (const s of ss) minLS = Math.min(minLS, ls.get(s) ?? projectEnd);
        lf.set(id, ss.length > 0 ? minLS : projectEnd);
        ls.set(id, (lf.get(id) || 0) - dur(t));
    }

    // Zero float = critical; only tasks that participate in a dependency
    const linked = new Set<string>();
    valid.forEach(d => { linked.add(d.predecessorId); linked.add(d.successorId); });
    const critical = new Set<string>();
    for (const id of order) {
        if (!linked.has(id)) continue;
        const float = (ls.get(id) || 0) - (es.get(id) || 0);
        if (Math.abs(float) < 0.5) critical.add(id);
    }
    return critical;
}

// ═══════════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
export function ProjectGantt({
    steps,
    milestones,
    events,
    notes,
    dependencies,
    loading,
    projectName,
    translations,
    groupByProject,
    onTaskChange,
    onTaskClick,
    onAddNewStage,
    onViewStage,
    onEditStage,
    onDeleteStage,
    onCreateDependency,
    onDeleteDependency,
    onAddMilestone,
    onAddEvent,
    onAddNote,
}: ProjectGanttProps) {
    const t = (key: string, fallback?: string) => {
        if (typeof translations === 'function') return (translations as any)(key, fallback) as string;
        if (translations && typeof translations === 'object') return (translations as Record<string, string>)[key] || fallback || key;
        return fallback || key;
    };

    // ── State ────────────────────────────────────────
    const [viewMode, setViewMode] = useState<ViewMode>('month');
    const [hoveredTaskId, setHoveredTaskId] = useState<string | null>(null);
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
    const [tooltip, setTooltip] = useState<{ task: InternalTask; x: number; y: number } | null>(null);
    const [popupState, setPopupState] = useState<{
        isOpen: boolean;
        position: { x: number; y: number };
        task: InternalTask | null;
    }>({ isOpen: false, position: { x: 0, y: 0 }, task: null });

    const [dragState, setDragState] = useState<{
        task: InternalTask;
        startMouseX: number;
        originalStart: Date;
        originalEnd: Date;
        offsetDays: number;
    } | null>(null);

    const [resizeState, setResizeState] = useState<{
        task: InternalTask;
        edge: 'left' | 'right';
        startMouseX: number;
        originalStart: Date;
        originalEnd: Date;
        offsetDays: number;
    } | null>(null);

    const [visibleTypes, setVisibleTypes] = useState<Set<OriginalType>>(
        new Set<OriginalType>(['step', 'milestone', 'event', 'note']),
    );
    const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());
    const [collapsedProjects, setCollapsedProjects] = useState<Set<string>>(new Set());

    // ── Connection drag state ────────────────────────
    const [connectState, setConnectState] = useState<ConnectState | null>(null);
    const [pendingConnection, setPendingConnection] = useState<PendingConnection | null>(null);
    const [depModalType, setDepModalType] = useState<DependencyType>('FS');
    const [depModalLag, setDepModalLag] = useState<number>(0);
    const [depCreating, setDepCreating] = useState(false);
    const [deletingDepId, setDeletingDepId] = useState<string | null>(null);

    // ── Chart context menu (right-click / dbl-click on empty area) ──
    const [chartMenu, setChartMenu] = useState<{ x: number; y: number; date: Date; projectId?: string } | null>(null);

    // ── Nova Ação dropdown ──
    const [newActionOpen, setNewActionOpen] = useState(false);
    const newActionRef = useRef<HTMLDivElement>(null);

    // ── Refs ─────────────────────────────────────────
    const leftBodyRef = useRef<HTMLDivElement>(null);
    const rightBodyRef = useRef<HTMLDivElement>(null);
    const timeHeaderRef = useRef<HTMLDivElement>(null);

    // ── Transform data ──────────────────────────────
    const tasks: InternalTask[] = useMemo(() => {
        const result: InternalTask[] = [];

        let stepColorCounter = 0;
        steps.forEach(step => {
            const hasActual = !!(step.startDate && step.finishDate);
            const startRaw = step.startDate || step.previsionStartDate;
            const endRaw = step.finishDate || step.previsionFinishDate;
            if (!startRaw || !endRaw) return;
            const s = new Date(startRaw);
            const e = new Date(endRaw);
            if (isNaN(s.getTime()) || isNaN(e.getTime())) return;
            if (e <= s) e.setDate(e.getDate() + 1);

            // Prevision (planned) dates — always track them separately
            let previsionStart: Date | undefined;
            let previsionEnd: Date | undefined;
            if (step.previsionStartDate && step.previsionFinishDate) {
                const ps = new Date(step.previsionStartDate);
                const pe = new Date(step.previsionFinishDate);
                if (!isNaN(ps.getTime()) && !isNaN(pe.getTime())) {
                    previsionStart = ps;
                    previsionEnd = pe <= ps ? addDays(ps, 1) : pe;
                }
            }

            const stepDeps = dependencies
                ?.filter(d => d.successorId === step.id)
                .map(d => d.predecessorId) || [];

            result.push({
                id: step.id,
                name: step.name,
                start: s,
                end: e,
                progress: step.conclusionPercent ? Number(step.conclusionPercent) * 100 : 0,
                originalType: 'step',
                deps: stepDeps,
                colorIdx: stepColorCounter % STEP_PALETTE.length,
                previsionStart,
                previsionEnd,
                hasActualDates: hasActual,
                projectId: step.projectId || undefined,
                projectTitle: step.projectTitle || undefined,
            });
            stepColorCounter++;
        });

        milestones?.forEach(m => {
            if (!m.date) return;
            const d = new Date(m.date);
            if (isNaN(d.getTime())) return;
            const mDeps = dependencies
                ?.filter(dep => dep.successorId === m.id)
                .map(dep => dep.predecessorId) || [];
            result.push({
                id: m.id, name: m.name, start: d, end: d,
                progress: m.finished ? 100 : 0,
                originalType: 'milestone', deps: mDeps,
                projectId: m.projectId || undefined,
                projectTitle: m.projectTitle || undefined,
            });
        });

        events?.forEach(ev => {
            if (!ev.date) return;
            const d = new Date(ev.date);
            if (isNaN(d.getTime())) return;
            const eDeps = dependencies
                ?.filter(dep => dep.successorId === ev.id)
                .map(dep => dep.predecessorId) || [];
            result.push({
                id: ev.id, name: ev.title, start: d, end: d,
                progress: ev.finished ? 100 : 0,
                originalType: 'event', deps: eDeps,
                projectId: ev.projectId || undefined,
                projectTitle: ev.projectTitle || undefined,
            });
        });

        notes?.forEach(n => {
            if (!n.date) return;
            const d = new Date(n.date);
            if (isNaN(d.getTime())) return;
            result.push({
                id: n.id, name: n.title || 'Nota', start: d, end: d,
                progress: 0, originalType: 'note', deps: [],
                noteCount: 1,
                noteColor: n.color || C.note,
                filesCount: n.filesCount || 0,
                noteProjectTitle: n.projectTitle || undefined,
                projectId: n.projectId || undefined,
                projectTitle: n.projectTitle || undefined,
            });
        });

        return result;
    }, [steps, milestones, events, notes, dependencies]);

    const timeline = useMemo(() => computeTimeline(tasks, viewMode), [tasks, viewMode]);

    // ── Display rows (grouped & collapsible) ────────
    const displayRows: DisplayRow[] = useMemo(() => {
        const rows: DisplayRow[] = [];
        const typeOrder: OriginalType[] = ['step', 'milestone', 'event', 'note'];

        if (groupByProject) {
            // Collect unique projects in insertion order
            const projectsMap = new Map<string, string>();
            tasks.forEach(t => {
                if (t.projectId && !projectsMap.has(t.projectId))
                    projectsMap.set(t.projectId, t.projectTitle || t.projectId);
            });

            for (const [projectId, projectTitle] of Array.from(projectsMap.entries())) {
                const projectCollapsed = collapsedProjects.has(projectId);
                rows.push({ kind: 'projectHeader', projectId, projectTitle, collapsed: projectCollapsed });

                if (!projectCollapsed) {
                    const projectTasks = tasks.filter(t => t.projectId === projectId);
                    for (const type of typeOrder) {
                        if (!visibleTypes.has(type)) continue;
                        const groupTasks = projectTasks.filter(t => t.originalType === type);
                        if (groupTasks.length === 0) continue;
                        const key = `${projectId}-${type}`;
                        const collapsed = collapsedGroups.has(key);
                        rows.push({ kind: 'group', groupType: type, label: GROUP_LABELS[type], count: groupTasks.length, collapsed, projectId });
                        if (!collapsed) groupTasks.forEach(t => rows.push({ kind: 'task', task: t }));
                    }
                }
            }
        } else {
            for (const type of typeOrder) {
                if (!visibleTypes.has(type)) continue;
                const groupTasks = tasks.filter(t => t.originalType === type);
                if (groupTasks.length === 0) continue;
                const collapsed = collapsedGroups.has(type);
                rows.push({ kind: 'group', groupType: type, label: GROUP_LABELS[type], count: groupTasks.length, collapsed });
                if (!collapsed) groupTasks.forEach(t => rows.push({ kind: 'task', task: t }));
            }
        }
        return rows;
    }, [tasks, visibleTypes, collapsedGroups, collapsedProjects, groupByProject]);

    const taskRowIndex = useMemo(() => {
        const map = new Map<string, number>();
        displayRows.forEach((row, idx) => { if (row.kind === 'task') map.set(row.task.id, idx); });
        return map;
    }, [displayRows]);

    const arrows = useMemo(
        () => computeArrows(tasks, dependencies || [], timeline, taskRowIndex),
        [tasks, dependencies, timeline, taskRowIndex],
    );

    const criticalIds = useMemo(() => computeCriticalPath(tasks, dependencies || []), [tasks, dependencies]);

    const delayedIds = useMemo(() => {
        const set = new Set<string>();
        const now = new Date();
        tasks.forEach(t => {
            if (t.originalType === 'step' && t.end < now && t.progress < 100) set.add(t.id);
        });
        return set;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tasks]);

    // ── Related IDs (transitive neighbours of selectedTaskId via deps) ──
    const relatedIds = useMemo(() => {
        if (!selectedTaskId || !dependencies?.length) return new Set<string>();
        const set = new Set<string>();
        const queue = [selectedTaskId];
        while (queue.length) {
            const cur = queue.shift()!;
            for (const dep of dependencies) {
                if (dep.predecessorId === cur && !set.has(dep.successorId)) {
                    set.add(dep.successorId); queue.push(dep.successorId);
                }
                if (dep.successorId === cur && !set.has(dep.predecessorId)) {
                    set.add(dep.predecessorId); queue.push(dep.predecessorId);
                }
            }
        }
        return set;
    }, [selectedTaskId, dependencies]);

    // ── Scroll sync ─────────────────────────────────
    const syncing = useRef(false);

    const handleRightScroll = useCallback(() => {
        if (syncing.current) return;
        syncing.current = true;
        const rb = rightBodyRef.current;
        if (rb && leftBodyRef.current) leftBodyRef.current.scrollTop = rb.scrollTop;
        if (rb && timeHeaderRef.current) timeHeaderRef.current.scrollLeft = rb.scrollLeft;
        syncing.current = false;
    }, []);

    const handleLeftScroll = useCallback(() => {
        if (syncing.current) return;
        syncing.current = true;
        if (leftBodyRef.current && rightBodyRef.current)
            rightBodyRef.current.scrollTop = leftBodyRef.current.scrollTop;
        syncing.current = false;
    }, []);

    // ── Center on today on first render ─────────────
    const didScrollToToday = useRef(false);
    useEffect(() => {
        if (didScrollToToday.current || !timeline.totalWidth) return;
        const rb = rightBodyRef.current;
        if (!rb) return;
        const todayPx = dateToX(new Date(), timeline);
        if (todayPx >= 0 && todayPx <= timeline.totalWidth) {
            const scrollTarget = todayPx - rb.clientWidth / 2;
            rb.scrollLeft = Math.max(0, scrollTarget);
            if (timeHeaderRef.current) timeHeaderRef.current.scrollLeft = rb.scrollLeft;
            didScrollToToday.current = true;
        }
    }, [timeline]);

    // ── Pan (grab-drag on empty area) ───────────────
    const [panState, setPanState] = useState<{ startX: number; startY: number; scrollLeft: number; scrollTop: number } | null>(null);

    const handleChartMouseDown = useCallback((e: React.MouseEvent) => {
        // Bars/pills already stopPropagation, so any event here is on empty background
        if (resizeState || dragState) return;
        // Right-click opens the create menu instead of panning
        if (e.button === 2) return;
        const rb = rightBodyRef.current;
        if (!rb) return;
        e.preventDefault();
        setPanState({ startX: e.clientX, startY: e.clientY, scrollLeft: rb.scrollLeft, scrollTop: rb.scrollTop });
    }, [resizeState, dragState]);

    useEffect(() => {
        if (!panState) return;
        const onMove = (e: MouseEvent) => {
            const rb = rightBodyRef.current;
            if (!rb) return;
            const dx = e.clientX - panState.startX;
            const dy = e.clientY - panState.startY;
            rb.scrollLeft = panState.scrollLeft - dx;
            rb.scrollTop = panState.scrollTop - dy;
            // sync
            if (leftBodyRef.current) leftBodyRef.current.scrollTop = rb.scrollTop;
            if (timeHeaderRef.current) timeHeaderRef.current.scrollLeft = rb.scrollLeft;
        };
        const onUp = () => setPanState(null);
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
        return () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
    }, [panState]);

    // ── Wheel: scroll horizontally with Shift or trackpad X, vertically otherwise ──
    const handleChartWheel = useCallback((e: React.WheelEvent) => {
        const rb = rightBodyRef.current;
        if (!rb) return;
        e.preventDefault();

        // Shift+wheel or horizontal trackpad → scroll horizontally
        if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            const delta = e.shiftKey ? e.deltaY : e.deltaX;
            rb.scrollLeft += delta;
            if (timeHeaderRef.current) timeHeaderRef.current.scrollLeft = rb.scrollLeft;
        } else {
            // Normal wheel → scroll vertically
            rb.scrollTop += e.deltaY;
            if (leftBodyRef.current) leftBodyRef.current.scrollTop = rb.scrollTop;
        }
    }, []);

    // ── Chart context menu ───────────────────────────
    const screenXToDate = useCallback((screenX: number): Date => {
        const rb = rightBodyRef.current;
        if (!rb) return new Date();
        const rect = rb.getBoundingClientRect();
        const relX = screenX - rect.left + rb.scrollLeft;
        const day = Math.max(0, Math.floor(relX / timeline.dayWidth));
        return addDays(timeline.start, day);
    }, [timeline]);

    const screenYToProjectId = useCallback((screenY: number): string | undefined => {
        if (!groupByProject) return undefined;
        const lb = leftBodyRef.current;
        if (!lb) return undefined;
        const rect = lb.getBoundingClientRect();
        const relY = screenY - rect.top + lb.scrollTop;
        const rowIdx = Math.max(0, Math.floor(relY / ROW_H));
        for (let i = Math.min(rowIdx, displayRows.length - 1); i >= 0; i--) {
            const row = displayRows[i];
            if (row.kind === 'projectHeader') return row.projectId;
            if (row.kind === 'task' && row.task.projectId) return row.task.projectId;
            if (row.kind === 'group' && row.projectId) return row.projectId;
        }
        return undefined;
    }, [groupByProject, displayRows]);

    const openChartMenu = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const projectId = screenYToProjectId(e.clientY);
        setChartMenu({ x: e.clientX, y: e.clientY, date: screenXToDate(e.clientX), projectId });
        setPanState(null);
    }, [screenXToDate, screenYToProjectId]);

    useEffect(() => {
        if (!chartMenu) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setChartMenu(null); };
        const onDown = (e: MouseEvent) => {
            if (!(e.target as HTMLElement).closest('[data-menu="chart-create"]')) setChartMenu(null);
        };
        const onScroll = () => setChartMenu(null);
        document.addEventListener('keydown', onKey);
        document.addEventListener('click', onDown);
        window.addEventListener('scroll', onScroll, true);
        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('click', onDown);
            window.removeEventListener('scroll', onScroll, true);
        };
    }, [chartMenu]);

    // ── Close Nova Ação dropdown on outside click ──
    useEffect(() => {
        if (!newActionOpen) return;
        const onClose = (e: MouseEvent) => {
            if (!newActionRef.current?.contains(e.target as Node)) setNewActionOpen(false);
        };
        document.addEventListener('click', onClose);
        return () => document.removeEventListener('click', onClose);
    }, [newActionOpen]);

    // ── Drag handling ───────────────────────────────
    const handleBarMouseDown = useCallback((e: React.MouseEvent, task: InternalTask) => {
        e.preventDefault();
        e.stopPropagation();
        setDragState({
            task,
            startMouseX: e.clientX,
            originalStart: new Date(task.start),
            originalEnd: new Date(task.end),
            offsetDays: 0,
        });
    }, []);

    useEffect(() => {
        if (!dragState) return;

        const onMove = (e: MouseEvent) => {
            const dx = e.clientX - dragState.startMouseX;
            const d = Math.round(dx / timeline.dayWidth);
            if (d !== dragState.offsetDays) setDragState(prev => prev ? { ...prev, offsetDays: d } : null);
        };

        const onUp = () => {
            if (dragState.offsetDays !== 0 && onTaskChange) {
                onTaskChange({
                    id: dragState.task.id,
                    name: dragState.task.name,
                    start: addDays(dragState.originalStart, dragState.offsetDays),
                    end: addDays(dragState.originalEnd, dragState.offsetDays),
                    type: dragState.task.originalType === 'step' ? 'task' : 'milestone',
                    progress: dragState.task.progress,
                });
            }
            setDragState(null);
        };

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
        return () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
    }, [dragState, timeline.dayWidth, onTaskChange]);

    // ── Resize-edge handling ────────────────────────
    const handleResizeMouseDown = useCallback((e: React.MouseEvent, task: InternalTask, edge: 'left' | 'right') => {
        e.preventDefault();
        e.stopPropagation();
        setResizeState({
            task, edge,
            startMouseX: e.clientX,
            originalStart: new Date(task.start),
            originalEnd: new Date(task.end),
            offsetDays: 0,
        });
    }, []);

    useEffect(() => {
        if (!resizeState) return;
        const onMove = (e: MouseEvent) => {
            const dx = e.clientX - resizeState.startMouseX;
            const d = Math.round(dx / timeline.dayWidth);
            if (d !== resizeState.offsetDays) setResizeState(prev => prev ? { ...prev, offsetDays: d } : null);
        };
        const onUp = () => {
            if (resizeState.offsetDays !== 0 && onTaskChange) {
                const newStart = resizeState.edge === 'left'
                    ? addDays(resizeState.originalStart, resizeState.offsetDays)
                    : resizeState.originalStart;
                const newEnd = resizeState.edge === 'right'
                    ? addDays(resizeState.originalEnd, resizeState.offsetDays)
                    : resizeState.originalEnd;
                if (newEnd > newStart) {
                    onTaskChange({
                        id: resizeState.task.id,
                        name: resizeState.task.name,
                        start: newStart, end: newEnd,
                        type: 'task',
                        progress: resizeState.task.progress,
                    });
                }
            }
            setResizeState(null);
        };
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
        return () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
    }, [resizeState, timeline.dayWidth, onTaskChange]);

    // ── Connection dot drag ──────────────────────────
    const handleConnectDotMouseDown = useCallback((
        e: React.MouseEvent,
        task: InternalTask,
        edge: 'left' | 'right',
    ) => {
        e.preventDefault();
        e.stopPropagation();
        setConnectState({
            fromTaskId: task.id,
            fromEdge: edge,
            fromScreenX: e.clientX,
            fromScreenY: e.clientY,
            currentScreenX: e.clientX,
            currentScreenY: e.clientY,
            hoverTargetId: null,
        });
    }, []);

    useEffect(() => {
        if (!connectState) return;

        const onMove = (e: MouseEvent) => {
            // Detect which task (if any) is under the cursor using data-task-id
            const els = document.elementsFromPoint(e.clientX, e.clientY);
            let hoverTarget: string | null = null;
            for (const el of els) {
                const tid = (el as HTMLElement).dataset?.taskId;
                if (tid && tid !== connectState.fromTaskId) { hoverTarget = tid; break; }
            }
            setConnectState(prev => prev
                ? { ...prev, currentScreenX: e.clientX, currentScreenY: e.clientY, hoverTargetId: hoverTarget }
                : null);
        };

        const onUp = (e: MouseEvent) => {
            const els = document.elementsFromPoint(e.clientX, e.clientY);
            let targetId: string | null = null;
            for (const el of els) {
                const tid = (el as HTMLElement).dataset?.taskId;
                if (tid && tid !== connectState.fromTaskId) { targetId = tid; break; }
            }
            if (targetId && onCreateDependency) {
                // Open the dependency type modal
                setPendingConnection({ fromTaskId: connectState.fromTaskId, fromEdge: connectState.fromEdge, toTaskId: targetId });
                setDepModalType('FS');
                setDepModalLag(0);
            }
            setConnectState(null);
        };

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connectState?.fromTaskId, connectState?.fromEdge, onCreateDependency]);

    // ── Create dependency from modal ──────────────────
    const handleCreateDependency = useCallback(async () => {
        if (!pendingConnection || !onCreateDependency) return;
        const taskMap = new Map(tasks.map(t => [t.id, t]));
        const fromTask = taskMap.get(pendingConnection.fromTaskId);
        const toTask = taskMap.get(pendingConnection.toTaskId);
        if (!fromTask || !toTask) return;

        const typeFromOrig = (t: InternalTask): PredecessorType =>
            (t.originalType === 'step' ? 'STEP' : 'MILESTONE') as PredecessorType;

        // edge 'right' = predecessor is fromTask, successor is toTask (FS typical)
        // edge 'left'  = predecessor is toTask, successor is fromTask
        const predTask = pendingConnection.fromEdge === 'right' ? fromTask : toTask;
        const succTask = pendingConnection.fromEdge === 'right' ? toTask : fromTask;

        setDepCreating(true);
        try {
            await onCreateDependency({
                predecessorId: predTask.id,
                predecessorType: typeFromOrig(predTask),
                successorId: succTask.id,
                successorType: typeFromOrig(succTask),
                type: depModalType,
                lag: depModalLag,
            });
            setPendingConnection(null);
        } finally {
            setDepCreating(false);
        }
    }, [pendingConnection, tasks, onCreateDependency, depModalType, depModalLag]);

    // ── Group toggle helpers ────────────────────────

    const toggleGroup = useCallback((key: string) => {
        setCollapsedGroups(prev => {
            const next = new Set(prev);
            if (next.has(key)) next.delete(key); else next.add(key);
            return next;
        });
    }, []);

    const toggleProject = useCallback((projectId: string) => {
        setCollapsedProjects(prev => {
            const next = new Set(prev);
            if (next.has(projectId)) next.delete(projectId); else next.add(projectId);
            return next;
        });
    }, []);

    const toggleVisibility = useCallback((type: OriginalType) => {
        setVisibleTypes(prev => {
            const next = new Set(prev);
            if (next.has(type)) next.delete(type); else next.add(type);
            return next;
        });
    }, []);

    // ── Helpers ──────────────────────────────────────
    const toGanttTask = (t: InternalTask): GanttTask => ({
        id: t.id, name: t.name, start: t.start, end: t.end,
        type: t.originalType === 'step' ? 'task' : 'milestone',
        progress: t.progress,
    });

    const handleBarClick = useCallback((e: React.MouseEvent, task: InternalTask) => {
        setPopupState({ isOpen: true, position: { x: e.clientX, y: e.clientY }, task });
    }, []);

    const handleBarDblClick = useCallback((task: InternalTask) => {
        onTaskClick?.(toGanttTask(task));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onTaskClick]);

    const closePopup = () => { setPopupState({ isOpen: false, position: { x: 0, y: 0 }, task: null }); };

    // Close popup on Escape, click outside, or any scroll
    useEffect(() => {
        if (!popupState.isOpen) return;
        const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') closePopup(); };
        const onMouseDown = (e: MouseEvent) => {
            const el = e.target as HTMLElement;
            // Don't close if clicking inside the popup div (it has onMouseDown stopPropagation)
            if (!el.closest('[data-popup="gantt-action"]')) closePopup();
        };
        // capture: true catches scroll on any container (Gantt, page, sidebar…)
        const onScroll = () => closePopup();
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('mousedown', onMouseDown);
        window.addEventListener('scroll', onScroll, true);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('scroll', onScroll, true);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [popupState.isOpen]);

    const effStart = (task: InternalTask) => {
        if (dragState?.task.id === task.id) return addDays(dragState.originalStart, dragState.offsetDays);
        if (resizeState?.task.id === task.id && resizeState.edge === 'left') return addDays(resizeState.originalStart, resizeState.offsetDays);
        return task.start;
    };
    const effEnd = (task: InternalTask) => {
        if (dragState?.task.id === task.id) return addDays(dragState.originalEnd, dragState.offsetDays);
        if (resizeState?.task.id === task.id && resizeState.edge === 'right') return addDays(resizeState.originalEnd, resizeState.offsetDays);
        return task.end;
    };

    // ── Loading / Empty ─────────────────────────────
    if (loading) {
        return (
            <div className="h-64 flex items-center justify-center rounded-xl" style={{ background: C.surface, border: `1px solid ${C.border}`, boxShadow: '0 2px 12px rgb(0 0 0 / 0.06)' }}>
                <Loader2 className="animate-spin" size={28} style={{ color: C.group }} />
            </div>
        );
    }

    if (!steps?.length) {
        return (
            <div className="text-center p-10 rounded-xl flex flex-col items-center gap-4" style={{ background: C.surface, border: `1px solid ${C.border}`, color: C.textSecondary, boxShadow: '0 2px 12px rgb(0 0 0 / 0.06)' }}>
                <span>{t('charts.gantt.noStepsFound')}</span>
                {onAddNewStage && (
                    <button
                        onClick={() => onAddNewStage()}
                        className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
                        style={{ background: C.group }}
                    >
                        <Plus size={16} />
                        {t('charts.gantt.createFirstStep', 'Criar primeira etapa')}
                    </button>
                )}
            </div>
        );
    }

    if (!tasks.length) {
        return (
            <div className="text-center p-10 rounded-xl flex flex-col items-center gap-4" style={{ background: C.surface, border: `1px solid ${C.border}`, color: C.textSecondary, boxShadow: '0 2px 12px rgb(0 0 0 / 0.06)' }}>
                <span>{t('charts.gantt.noStepsWithDates')}</span>
                {onAddNewStage && (
                    <button
                        onClick={() => onAddNewStage()}
                        className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
                        style={{ background: C.group }}
                    >
                        <Plus size={16} />
                        {t('charts.gantt.createFirstStep', 'Criar primeira etapa')}
                    </button>
                )}
            </div>
        );
    }

    // ── Computed layout ─────────────────────────────
    const todayX = dateToX(new Date(), timeline);
    const showToday = todayX >= 0 && todayX <= timeline.totalWidth;
    const contentH = displayRows.length * ROW_H;
    const maxBodyH = 540; // max height for scroll area

    // ═══════════════════════════════════════════════════
    //  RENDER
    // ═══════════════════════════════════════════════════
    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* ───────── MAIN CONTAINER ───────── */}
            <div
                className="rounded-xl overflow-hidden"
                style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    boxShadow: '0 2px 16px 0 rgb(0 0 0 / 0.06), 0 0 0 1px rgb(0 0 0 / 0.02)',
                }}
            >
                {/* ── HEADER ────────────────────── */}
                <div
                    className="flex items-center justify-between px-6 py-5"
                    style={{ borderBottom: `1px solid ${C.border}`, background: `linear-gradient(180deg, ${C.headerBg} 0%, ${C.surface} 100%)` }}
                >
                    <div className="flex items-center gap-4">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: C.textTitle }}>
                                {t('planning.gantt', 'PLANEJAMENTO DA OBRA')}
                            </h3>
                            <div className="h-[2.5px] w-16 mt-1.5 rounded-full" style={{ background: `linear-gradient(90deg, ${C.group}, ${C.milestoneRing})` }} />
                        </div>
                        {projectName && (
                            <span
                                className="text-xs font-medium px-3 py-1 rounded-full"
                                style={{ color: C.textSecondary, background: C.surface, border: `1px solid ${C.border}` }}
                            >
                                {projectName}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Segmented Control */}
                        <div className="flex p-1 rounded-lg" style={{ background: 'rgba(122,122,122,0.07)', border: `1px solid ${C.borderLight}` }}>
                            {(['month', 'year'] as ViewMode[]).map(m => (
                                <button
                                    key={m}
                                    onClick={() => setViewMode(m)}
                                    className="px-5 py-1.5 text-xs font-semibold rounded-md transition-all duration-200"
                                    style={viewMode === m
                                        ? { background: C.surface, color: C.group, boxShadow: '0 1px 3px rgb(0 0 0 / 0.08)' }
                                        : { color: C.textSecondary }}
                                >
                                    {m === 'month' ? t('charts.gantt.month', 'Mês') : t('charts.gantt.year', 'Ano')}
                                </button>
                            ))}
                        </div>

                        {/* Type Filters */}
                        <div className="flex p-1 rounded-lg gap-0.5" style={{ background: 'rgba(122,122,122,0.07)', border: `1px solid ${C.borderLight}` }}>
                            {([
                                { type: 'step' as OriginalType, label: 'Etapas', icon: <div className="w-2.5 h-2.5 rounded-sm" style={{ background: STEP_PALETTE[0].bar, border: `1px solid ${STEP_PALETTE[0].barBorder}` }} /> },
                                { type: 'milestone' as OriginalType, label: 'Marcos', icon: <Flag size={11} style={{ color: C.milestone }} /> },
                                { type: 'event' as OriginalType, label: 'Eventos', icon: <Clock size={11} style={{ color: C.event }} /> },
                                { type: 'note' as OriginalType, label: 'Notas', icon: <MessageCircle size={11} style={{ color: C.note }} /> },
                            ]).map(f => {
                                const active = visibleTypes.has(f.type);
                                return (
                                    <button
                                        key={f.type}
                                        onClick={() => toggleVisibility(f.type)}
                                        className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-md transition-all duration-200"
                                        style={active
                                            ? { background: C.surface, color: C.group, boxShadow: '0 1px 3px rgb(0 0 0 / 0.08)' }
                                            : { color: C.textMuted, opacity: 0.5 }}
                                    >
                                        {f.icon}
                                        <span>{f.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {onAddNewStage && (
                            <div ref={newActionRef} style={{ position: 'relative' }}>
                                <button
                                    onClick={() => setNewActionOpen(p => !p)}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                                    style={{ background: `linear-gradient(135deg, ${C.group}, ${C.group}dd)` }}
                                >
                                    <Plus size={16} />
                                    <span>{t('charts.gantt.newAction', 'Nova Ação')}</span>
                                    <ChevronDown size={14} style={{ opacity: 0.7, transform: newActionOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.18s' }} />
                                </button>
                                {newActionOpen && (
                                    <div
                                        style={{
                                            position: 'absolute', top: 'calc(100% + 6px)', right: 0,
                                            zIndex: 99999,
                                            background: '#fff',
                                            borderRadius: 10,
                                            boxShadow: '0 12px 40px rgba(0,0,0,0.15), 0 3px 10px rgba(0,0,0,0.08)',
                                            border: `1.5px solid ${C.borderLight}`,
                                            width: 200,
                                            overflow: 'hidden',
                                            padding: '5px 5px',
                                        }}
                                        onClick={e => e.stopPropagation()}
                                    >
                                        {([
                                            {
                                                label: 'Etapa',
                                                icon: <div style={{ width: 14, height: 14, borderRadius: 3, background: STEP_PALETTE[0].bar, border: `1.5px solid ${STEP_PALETTE[0].barBorder}`, flexShrink: 0 }} />,
                                                action: () => { onAddNewStage?.(); setNewActionOpen(false); },
                                            },
                                            {
                                                label: 'Marco',
                                                icon: <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${C.milestoneRing}30`, border: `1.5px solid ${C.milestoneRing}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Flag size={11} style={{ color: C.milestone }} /></div>,
                                                action: () => { onAddMilestone?.(); setNewActionOpen(false); },
                                            },
                                            {
                                                label: 'Evento',
                                                icon: <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${C.event}18`, border: `1.5px solid ${C.event}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Clock size={11} style={{ color: C.event }} /></div>,
                                                action: () => { onAddEvent?.(); setNewActionOpen(false); },
                                            },
                                            {
                                                label: 'Nota',
                                                icon: <div style={{ width: 16, height: 20, background: C.note, borderRadius: 2, boxShadow: '1px 1px 3px rgba(0,0,0,0.14)', position: 'relative', overflow: 'visible', flexShrink: 0 }}><div style={{ position: 'absolute', top: -2, left: '50%', transform: 'translateX(-50%)', width: 10, height: 4, background: 'rgba(255,255,255,0.55)', borderRadius: 1 }} /></div>,
                                                action: () => { onAddNote?.(); setNewActionOpen(false); },
                                            },
                                        ] as const).map(opt => (
                                            <button
                                                key={opt.label}
                                                onClick={opt.action}
                                                style={{
                                                    display: 'flex', alignItems: 'center', gap: 10,
                                                    width: '100%', padding: '8px 10px',
                                                    borderRadius: 7, border: 'none',
                                                    background: 'transparent',
                                                    cursor: 'pointer',
                                                    fontSize: 13, fontWeight: 500, color: C.textPrimary,
                                                    textAlign: 'left',
                                                    transition: 'background 0.12s',
                                                }}
                                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.headerBg; }}
                                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                                            >
                                                {opt.icon}
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* ── GANTT BODY ────────────────── */}
                <div className="flex">
                    {/* ═══ LEFT PANEL ═══ */}
                    <div style={{ width: LEFT_W, flexShrink: 0, borderRight: `1px solid ${C.border}` }}>
                        {/* Table header */}
                        <div
                            className="flex items-center px-4"
                            style={{ height: HEADER_H, background: C.headerBg, borderBottom: `1px solid ${C.border}` }}
                        >
                            <div className="flex-1 text-[11px] font-bold uppercase tracking-wider" style={{ color: C.textSecondary }}>
                                {t('charts.gantt.stepName', 'NOME DA ETAPA')}
                            </div>
                            <div className="w-[80px] text-[11px] font-bold uppercase tracking-wider text-center" style={{ color: C.textSecondary }}>
                                {t('charts.gantt.start', 'INÍCIO')}
                            </div>
                            <div className="w-[80px] text-[11px] font-bold uppercase tracking-wider text-center" style={{ color: C.textSecondary }}>
                                {t('charts.gantt.end', 'FIM')}
                            </div>
                        </div>

                        {/* Rows */}
                        <div
                            ref={leftBodyRef}
                            onScroll={handleLeftScroll}
                            className="overflow-y-auto overflow-x-hidden"
                            style={{ maxHeight: maxBodyH, scrollbarWidth: 'none' }}
                        >
                            {(() => {
                                let taskIdx = 0; return displayRows.map((row) => {
                                    // ── Project header row (groupByProject mode) ──
                                    if (row.kind === 'projectHeader') {
                                        return (
                                            <div
                                                key={`ph-${row.projectId}`}
                                                className="flex items-center px-4 cursor-pointer select-none"
                                                style={{ height: ROW_H, borderBottom: `1.5px solid ${C.group}44`, background: `${C.group}0E` }}
                                                onClick={() => toggleProject(row.projectId)}
                                            >
                                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                                    {row.collapsed
                                                        ? <ChevronRight size={15} style={{ color: C.group, flexShrink: 0 }} />
                                                        : <ChevronDown size={15} style={{ color: C.group, flexShrink: 0 }} />}
                                                    <span className="text-[12px] font-bold uppercase tracking-widest truncate" style={{ color: C.group }}>
                                                        {row.projectTitle}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    }
                                    if (row.kind === 'group') {
                                        const groupKey = row.projectId ? `${row.projectId}-${row.groupType}` : row.groupType;
                                        return (
                                            <div
                                                key={`g-${groupKey}`}
                                                className="flex items-center px-4 cursor-pointer select-none"
                                                style={{ height: ROW_H, borderBottom: `1px solid ${C.border}`, background: C.headerBg }}
                                                onClick={() => toggleGroup(groupKey)}
                                            >
                                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                                    {row.collapsed
                                                        ? <ChevronRight size={14} style={{ color: C.textSecondary, flexShrink: 0 }} />
                                                        : <ChevronDown size={14} style={{ color: C.textSecondary, flexShrink: 0 }} />}
                                                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: C.textTitle }}>
                                                        {row.label}
                                                    </span>
                                                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(0,0,0,0.06)', color: C.textSecondary }}>
                                                        {row.count}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    }
                                    taskIdx++;
                                    const task = row.task;
                                    const isSel = selectedTaskId === task.id;
                                    const isHov = hoveredTaskId === task.id;
                                    const isPoint = task.originalType !== 'step';
                                    const isDelayed = delayedIds.has(task.id);
                                    const isCritical = criticalIds.has(task.id);
                                    const isLeftDimmed = selectedTaskId !== null && task.id !== selectedTaskId && !relatedIds.has(task.id);
                                    const isLeftRelated = selectedTaskId !== null && relatedIds.has(task.id);
                                    const rowBg = isDelayed ? '#FFF5F5' : isSel ? C.groupLight : isLeftRelated ? `${C.groupLight}99` : isHov ? C.pageBg : C.surface;

                                    return (
                                        <div
                                            key={task.id}
                                            className="flex items-center px-4 cursor-pointer transition-colors duration-150"
                                            style={{
                                                height: ROW_H,
                                                borderBottom: `1px solid ${C.borderLight}`,
                                                background: rowBg,
                                                borderLeft: isSel ? `3px solid ${C.group}` : isLeftRelated ? `3px solid ${C.group}66` : isCritical ? `3px solid ${C.today}` : undefined,
                                                opacity: isLeftDimmed ? 0.3 : 1,
                                                transition: 'opacity 0.18s, background 0.15s',
                                            }}
                                            onClick={() => setSelectedTaskId(p => p === task.id ? null : task.id)}
                                            onDoubleClick={() => handleBarDblClick(task)}
                                            onMouseEnter={() => setHoveredTaskId(task.id)}
                                            onMouseLeave={() => setHoveredTaskId(null)}
                                        >
                                            <div className="flex-1 flex items-center gap-2 min-w-0 pr-2">
                                                {task.originalType === 'step' && (
                                                    <div className="flex-shrink-0 rounded" style={{ width: 14, height: 14, background: STEP_PALETTE[task.colorIdx ?? 0].bar, border: `1.5px solid ${STEP_PALETTE[task.colorIdx ?? 0].barBorder}` }} />
                                                )}
                                                {task.originalType === 'milestone' && (
                                                    <div className="flex-shrink-0 flex items-center justify-center rounded-full" style={{ width: 22, height: 22, background: `${C.milestoneRing}30`, border: `1.5px solid ${C.milestoneRing}` }}>
                                                        <Flag size={11} style={{ color: C.milestone }} />
                                                    </div>
                                                )}
                                                {task.originalType === 'event' && (
                                                    <div className="flex-shrink-0 flex items-center justify-center rounded-full" style={{ width: 22, height: 22, background: `${C.event}18`, border: `1.5px solid ${C.event}55` }}>
                                                        <Clock size={11} style={{ color: C.event }} />
                                                    </div>
                                                )}
                                                {task.originalType === 'note' && (
                                                    <div className="flex-shrink-0" style={{ width: 16, height: 20, background: task.noteColor || C.note, borderRadius: 2, boxShadow: '1px 1px 3px rgba(0,0,0,0.14)', position: 'relative', overflow: 'visible' }}>
                                                        {/* tape */}
                                                        <div style={{ position: 'absolute', top: -2, left: '50%', transform: 'translateX(-50%)', width: 10, height: 4, background: 'rgba(255,255,255,0.55)', borderRadius: 1 }} />
                                                    </div>
                                                )}

                                                <div className="flex-1 flex flex-col min-w-0">
                                                    <span
                                                        className="text-[13px] truncate font-medium leading-tight"
                                                        style={{ color: isSel ? C.group : isDelayed ? C.today : C.textPrimary }}
                                                    >
                                                        {task.name}
                                                    </span>
                                                    {task.originalType === 'note' && task.noteProjectTitle && (
                                                        <span className="text-[10px] truncate" style={{ color: C.textSecondary, marginTop: 1 }}>
                                                            {task.noteProjectTitle}
                                                        </span>
                                                    )}
                                                </div>

                                                {task.originalType === 'note' && (task.filesCount || 0) > 0 && (
                                                    <span className="flex-shrink-0 flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full" style={{ color: C.textSecondary, background: C.headerBg, border: `1px solid ${C.borderLight}` }}>
                                                        <Paperclip size={9} />
                                                        {task.filesCount}
                                                    </span>
                                                )}

                                                {isDelayed && (
                                                    <AlertTriangle size={12} className="flex-shrink-0" style={{ color: C.today }} />
                                                )}
                                            </div>

                                            <div className="w-[80px] text-[11px] font-medium text-center tabular-nums" style={{ color: isDelayed ? C.today : C.textMuted }}>
                                                {fmtDateShort(effStart(task))}
                                            </div>
                                            <div className="w-[80px] text-[11px] font-medium text-center tabular-nums" style={{ color: isDelayed ? C.today : C.textMuted }}>
                                                {isPoint ? '—' : fmtDateShort(effEnd(task))}
                                            </div>
                                        </div>
                                    );
                                });
                            })()}
                        </div>
                    </div>

                    {/* ═══ RIGHT PANEL ═══ */}
                    <div className="flex-1 flex flex-col overflow-hidden">
                        {/* Time header */}
                        <div
                            ref={timeHeaderRef}
                            className="overflow-hidden flex-shrink-0"
                            style={{ borderBottom: `1px solid ${C.border}` }}
                        >
                            <div style={{ width: timeline.totalWidth }}>
                                {/* Month row */}
                                <div className="flex" style={{ height: HEADER_ROW_H, background: C.headerBg }}>
                                    {timeline.months.map((m, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-center text-[10px] font-bold uppercase tracking-wider select-none"
                                            style={{
                                                width: m.days * timeline.dayWidth,
                                                color: C.textTitle,
                                                borderRight: `1px solid ${C.border}`,
                                                letterSpacing: '0.1em',
                                            }}
                                        >
                                            {m.label}
                                        </div>
                                    ))}
                                </div>

                                {/* Day row */}
                                <div className="flex" style={{ height: HEADER_ROW_H, background: C.surface }}>
                                    {Array.from({ length: timeline.totalDays }, (_, i) => {
                                        const d = addDays(timeline.start, i);
                                        const dayNum = d.getDate();
                                        const isWE = isWeekend(d);
                                        const isToday = d.toDateString() === new Date().toDateString();

                                        return (
                                            <div
                                                key={i}
                                                className="flex items-center justify-center text-[9px] select-none"
                                                style={{
                                                    width: timeline.dayWidth,
                                                    color: isToday ? C.today : isWE ? C.textMuted : C.textSecondary,
                                                    fontWeight: isToday ? 800 : dayNum === 1 ? 700 : 500,
                                                    background: isToday ? C.todayBg : isWE ? C.weekendBg : undefined,
                                                    borderRight: dayNum === 1 ? `1px solid ${C.border}` : undefined,
                                                    borderRadius: isToday ? 4 : undefined,
                                                }}
                                            >
                                                {viewMode === 'month' ? dayNum : ''}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Chart area */}
                        <div
                            ref={rightBodyRef}
                            onScroll={handleRightScroll}
                            onMouseDown={handleChartMouseDown}
                            onDoubleClick={openChartMenu}
                            onContextMenu={openChartMenu}
                            onWheel={handleChartWheel}
                            className="flex-1 overflow-auto"
                            style={{
                                maxHeight: maxBodyH,
                                scrollbarWidth: 'thin',
                                scrollbarColor: `${C.border} transparent`,
                                cursor: panState ? 'grabbing' : 'grab',
                            }}
                        >
                            <div style={{ width: timeline.totalWidth, height: contentH, position: 'relative' }}>
                                {/* ── Background grid (SVG) ── */}
                                <svg
                                    width={timeline.totalWidth}
                                    height={contentH}
                                    style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
                                >
                                    {/* Group header row backgrounds */}
                                    {displayRows.map((row, idx) => {
                                        if (row.kind === 'projectHeader')
                                            return <rect key={`rpb${idx}`} x={0} y={idx * ROW_H} width={timeline.totalWidth} height={ROW_H} fill={`${C.group}0E`} />;
                                        if (row.kind === 'group')
                                            return <rect key={`rb${idx}`} x={0} y={idx * ROW_H} width={timeline.totalWidth} height={ROW_H} fill={C.headerBg} />;
                                        return null;
                                    })}

                                    {/* Weekend columns — semi-transparent tint */}
                                    {Array.from({ length: timeline.totalDays }, (_, i) => {
                                        const d = addDays(timeline.start, i);
                                        return isWeekend(d) ? (
                                            <rect key={`we${i}`} x={i * timeline.dayWidth} y={0} width={timeline.dayWidth} height={contentH} fill="rgba(0,0,0,0.025)" />
                                        ) : null;
                                    })}

                                    {/* Vertical grid lines */}
                                    {viewMode === 'month'
                                        ? Array.from({ length: timeline.totalDays }, (_, i) => {
                                            const d = addDays(timeline.start, i);
                                            const isMS = d.getDate() === 1;
                                            return (
                                                <line key={`vl${i}`} x1={i * timeline.dayWidth} y1={0} x2={i * timeline.dayWidth} y2={contentH}
                                                    stroke={isMS ? C.border : C.borderLight} strokeWidth={isMS ? 1 : 0.5} />
                                            );
                                        })
                                        : timeline.months.map((m, i) => (
                                            <line key={`ml${i}`} x1={m.startDay * timeline.dayWidth} y1={0} x2={m.startDay * timeline.dayWidth} y2={contentH}
                                                stroke={C.border} strokeWidth={1} />
                                        ))
                                    }

                                    {/* Horizontal row lines */}
                                    {displayRows.map((_, idx) => (
                                        <line key={`hl${idx}`} x1={0} y1={(idx + 1) * ROW_H} x2={timeline.totalWidth} y2={(idx + 1) * ROW_H}
                                            stroke={C.borderLight} strokeWidth={0.5} />
                                    ))}

                                    {/* Today marker */}
                                    {showToday && (
                                        <>
                                            <line x1={todayX} y1={0} x2={todayX} y2={contentH} stroke={C.today} strokeWidth={2} strokeDasharray="6 3" opacity={0.6} />
                                            <rect x={todayX - 22} y={0} width={44} height={18} rx={9} fill={C.today} />
                                            <text x={todayX} y={13} textAnchor="middle" fill="#fff" fontSize={9} fontWeight={700} fontFamily="Inter, sans-serif">HOJE</text>
                                        </>
                                    )}
                                </svg>

                                {/* ── Task bars ── */}
                                {displayRows.map((row, idx) => {
                                    if (row.kind === 'group' || row.kind === 'projectHeader') {
                                        return null; // header bg already rendered in SVG
                                    }
                                    const task = row.task;
                                    const s = effStart(task);
                                    const e = effEnd(task);
                                    const x = dateToX(s, timeline);
                                    const y = idx * ROW_H;
                                    const isHov = hoveredTaskId === task.id;
                                    const isDrag = dragState?.task.id === task.id;
                                    const isResize = resizeState?.task.id === task.id;
                                    const isCritical = criticalIds.has(task.id);
                                    const isDelayed = delayedIds.has(task.id);
                                    const isConnectTarget = connectState?.hoverTargetId === task.id;
                                    const showDots = (isHov || isConnectTarget) && !!onCreateDependency;
                                    const isBarDimmed = selectedTaskId !== null && task.id !== selectedTaskId && !relatedIds.has(task.id);
                                    const isBarHighlighted = selectedTaskId !== null && (task.id === selectedTaskId || relatedIds.has(task.id));

                                    const commonEvents = {
                                        onMouseDown: (ev: React.MouseEvent) => handleBarMouseDown(ev, task),
                                        onClick: (ev: React.MouseEvent) => handleBarClick(ev, task),
                                        onDoubleClick: () => handleBarDblClick(task),
                                        onMouseEnter: () => setHoveredTaskId(task.id),
                                        onMouseLeave: () => { setHoveredTaskId(null); setTooltip(null); },
                                        onMouseMove: (ev: React.MouseEvent) => { if (!dragState && !resizeState) setTooltip({ task, x: ev.clientX, y: ev.clientY }); },
                                    };

                                    // ── STEP BAR ──
                                    if (task.originalType === 'step') {
                                        const pal = STEP_PALETTE[task.colorIdx ?? 0];
                                        const w = Math.max(dateToX(e, timeline) - x, viewMode === 'month' ? timeline.dayWidth : 6);
                                        const progW = w * (task.progress / 100);
                                        const barY = y + (ROW_H - BAR_H) / 2;

                                        // ── Prevision / planned baseline bar ──
                                        const showBaseline = !!(task.previsionStart && task.previsionEnd);
                                        const baseX = showBaseline ? dateToX(task.previsionStart!, timeline) : 0;
                                        const baseW = showBaseline
                                            ? Math.max(dateToX(task.previsionEnd!, timeline) - baseX, viewMode === 'month' ? timeline.dayWidth : 6)
                                            : 0;
                                        // Baseline bar sits just below the main bar (4 px stripe)
                                        const baseY = barY + BAR_H + 3;

                                        return (
                                            <React.Fragment key={task.id}>
                                                {showBaseline && (
                                                    <div
                                                        title={`Previsto: ${fmtDateShort(task.previsionStart!)} → ${fmtDateShort(task.previsionEnd!)}`}
                                                        style={{
                                                            position: 'absolute',
                                                            left: baseX,
                                                            top: baseY,
                                                            width: baseW,
                                                            height: 5,
                                                            borderRadius: 3,
                                                            background: `${pal.progress}33`,
                                                            border: `1.5px solid ${pal.progress}66`,
                                                            boxShadow: `inset 0 0 0 1px ${pal.progress}22`,
                                                            pointerEvents: 'none',
                                                            zIndex: 5,
                                                        }}
                                                    />
                                                )}
                                                {
                                                    <div
                                                        key={task.id}
                                                        data-task-id={task.id}
                                                        {...commonEvents}
                                                        style={{
                                                            position: 'absolute', left: x, top: barY, width: w, height: BAR_H,
                                                            borderRadius: BAR_H / 2,
                                                            background: isDelayed ? 'linear-gradient(135deg, #fdd, #fee)' : pal.bar,
                                                            border: isCritical
                                                                ? `2px solid ${C.today}`
                                                                : isDelayed ? `1.5px solid ${C.today}88` : `1.5px solid ${pal.barBorder}`,
                                                            cursor: isDrag || isResize ? 'grabbing' : 'grab',
                                                            zIndex: isHov || isConnectTarget ? 20 : 10,
                                                            boxShadow: isConnectTarget
                                                                ? `0 0 0 2px ${C.group}, 0 4px 16px ${C.group}33`
                                                                : isCritical
                                                                    ? `0 0 0 1px ${C.today}44, 0 3px 12px ${C.today}22`
                                                                    : isBarHighlighted && !isHov ? `0 0 0 2px ${C.group}99, 0 3px 14px ${C.group}33`
                                                                        : isHov ? `0 3px 12px ${pal.progress}22` : 'none',
                                                            transform: isHov ? 'scaleY(1.06)' : 'scaleY(1)',
                                                            opacity: isBarDimmed ? 0.15 : 1,
                                                            transition: isDrag || isResize ? 'none' : 'box-shadow 0.2s, transform 0.15s, opacity 0.18s',
                                                            overflow: 'visible',
                                                        }}
                                                    >
                                                        {/* Progress fill - clipped via inner div */}
                                                        <div style={{
                                                            position: 'absolute', left: 0, top: 0,
                                                            width: w, height: '100%',
                                                            borderRadius: BAR_H / 2,
                                                            overflow: 'hidden',
                                                            pointerEvents: 'none',
                                                        }}>
                                                            <div style={{
                                                                position: 'absolute', left: 0, top: 0,
                                                                width: progW, height: '100%',
                                                                background: isDelayed
                                                                    ? `linear-gradient(90deg, ${C.today}cc, ${C.today}88)`
                                                                    : `linear-gradient(90deg, ${pal.progress}, ${pal.progress}cc)`,
                                                                borderRadius: `${BAR_H / 2}px 0 0 ${BAR_H / 2}px`,
                                                                transition: isDrag || isResize ? 'none' : 'width 0.3s',
                                                            }} />
                                                            {w > 50 && (
                                                                <span style={{
                                                                    position: 'absolute', inset: 0,
                                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                                    fontSize: 10, fontWeight: 700, letterSpacing: '0.05em',
                                                                    color: task.progress > 50 ? '#fff' : isDelayed ? C.today : pal.progress,
                                                                    zIndex: 1, pointerEvents: 'none',
                                                                }}>
                                                                    {Math.round(task.progress)}%
                                                                </span>
                                                            )}
                                                        </div>
                                                        {/* Resize handles */}
                                                        <div onMouseDown={ev => handleResizeMouseDown(ev, task, 'left')}
                                                            style={{ position: 'absolute', left: 0, top: 0, width: 8, height: '100%', cursor: 'col-resize', zIndex: 2, borderRadius: `${BAR_H / 2}px 0 0 ${BAR_H / 2}px` }} />
                                                        <div onMouseDown={ev => handleResizeMouseDown(ev, task, 'right')}
                                                            style={{ position: 'absolute', right: 0, top: 0, width: 8, height: '100%', cursor: 'col-resize', zIndex: 2, borderRadius: `0 ${BAR_H / 2}px ${BAR_H / 2}px 0` }} />
                                                        {/* ── Connection dots ── */}
                                                        {showDots && (
                                                            <>
                                                                <div
                                                                    data-task-id={task.id}
                                                                    onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'left')}
                                                                    style={{
                                                                        position: 'absolute',
                                                                        left: -7, top: '50%', transform: 'translateY(-50%)',
                                                                        width: 14, height: 14, borderRadius: '50%',
                                                                        background: C.group,
                                                                        border: '2.5px solid #fff',
                                                                        boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
                                                                        cursor: 'crosshair',
                                                                        zIndex: 30,
                                                                        transition: 'transform 0.1s',
                                                                    }}
                                                                />
                                                                <div
                                                                    data-task-id={task.id}
                                                                    onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'right')}
                                                                    style={{
                                                                        position: 'absolute',
                                                                        right: -7, top: '50%', transform: 'translateY(-50%)',
                                                                        width: 14, height: 14, borderRadius: '50%',
                                                                        background: C.group,
                                                                        border: '2.5px solid #fff',
                                                                        boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
                                                                        cursor: 'crosshair',
                                                                        zIndex: 30,
                                                                        transition: 'transform 0.1s',
                                                                    }}
                                                                />
                                                            </>
                                                        )}
                                                    </div>
                                                }
                                            </React.Fragment>
                                        );
                                    }

                                    // ── MILESTONE (pill badge) ──
                                    if (task.originalType === 'milestone') {
                                        const px = dateToX(s, timeline);
                                        const pillY = y + (ROW_H - PILL_H) / 2;
                                        return (
                                            <div
                                                key={task.id}
                                                data-task-id={task.id}
                                                {...commonEvents}
                                                style={{
                                                    position: 'absolute',
                                                    left: px - 6, top: pillY,
                                                    height: PILL_H,
                                                    minWidth: PILL_MIN_W,
                                                    borderRadius: PILL_H / 2,
                                                    background: isCritical ? `linear-gradient(135deg, #fee, #fff5f5)` : `linear-gradient(135deg, #e8f5ee, #f0f8f4)`,
                                                    border: isConnectTarget ? `2px solid ${C.group}` : isCritical ? `2px solid ${C.today}` : `1.5px solid ${C.milestoneRing}`,
                                                    display: 'flex', alignItems: 'center', gap: 6,
                                                    paddingLeft: 4, paddingRight: 12,
                                                    cursor: isDrag ? 'grabbing' : 'grab',
                                                    zIndex: isHov || isConnectTarget ? 20 : 10,
                                                    boxShadow: isConnectTarget
                                                        ? `0 0 0 2px ${C.group}, 0 4px 16px ${C.group}33`
                                                        : isCritical
                                                            ? `0 0 0 1px ${C.today}44, 0 3px 12px ${C.today}22`
                                                            : isBarHighlighted && !isHov ? `0 0 0 2px ${C.group}99, 0 3px 14px ${C.group}33`
                                                                : isHov ? `0 3px 12px ${C.milestone}22` : '0 1px 3px rgba(0,0,0,0.06)',
                                                    opacity: isBarDimmed ? 0.15 : 1,
                                                    transition: 'box-shadow 0.2s, transform 0.15s, opacity 0.18s',
                                                    transform: isHov ? 'translateY(-1px)' : 'none',
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'visible',
                                                }}
                                            >
                                                <div style={{
                                                    width: 20, height: 20, borderRadius: '50%',
                                                    background: isCritical ? C.today : C.milestone,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    flexShrink: 0,
                                                }}>
                                                    <Flag size={11} color="#fff" strokeWidth={2.5} />
                                                </div>
                                                <span style={{ fontSize: 11, fontWeight: 600, color: isCritical ? C.today : C.milestone, overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 130 }}>
                                                    {task.name}
                                                </span>
                                                {task.progress >= 100 && (
                                                    <span style={{ fontSize: 9, fontWeight: 700, color: '#fff', background: C.milestoneRing, borderRadius: 6, padding: '1px 5px' }}>✓</span>
                                                )}
                                                {showDots && (
                                                    <>
                                                        <div
                                                            data-task-id={task.id}
                                                            onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'left')}
                                                            style={{
                                                                position: 'absolute',
                                                                left: -7, top: '50%', transform: 'translateY(-50%)',
                                                                width: 14, height: 14, borderRadius: '50%',
                                                                background: C.group, border: '2.5px solid #fff',
                                                                boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
                                                                cursor: 'crosshair', zIndex: 30,
                                                            }}
                                                        />
                                                        <div
                                                            data-task-id={task.id}
                                                            onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'right')}
                                                            style={{
                                                                position: 'absolute',
                                                                right: -7, top: '50%', transform: 'translateY(-50%)',
                                                                width: 14, height: 14, borderRadius: '50%',
                                                                background: C.group, border: '2.5px solid #fff',
                                                                boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
                                                                cursor: 'crosshair', zIndex: 30,
                                                            }}
                                                        />
                                                    </>
                                                )}
                                            </div>
                                        );
                                    }

                                    // ── EVENT (pill badge) ──
                                    if (task.originalType === 'event') {
                                        const px = dateToX(s, timeline);
                                        const pillY = y + (ROW_H - PILL_H) / 2;
                                        return (
                                            <div
                                                key={task.id}
                                                {...commonEvents}
                                                style={{
                                                    position: 'absolute',
                                                    left: px - 6, top: pillY,
                                                    height: PILL_H,
                                                    minWidth: PILL_MIN_W,
                                                    borderRadius: PILL_H / 2,
                                                    background: `linear-gradient(135deg, #fef3e2, #fef8f0)`,
                                                    border: `1.5px solid ${C.event}66`,
                                                    display: 'flex', alignItems: 'center', gap: 6,
                                                    paddingLeft: 4, paddingRight: 12,
                                                    cursor: isDrag ? 'grabbing' : 'grab',
                                                    zIndex: isHov ? 20 : 10,
                                                    boxShadow: isBarHighlighted && !isHov ? `0 0 0 2px ${C.group}99, 0 3px 14px ${C.group}33`
                                                        : isHov ? `0 3px 12px ${C.event}22` : '0 1px 3px rgba(0,0,0,0.06)',
                                                    opacity: isBarDimmed ? 0.15 : 1,
                                                    transition: 'box-shadow 0.2s, transform 0.15s, opacity 0.18s',
                                                    transform: isHov ? 'translateY(-1px)' : 'none',
                                                    whiteSpace: 'nowrap',
                                                }}
                                            >
                                                <div style={{
                                                    width: 20, height: 20, borderRadius: '50%',
                                                    background: C.event,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    flexShrink: 0,
                                                }}>
                                                    <Clock size={11} color="#fff" strokeWidth={2.5} />
                                                </div>
                                                <span style={{ fontSize: 11, fontWeight: 600, color: C.event, overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 130 }}>
                                                    {task.name}
                                                </span>
                                            </div>
                                        );
                                    }

                                    // ── NOTE (post-it) ──
                                    if (task.originalType === 'note') {
                                        const px = dateToX(s, timeline);
                                        const bg = task.noteColor || C.note;
                                        const textColor = '#2a2a2a';
                                        const hasFiles = (task.filesCount || 0) > 0;
                                        // Slightly taller to fit project badge
                                        const noteH = POSTIT_H + 10; // 54px
                                        const postItY = y + (ROW_H - noteH) / 2;
                                        return (
                                            <div
                                                key={task.id}
                                                {...commonEvents}
                                                style={{
                                                    position: 'absolute',
                                                    left: px - 4, top: postItY,
                                                    width: POSTIT_W, height: noteH,
                                                    borderRadius: 3,
                                                    background: bg,
                                                    boxShadow: isBarHighlighted && !isHov
                                                        ? `0 0 0 2px ${C.group}99, 2px 4px 12px rgba(0,0,0,0.18)`
                                                        : isHov
                                                            ? `3px 4px 14px rgba(0,0,0,0.2), inset 0 -1px 0 rgba(0,0,0,0.06)`
                                                            : `1px 2px 5px rgba(0,0,0,0.13), inset 0 -1px 0 rgba(0,0,0,0.04)`,
                                                    cursor: isDrag ? 'grabbing' : 'grab',
                                                    zIndex: isHov ? 20 : 10,
                                                    opacity: isBarDimmed ? 0.15 : 1,
                                                    transition: 'box-shadow 0.2s, transform 0.15s, opacity 0.18s',
                                                    transform: isHov ? 'translateY(-2px) rotate(-0.8deg)' : 'none',
                                                    display: 'flex', flexDirection: 'column',
                                                    padding: '6px 8px 5px',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                {/* Tape effect */}
                                                <div style={{
                                                    position: 'absolute', top: -3, left: '50%', transform: 'translateX(-50%)',
                                                    width: 28, height: 8,
                                                    background: 'rgba(255,255,255,0.55)',
                                                    borderRadius: 1,
                                                    boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
                                                }} />
                                                {/* Title */}
                                                <span style={{
                                                    fontSize: 10, fontWeight: 700, color: textColor,
                                                    lineHeight: '13px', overflow: 'hidden',
                                                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                                                    textOverflow: 'ellipsis', wordBreak: 'break-word',
                                                    flex: 1,
                                                }}>
                                                    {task.name}
                                                </span>
                                                {/* Project badge */}
                                                {task.noteProjectTitle && (
                                                    <span style={{
                                                        fontSize: 7.5, fontWeight: 600,
                                                        color: textColor, opacity: 0.65,
                                                        marginTop: 2,
                                                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                                                    }}>
                                                        {task.noteProjectTitle}
                                                    </span>
                                                )}
                                                {/* Footer: date + files */}
                                                <div style={{
                                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                                    marginTop: 3, gap: 4,
                                                }}>
                                                    <span style={{ fontSize: 8, color: textColor, opacity: 0.55, fontWeight: 500 }}>
                                                        {fmtDateShort(s)}
                                                    </span>
                                                    {hasFiles && (
                                                        <span style={{
                                                            display: 'flex', alignItems: 'center', gap: 2,
                                                            fontSize: 8, color: textColor, opacity: 0.6,
                                                            fontWeight: 600,
                                                            background: 'rgba(0,0,0,0.06)', borderRadius: 3,
                                                            padding: '1px 3px',
                                                        }}>
                                                            <Paperclip size={7} />
                                                            {task.filesCount}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    }

                                    return null;
                                })}

                                {/* ── Dependency arrows (SVG) ── */}
                                <svg
                                    width={timeline.totalWidth}
                                    height={contentH}
                                    style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
                                >
                                    {arrows.map((a, i) => {
                                        const on = hoveredTaskId === a.predId || hoveredTaskId === a.succId;
                                        const isArrowActive = !selectedTaskId || (a.predId === selectedTaskId || a.succId === selectedTaskId || relatedIds.has(a.predId) || relatedIds.has(a.succId));
                                        const isArrowHighlighted = selectedTaskId !== null && isArrowActive;
                                        const col = on ? C.arrowHover : isArrowHighlighted ? C.group : C.arrow;
                                        return (
                                            <g key={i} style={{ opacity: !isArrowActive ? 0.08 : isArrowHighlighted ? 1 : undefined, transition: 'opacity 0.18s' }}>
                                                <path d={a.path} fill="none" stroke={col}
                                                    strokeWidth={isArrowHighlighted ? 2.5 : on ? 2 : 1.5}
                                                    style={{ transition: 'stroke 0.2s, stroke-width 0.2s' }} />
                                                <polygon
                                                    points={`${a.headX},${a.headY} ${a.headX - 6},${a.headY - 4} ${a.headX - 6},${a.headY + 4}`}
                                                    fill={col} style={{ transition: 'fill 0.2s' }} />
                                            </g>
                                        );
                                    })}
                                </svg>

                                {/* ── Hover Tooltip ── */}
                                {tooltip && !dragState && (
                                    <div style={{ position: 'fixed', left: tooltip.x + 16, top: tooltip.y - 10, zIndex: 9999, pointerEvents: 'none' }}>
                                        <div
                                            className="rounded-xl px-4 py-3 min-w-[220px] max-w-[340px] backdrop-blur-sm"
                                            style={{ background: `${C.surface}f5`, border: `1px solid ${C.borderLight}`, boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)' }}
                                        >
                                            <div className="flex items-center gap-2 mb-1.5">
                                                {task_icon(tooltip.task.originalType, tooltip.task.colorIdx)}
                                                <span className="text-xs font-bold truncate" style={{ color: C.textTitle }}>
                                                    {tooltip.task.name}
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-1 text-[11px]" style={{ color: C.textSecondary }}>
                                                {tooltip.task.originalType === 'step' ? (
                                                    <>
                                                        {/* Planned / Prevision row */}
                                                        {tooltip.task.previsionStart && tooltip.task.previsionEnd && (
                                                            <div style={{ background: `${C.headerBg}`, borderRadius: 6, padding: '4px 6px', marginBottom: 2 }}>
                                                                <div className="flex items-center gap-1 mb-1">
                                                                    <div style={{ width: 20, height: 4, borderRadius: 2, background: `${C.textSecondary}44`, border: `1.5px solid ${C.textSecondary}66` }} />
                                                                    <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: C.textSecondary }}>Previsto</span>
                                                                </div>
                                                                <div className="flex justify-between gap-4">
                                                                    <span>Início:</span>
                                                                    <span className="font-semibold tabular-nums" style={{ color: C.textPrimary }}>{fmtDateShort(tooltip.task.previsionStart)}</span>
                                                                </div>
                                                                <div className="flex justify-between gap-4">
                                                                    <span>Fim:</span>
                                                                    <span className="font-semibold tabular-nums" style={{ color: C.textPrimary }}>{fmtDateShort(tooltip.task.previsionEnd)}</span>
                                                                </div>
                                                                <div className="flex justify-between gap-4">
                                                                    <span>Duração:</span>
                                                                    <span className="font-semibold tabular-nums" style={{ color: C.textPrimary }}>{diffDays(tooltip.task.previsionStart, tooltip.task.previsionEnd)}d</span>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {/* Actual / Real row */}
                                                        <div style={{ background: tooltip.task.hasActualDates ? `${C.groupLight}22` : 'transparent', borderRadius: 6, padding: '4px 6px' }}>
                                                            <div className="flex items-center gap-1 mb-1">
                                                                <div style={{ width: 20, height: 4, borderRadius: 2, background: STEP_PALETTE[tooltip.task.colorIdx ?? 0].progress }} />
                                                                <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: tooltip.task.hasActualDates ? C.group : C.textSecondary }}>
                                                                    {tooltip.task.hasActualDates ? 'Real' : 'Previsto (em uso)'}
                                                                </span>
                                                            </div>
                                                            <div className="flex justify-between gap-4">
                                                                <span>Início:</span>
                                                                <span className="font-semibold tabular-nums" style={{ color: C.textPrimary }}>{fmtDateShort(tooltip.task.start)}</span>
                                                            </div>
                                                            <div className="flex justify-between gap-4">
                                                                <span>Fim:</span>
                                                                <span className="font-semibold tabular-nums" style={{ color: C.textPrimary }}>{fmtDateShort(tooltip.task.end)}</span>
                                                            </div>
                                                            <div className="flex justify-between gap-4">
                                                                <span>Duração:</span>
                                                                <span className="font-semibold tabular-nums" style={{ color: C.textPrimary }}>{diffDays(tooltip.task.start, tooltip.task.end)}d</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between gap-4 pt-1 mt-1" style={{ borderTop: `1px solid ${C.borderLight}` }}>
                                                            <span>{t('charts.gantt.progress', 'Progresso')}:</span>
                                                            <span className="font-bold" style={{ color: C.group }}>{Math.round(tooltip.task.progress)}%</span>
                                                        </div>
                                                    </>
                                                ) : tooltip.task.originalType === 'note' ? (
                                                    <>
                                                        {/* Note color + project */}
                                                        {tooltip.task.noteProjectTitle && (
                                                            <div className="flex items-center gap-1.5 mb-1">
                                                                <div style={{ width: 8, height: 8, borderRadius: 2, background: tooltip.task.noteColor || C.note, flexShrink: 0 }} />
                                                                <span className="text-[11px] font-semibold truncate" style={{ color: C.textPrimary }}>
                                                                    {tooltip.task.noteProjectTitle}
                                                                </span>
                                                            </div>
                                                        )}
                                                        <div className="flex justify-between gap-4">
                                                            <span>Data:</span>
                                                            <span className="font-semibold tabular-nums" style={{ color: C.textPrimary }}>{fmtDateShort(tooltip.task.start)}</span>
                                                        </div>
                                                        {(tooltip.task.filesCount || 0) > 0 && (
                                                            <div className="flex justify-between gap-4">
                                                                <span>Anexos:</span>
                                                                <span className="font-semibold flex items-center gap-1" style={{ color: C.textPrimary }}>
                                                                    <Paperclip size={10} />
                                                                    {tooltip.task.filesCount}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </>
                                                ) : (
                                                    <div className="flex justify-between gap-4">
                                                        <span>{t('charts.gantt.start', 'Início')}:</span>
                                                        <span className="font-semibold tabular-nums" style={{ color: C.textPrimary }}>{fmtDateShort(tooltip.task.start)}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── LEGEND ────────────────────── */}
                <div
                    className="flex flex-wrap items-center gap-2.5 px-6 py-3.5"
                    style={{ borderTop: `1px solid ${C.border}`, background: C.headerBg }}
                >
                    <span className="text-[10px] font-bold uppercase tracking-widest mr-1" style={{ color: C.textSecondary }}>
                        {t('charts.gantt.legend', 'Legenda')}
                    </span>

                    <div className="flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full" style={{ color: C.textPrimary, background: C.surface, border: `1px solid ${C.borderLight}` }}>
                        <div className="flex gap-0.5">
                            {STEP_PALETTE.slice(0, 5).map((p, i) => (
                                <div key={i} className="w-2 h-3 rounded-sm" style={{ background: p.bar, border: `1px solid ${p.barBorder}` }} />
                            ))}
                        </div>
                        <span>{t('charts.gantt.taskLabel', 'Etapas')}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full" style={{ color: C.textPrimary, background: C.surface, border: `1px solid ${C.borderLight}` }}>
                        <div className="flex items-center justify-center rounded-full" style={{ width: 14, height: 14, background: C.milestone }}>
                            <Flag size={8} color="#fff" />
                        </div>
                        <span>{t('charts.gantt.milestoneLabel', 'Marco (Entrega)')}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full" style={{ color: C.textPrimary, background: C.surface, border: `1px solid ${C.borderLight}` }}>
                        <div className="flex items-center justify-center rounded-full" style={{ width: 14, height: 14, background: C.event }}>
                            <Clock size={8} color="#fff" />
                        </div>
                        <span>{t('charts.gantt.eventLabel', 'Evento Pontual')}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full" style={{ color: C.textPrimary, background: C.surface, border: `1px solid ${C.borderLight}` }}>
                        <div style={{ width: 12, height: 14, background: C.note, borderRadius: 2, boxShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} />
                        <span>{t('charts.gantt.noteLabel', 'Nota')}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full" style={{ color: C.textPrimary, background: C.surface, border: `1px solid ${C.borderLight}` }}>
                        <svg width="18" height="10" viewBox="0 0 18 10">
                            <path d="M0,5 L10,5" stroke={C.arrow} strokeWidth="1.5" />
                            <polygon points="10,5 14,2.5 14,7.5" fill={C.arrow} />
                        </svg>
                        <span>{t('charts.gantt.dependencyLabel', 'Dependência')}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full" style={{ color: C.textPrimary, background: C.surface, border: `1px solid ${C.borderLight}` }}>
                        <div className="w-0.5 h-3.5 rounded-full" style={{ background: C.today }} />
                        <span>{t('charts.gantt.todayLabel', 'Hoje')}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full" style={{ color: C.textPrimary, background: C.surface, border: `1px solid ${C.borderLight}` }}>
                        <div style={{ width: 20, height: 4, borderRadius: 2, background: `${C.textSecondary}44`, border: `1.5px solid ${C.textSecondary}66` }} />
                        <span>{t('charts.gantt.baselineLabel', 'Previsto')}</span>
                    </div>

                    {criticalIds.size > 0 && (
                        <div className="flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full" style={{ color: C.today, background: C.surface, border: `1px solid ${C.today}44` }}>
                            <div className="w-3 h-2.5 rounded-sm" style={{ border: `2px solid ${C.today}`, background: 'transparent' }} />
                            <span>Caminho Crítico</span>
                        </div>
                    )}

                    {delayedIds.size > 0 && (
                        <div className="flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full" style={{ color: C.today, background: '#FFF5F5', border: `1px solid ${C.today}44` }}>
                            <AlertTriangle size={11} />
                            <span>Atrasado</span>
                        </div>
                    )}
                </div>
            </div>

            {/* ── Task Action Popup (with relations) ── */}
            {popupState.task && popupState.isOpen && (() => {
                const t2 = popupState.task!;
                const taskDeps = (dependencies || []).filter(
                    d => d.predecessorId === t2.id || d.successorId === t2.id
                );
                const depTypeLabel: Record<string, string> = {
                    FS: 'Início após Fim',
                    SS: 'Inícios simultâneos',
                    FF: 'Fins simultâneos',
                    SF: 'Fim após Início',
                };

                // Smart position: avoid going off-screen
                const PW = taskDeps.length > 0 ? 300 : 220;
                const left = Math.min(popupState.position.x, window.innerWidth - PW - 16);
                const top = popupState.position.y + 8;

                return (
                    <div
                        data-popup="gantt-action"
                        style={{
                            position: 'fixed', left, top, zIndex: 9999,
                            background: '#fff',
                            borderRadius: 4,
                            boxShadow: '0 12px 40px rgba(0,0,0,0.14), 0 3px 10px rgba(0,0,0,0.07)',
                            border: `1.5px solid ${C.borderLight}`,
                            width: PW,
                            overflow: 'hidden',
                        }}
                        onMouseDown={e => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div style={{ padding: '12px 14px 10px', borderBottom: `1px solid ${C.borderLight}` }}>
                            <p style={{ fontSize: 13, fontWeight: 700, color: C.group, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                                title={t2.name}>
                                {t2.name}
                            </p>
                        </div>

                        {/* Actions */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '8px 6px' }}>
                            {/* Ver detalhes */}
                            <button
                                onClick={() => {
                                    onViewStage?.(toGanttTask(t2));
                                    closePopup();
                                }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: 10,
                                    padding: '8px 10px', borderRadius: 8, border: 'none',
                                    background: 'transparent',
                                    cursor: 'pointer', textAlign: 'left', width: '100%',
                                    fontSize: 13, fontWeight: 500, color: C.textPrimary,
                                    transition: 'background 0.12s',
                                }}
                                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = C.groupLight; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                            >
                                <Eye size={15} />
                                <span>{t('projects.stepAction.viewDetails', 'Ver detalhes')}</span>
                            </button>
                            {/* Editar */}
                            <button onClick={() => { onEditStage?.(toGanttTask(t2)); closePopup(); }} style={{
                                display: 'flex', alignItems: 'center', gap: 10,
                                padding: '8px 10px', borderRadius: 8, border: 'none',
                                background: 'transparent', cursor: 'pointer', textAlign: 'left', width: '100%',
                                fontSize: 13, fontWeight: 500, color: C.textPrimary, transition: 'background 0.12s',
                            }}
                                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = C.groupLight; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                            >
                                <Edit2 size={15} />
                                <span>{t('projects.stepAction.edit', 'Editar')}</span>
                            </button>
                            {/* Excluir */}
                            <button onClick={() => { onDeleteStage?.(t2.id); closePopup(); }} style={{
                                display: 'flex', alignItems: 'center', gap: 10,
                                padding: '8px 10px', borderRadius: 8, border: 'none',
                                background: 'transparent', cursor: 'pointer', textAlign: 'left', width: '100%',
                                fontSize: 13, fontWeight: 500, color: '#ef4444', transition: 'background 0.12s',
                            }}
                                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#fef2f2'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                            >
                                <Trash2 size={15} />
                                <span>{t('projects.stepAction.delete', 'Excluir')}</span>
                            </button>
                        </div>

                        {/* Relations section */}
                        {taskDeps.length > 0 && (
                            <div style={{ borderTop: `1px solid ${C.borderLight}`, padding: '10px 14px 12px' }}>
                                <div style={{ fontSize: 10, fontWeight: 700, color: C.textSecondary, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                                    Relações ({taskDeps.length})
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                                    {taskDeps.map(dep => {
                                        const isPred = dep.predecessorId === t2.id;
                                        const otherName = isPred ? dep.successorName : dep.predecessorName;
                                        const isDeleting = deletingDepId === dep.id;
                                        return (
                                            <div key={dep.id} style={{
                                                display: 'flex', alignItems: 'center', gap: 8,
                                                padding: '6px 8px', borderRadius: 8,
                                                background: '#f8fafb',
                                                border: `1px solid ${C.borderLight}`,
                                            }}>
                                                <div style={{ flex: 1, minWidth: 0 }}>
                                                    <div style={{ fontSize: 10, fontWeight: 700, color: C.group, marginBottom: 2 }}>
                                                        <span style={{ background: `${C.group}15`, borderRadius: 4, padding: '1px 5px' }}>{dep.type}</span>
                                                        {' '}
                                                        <span style={{ color: C.textSecondary, fontWeight: 500 }}>
                                                            {isPred ? '→ ' : '← '}
                                                        </span>
                                                        <span style={{ color: C.textMuted, fontWeight: 400, fontSize: 9 }}>
                                                            {depTypeLabel[dep.type] ?? dep.type}
                                                        </span>
                                                    </div>
                                                    <div style={{ fontSize: 11, color: C.textPrimary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                                                        title={otherName}>
                                                        {otherName || (isPred ? dep.successorId : dep.predecessorId)}
                                                    </div>
                                                    {dep.lag > 0 && (
                                                        <div style={{ fontSize: 9, color: C.textMuted, marginTop: 1 }}>Lag: {dep.lag}d</div>
                                                    )}
                                                </div>
                                                {onDeleteDependency && (
                                                    <button
                                                        disabled={!!isDeleting}
                                                        onClick={async () => {
                                                            setDeletingDepId(dep.id);
                                                            try {
                                                                await onDeleteDependency(dep.id);
                                                            } finally {
                                                                setDeletingDepId(null);
                                                            }
                                                        }}
                                                        style={{
                                                            flexShrink: 0, padding: '4px 6px',
                                                            borderRadius: 6, border: 'none',
                                                            background: isDeleting ? '#fee2e2' : 'transparent',
                                                            cursor: isDeleting ? 'wait' : 'pointer',
                                                            color: '#ef4444',
                                                            fontSize: 14,
                                                            opacity: isDeleting ? 0.5 : 1,
                                                            transition: 'background 0.12s',
                                                        }}
                                                        onMouseEnter={e => { if (!isDeleting) (e.currentTarget as HTMLButtonElement).style.background = '#fef2f2'; }}
                                                        onMouseLeave={e => { if (!isDeleting) (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                                                        title="Excluir relação"
                                                    >
                                                        {isDeleting ? '⟳' : '🗑'}
                                                    </button>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Close on backdrop click handler */}
                        {typeof window !== 'undefined' && (() => {
                            // Register close-on-outside-click once
                            return null;
                        })()}
                    </div>
                );
            })()}

            {/* ── Chart create context menu ── */}
            {chartMenu && (
                <div
                    data-menu="chart-create"
                    style={{
                        position: 'fixed',
                        left: Math.min(chartMenu.x, window.innerWidth - 220),
                        top: Math.min(chartMenu.y, window.innerHeight - 220),
                        zIndex: 99999,
                        background: '#fff',
                        borderRadius: 10,
                        boxShadow: '0 12px 40px rgba(0,0,0,0.15), 0 3px 10px rgba(0,0,0,0.08)',
                        border: `1.5px solid ${C.borderLight}`,
                        width: 200,
                        overflow: 'hidden',
                    }}
                    onClick={e => e.stopPropagation()}
                >
                    {/* Header */}
                    <div style={{ padding: '9px 13px 8px', borderBottom: `1px solid ${C.borderLight}`, background: C.headerBg }}>
                        <p style={{ margin: 0, fontSize: 10, fontWeight: 700, color: C.textSecondary, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            Adicionar em {fmtDateShort(chartMenu.date)}
                        </p>
                        {chartMenu.projectId && groupByProject && (
                            <p style={{ margin: '2px 0 0', fontSize: 9, color: C.textSecondary, opacity: 0.75, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {tasks.find(t => t.projectId === chartMenu.projectId)?.projectTitle || chartMenu.projectId}
                            </p>
                        )}
                    </div>
                    {/* Options */}
                    <div style={{ padding: '5px 5px' }}>
                        {([
                            {
                                label: 'Etapa',
                                icon: <div style={{ width: 14, height: 14, borderRadius: 3, background: STEP_PALETTE[0].bar, border: `1.5px solid ${STEP_PALETTE[0].barBorder}`, flexShrink: 0 }} />,
                                action: () => { onAddNewStage?.(chartMenu!.date, chartMenu!.projectId); setChartMenu(null); },
                            },
                            {
                                label: 'Marco',
                                icon: <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${C.milestoneRing}30`, border: `1.5px solid ${C.milestoneRing}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Flag size={11} style={{ color: C.milestone }} /></div>,
                                action: () => { onAddMilestone?.(chartMenu.date, chartMenu.projectId); setChartMenu(null); },
                            },
                            {
                                label: 'Evento',
                                icon: <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${C.event}18`, border: `1.5px solid ${C.event}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Clock size={11} style={{ color: C.event }} /></div>,
                                action: () => { onAddEvent?.(chartMenu.date, chartMenu.projectId); setChartMenu(null); },
                            },
                            {
                                label: 'Nota',
                                icon: <div style={{ width: 16, height: 20, background: C.note, borderRadius: 2, boxShadow: '1px 1px 3px rgba(0,0,0,0.14)', position: 'relative', overflow: 'visible', flexShrink: 0 }}><div style={{ position: 'absolute', top: -2, left: '50%', transform: 'translateX(-50%)', width: 10, height: 4, background: 'rgba(255,255,255,0.55)', borderRadius: 1 }} /></div>,
                                action: () => { onAddNote?.(chartMenu.date, chartMenu.projectId); setChartMenu(null); },
                            },
                        ] as const).map(opt => (
                            <button
                                key={opt.label}
                                onClick={opt.action}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: 10,
                                    width: '100%', padding: '8px 10px',
                                    borderRadius: 7, border: 'none',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                    fontSize: 13, fontWeight: 500, color: C.textPrimary,
                                    opacity: 1,
                                    textAlign: 'left',
                                    transition: 'background 0.12s',
                                }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.headerBg; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                            >
                                {opt.icon}
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* ── Connection drag: live line overlay ── */}
            {connectState && (
                <svg
                    style={{
                        position: 'fixed', inset: 0,
                        width: '100vw', height: '100vh',
                        pointerEvents: 'none',
                        zIndex: 99999,
                    }}
                >
                    <defs>
                        <marker id="connect-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L6,3 z" fill={C.group} />
                        </marker>
                    </defs>
                    <line
                        x1={connectState.fromScreenX}
                        y1={connectState.fromScreenY}
                        x2={connectState.currentScreenX}
                        y2={connectState.currentScreenY}
                        stroke={C.group}
                        strokeWidth={2.5}
                        strokeDasharray="8 5"
                        markerEnd="url(#connect-arrow)"
                        opacity={0.85}
                        style={{
                            animation: 'gantt-dash 0.5s linear infinite',
                        }}
                    />
                    {/* Animate dashoffset via a style tag */}
                    <style>{`@keyframes gantt-dash { to { stroke-dashoffset: -13; } }`}</style>
                </svg>
            )}




            {/* ── Dependency type selection modal ── */}
            {pendingConnection && (
                <div
                    style={{
                        position: 'fixed', inset: 0,
                        background: 'rgba(0,0,0,0.35)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 99998,
                    }}
                    onClick={() => setPendingConnection(null)}
                >
                    <div
                        style={{
                            background: '#fff',
                            borderRadius: 20,
                            padding: '32px 36px',
                            width: 420,
                            boxShadow: '0 24px 80px rgba(0,0,0,0.18), 0 6px 24px rgba(0,0,0,0.08)',
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div style={{ marginBottom: 20 }}>
                            <h3 style={{ fontSize: 18, fontWeight: 700, color: C.textTitle, marginBottom: 4 }}>
                                Tipo de Relação
                            </h3>
                            <p style={{ fontSize: 13, color: C.textSecondary }}>
                                Escolha como as duas tarefas se relacionam
                            </p>
                        </div>

                        {/* Type selector */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
                            {([
                                { type: 'FS' as DependencyType, label: 'Início após Fim', desc: 'B começa quando A termina', icon: 'A ──► B' },
                                { type: 'SS' as DependencyType, label: 'Inícios simultâneos', desc: 'A e B começam juntos', icon: 'A═╗ B' },
                                { type: 'FF' as DependencyType, label: 'Fins simultâneos', desc: 'A e B terminam juntos', icon: 'A ╚═B' },
                                { type: 'SF' as DependencyType, label: 'Fim após Início', desc: 'B termina quando A começa', icon: 'B ──► A end' },
                            ] as const).map(opt => (
                                <button
                                    key={opt.type}
                                    onClick={() => setDepModalType(opt.type)}
                                    style={{
                                        border: depModalType === opt.type ? `2px solid ${C.group}` : `1.5px solid ${C.borderLight}`,
                                        borderRadius: 12,
                                        padding: '12px 14px',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        background: depModalType === opt.type ? `${C.group}0d` : '#fafafa',
                                        transition: 'all 0.15s',
                                    }}
                                >
                                    <div style={{
                                        fontSize: 11, fontFamily: 'monospace', fontWeight: 700,
                                        color: C.group, marginBottom: 4,
                                        background: depModalType === opt.type ? `${C.group}20` : `${C.group}0d`,
                                        borderRadius: 6, padding: '2px 6px', display: 'inline-block',
                                    }}>
                                        {opt.type}
                                    </div>
                                    <div style={{ fontSize: 13, fontWeight: 600, color: C.textTitle, marginBottom: 2 }}>
                                        {opt.label}
                                    </div>
                                    <div style={{ fontSize: 11, color: C.textSecondary }}>
                                        {opt.desc}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Lag field */}
                        <div style={{ marginBottom: 24 }}>
                            <label style={{ fontSize: 12, fontWeight: 600, color: C.textTitle, display: 'block', marginBottom: 6 }}>
                                Lag (dias de folga)
                            </label>
                            <input
                                type="number"
                                min={0}
                                value={depModalLag}
                                onChange={e => setDepModalLag(parseInt(e.target.value) || 0)}
                                style={{
                                    width: '100%', padding: '8px 12px',
                                    borderRadius: 8,
                                    border: `1.5px solid ${C.borderLight}`,
                                    fontSize: 14, color: C.textPrimary,
                                    outline: 'none',
                                    boxSizing: 'border-box',
                                }}
                            />
                        </div>

                        {/* Action buttons */}
                        <div style={{ display: 'flex', gap: 10 }}>
                            <button
                                onClick={() => setPendingConnection(null)}
                                style={{
                                    flex: 1, padding: '10px 0',
                                    borderRadius: 10,
                                    border: `1.5px solid ${C.borderLight}`,
                                    background: '#fff',
                                    fontSize: 14, fontWeight: 600, color: C.textSecondary,
                                    cursor: 'pointer',
                                    transition: 'all 0.15s',
                                }}
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleCreateDependency}
                                disabled={depCreating}
                                style={{
                                    flex: 2, padding: '10px 0',
                                    borderRadius: 10,
                                    border: 'none',
                                    background: depCreating ? `${C.group}88` : `linear-gradient(135deg, ${C.group}, ${C.group}cc)`,
                                    fontSize: 14, fontWeight: 700, color: '#fff',
                                    cursor: depCreating ? 'wait' : 'pointer',
                                    boxShadow: depCreating ? 'none' : `0 4px 16px ${C.group}33`,
                                    transition: 'all 0.15s',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                                }}
                            >
                                {depCreating && <span style={{ fontSize: 12 }}>⟳</span>}
                                {depCreating ? 'Criando...' : 'Criar Relação'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


// ── Small icon helper for tooltips ──
function task_icon(type: OriginalType, colorIdx?: number) {
    const iconCircle = (bg: string, icon: React.ReactNode) => (
        <div className="flex-shrink-0 flex items-center justify-center rounded-full" style={{ width: 18, height: 18, background: bg }}>
            {icon}
        </div>
    );
    switch (type) {
        case 'step': return <div className="w-3 h-3 rounded flex-shrink-0" style={{ background: STEP_PALETTE[colorIdx ?? 0].bar, border: `1.5px solid ${STEP_PALETTE[colorIdx ?? 0].barBorder}` }} />;
        case 'milestone': return iconCircle(C.milestone, <Flag size={10} color="#fff" />);
        case 'event': return iconCircle(C.event, <Clock size={10} color="#fff" />);
        case 'note': return iconCircle(C.note, <MessageCircle size={10} color="#fff" />);
    }
}
