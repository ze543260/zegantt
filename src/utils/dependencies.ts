import { GanttDependency } from '../types';
import { InternalTask, TimelineInfo } from '../types/internal';
import { PILL_MIN_W, ROW_H } from './constants';
import { dateToX } from './timeline';

export interface ArrowPath {
    predId: string;
    succId: string;
    path: string;
    headX: number;
    headY: number;
}

export function computeArrows(
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
