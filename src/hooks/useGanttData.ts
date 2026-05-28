import { useMemo } from 'react';
import type { GanttDependency, GanttEvent, GanttMilestone, GanttNote, GanttStep, GanttNonWorkingDay } from '../types';
import type { InternalTask, OriginalType, DisplayRow, ViewMode } from '../types/internal';
import { computeTimeline } from '../utils/timeline';
import { computeArrows } from '../utils/dependencies';
import { computeCriticalPath } from '../utils/criticalPath';
import { addDays } from '../utils/date';
import { STEP_PALETTE, GROUP_LABELS } from '../utils/constants';

interface UseGanttDataProps {
    steps: GanttStep[];
    milestones?: GanttMilestone[];
    events?: GanttEvent[];
    notes?: GanttNote[];
    dependencies?: GanttDependency[];
    viewMode: ViewMode;
    dayWidth?: number;
    locale?: string;
    groupByProject?: boolean;
    visibleTypes: Set<OriginalType>;
    collapsedGroups: Set<string>;
    collapsedProjects: Set<string>;
    selectedTaskId: string | null;
    nonWorkingDays?: GanttNonWorkingDay[];
    searchQuery?: string;
}

export function useGanttData({
    steps,
    milestones,
    events,
    notes,
    dependencies,
    viewMode,
    dayWidth,
    locale,
    groupByProject,
    visibleTypes,
    collapsedGroups,
    collapsedProjects,
    selectedTaskId,
    nonWorkingDays,
    searchQuery,
}: UseGanttDataProps) {
    const tasks: InternalTask[] = useMemo(() => {
        const result: InternalTask[] = [];

        // Map notes by target identifier
        const notesMap = new Map<string, GanttNote[]>();
        notes?.forEach(n => {
            let tId = n.targetId || n.predecessorId;
            
            // Fallback: check dependencies if no direct ID
            if (!tId && dependencies) {
                const dep = dependencies.find(d => d.successorId === n.id);
                if (dep) tId = dep.predecessorId;
            }

            if (!tId) return;
            const existing = notesMap.get(tId) || [];
            notesMap.set(tId, [...existing, n]);
        });

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

            const rawProg = step.conclusionPercent != null ? Number(step.conclusionPercent) : 0;
            result.push({
                id: step.id,
                name: step.name,
                start: s,
                end: e,
                progress: rawProg > 1 ? Math.min(rawProg, 100) : rawProg * 100,
                originalType: 'step',
                deps: stepDeps,
                colorIdx: stepColorCounter % STEP_PALETTE.length,
                barColor: step.barColor,
                progressColor: step.progressColor,
                borderColor: step.borderColor,
                previsionStart,
                previsionEnd,
                hasActualDates: hasActual,
                projectId: step.projectId || undefined,
                projectTitle: step.projectTitle || undefined,
                attachedNotes: notesMap.get(step.id),
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
                attachedNotes: notesMap.get(m.id),
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
                attachedNotes: notesMap.get(ev.id),
            });
        });

        return result;
    }, [steps, milestones, events, notes, dependencies]);

    const timeline = useMemo(() => computeTimeline(tasks, viewMode, locale, dayWidth), [tasks, viewMode, locale, dayWidth]);

    const displayRows: DisplayRow[] = useMemo(() => {
        const rows: DisplayRow[] = [];
        const typeOrder: OriginalType[] = ['step', 'milestone', 'event'];

        if (groupByProject) {
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
    }, [tasks]);

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

    const groupProgress = useMemo(() => {
        const byType = new Map<string, { sum: number; count: number }>();
        const byProject = new Map<string, { sum: number; count: number }>();

        for (const task of tasks) {
            if (task.originalType !== 'step') continue;

            const typeEntry = byType.get('step') || { sum: 0, count: 0 };
            typeEntry.sum += task.progress;
            typeEntry.count += 1;
            byType.set('step', typeEntry);

            if (task.projectId) {
                const projEntry = byProject.get(task.projectId) || { sum: 0, count: 0 };
                projEntry.sum += task.progress;
                projEntry.count += 1;
                byProject.set(task.projectId, projEntry);
            }
        }

        const toPercent = (entry?: { sum: number; count: number }) =>
            entry && entry.count > 0 ? Math.round(entry.sum / entry.count) : null;

        return {
            byType: new Map([...byType.entries()].map(([k, v]) => [k, toPercent(v)!])),
            byProject: new Map([...byProject.entries()].map(([k, v]) => [k, toPercent(v)!])),
        };
    }, [tasks]);

    const nonWorkingDaySet = useMemo(() => {
        const set = new Set<string>();
        for (const nwd of (nonWorkingDays ?? [])) {
            const d = nwd.date instanceof Date ? nwd.date : new Date(nwd.date);
            if (!isNaN(d.getTime())) {
                set.add(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`);
            }
        }
        return set;
    }, [nonWorkingDays]);

    const filteredDisplayRows: DisplayRow[] = useMemo(() => {
        const normalizedQuery = (searchQuery || '').toLowerCase().trim();
        if (!normalizedQuery) return displayRows;
        return displayRows.filter(row => {
            if (row.kind !== 'task') return true;
            return row.task.name.toLowerCase().includes(normalizedQuery);
        });
    }, [displayRows, searchQuery]);

    return {
        tasks,
        timeline,
        displayRows: filteredDisplayRows,
        taskRowIndex,
        arrows,
        criticalIds,
        delayedIds,
        relatedIds,
        groupProgress,
        nonWorkingDaySet,
    };
}
