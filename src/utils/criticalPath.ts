import { GanttDependency } from '../types';
import { InternalTask } from '../types/internal';
import { diffDays } from './date';

export function computeCriticalPath(tasks: InternalTask[], deps: GanttDependency[]): Set<string> {
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
