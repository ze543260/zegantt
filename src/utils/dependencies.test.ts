import { describe, expect, it } from 'vitest';
import { wouldCreateDependencyCycle, computeArrows } from './dependencies';
import type { GanttDependency } from '../types';
import type { InternalTask } from '../types/internal';

const deps: GanttDependency[] = [
  { id: 'd1', predecessorId: 'A', predecessorType: 'STEP', successorId: 'B', successorType: 'STEP', type: 'FS', lag: 0 },
  { id: 'd2', predecessorId: 'B', predecessorType: 'STEP', successorId: 'C', successorType: 'STEP', type: 'FS', lag: 0 },
];

describe('computeArrows depType and lag', () => {
  const makeTask = (id: string, start: Date, end: Date): InternalTask => ({
    id, name: id, start, end, progress: 0, originalType: 'step', deps: [],
  });

  it('includes depType in ArrowPath', () => {
    const tasks = [
      makeTask('a', new Date(2026,0,1), new Date(2026,0,10)),
      makeTask('b', new Date(2026,0,11), new Date(2026,0,20)),
    ];
    const dep: GanttDependency = {
      id: 'd1', predecessorId: 'a', predecessorType: 'STEP',
      successorId: 'b', successorType: 'STEP', type: 'SS', lag: 3,
    };
    const tl = { start: new Date(2026,0,1), end: new Date(2026,1,1), totalDays: 31,
      dayWidth: 20, totalWidth: 620, months: [], years: [], days: [],
      todayIndex: -1 };
    const rowIndex = new Map([['a', 0], ['b', 1]]);
    const arrows = computeArrows(tasks, [dep], tl as any, rowIndex);
    expect(arrows[0].depType).toBe('SS');
    expect(arrows[0].lag).toBe(3);
  });
});

describe('dependency cycle validation', () => {
  it('detects when a new relation would create a cycle', () => {
    expect(wouldCreateDependencyCycle(deps, 'C', 'A')).toBe(true);
  });

  it('allows acyclic relation', () => {
    expect(wouldCreateDependencyCycle(deps, 'A', 'D')).toBe(false);
  });
});
