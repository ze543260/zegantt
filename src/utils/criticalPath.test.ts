import { describe, expect, it } from 'vitest';
import { computeCriticalPath } from './criticalPath';
import type { InternalTask } from '../types/internal';
import type { GanttDependency } from '../types';

const tasks: InternalTask[] = [
  {
    id: 'A',
    name: 'A',
    start: new Date('2026-01-01T00:00:00Z'),
    end: new Date('2026-01-05T00:00:00Z'),
    progress: 0,
    originalType: 'step',
    deps: [],
  },
  {
    id: 'B',
    name: 'B',
    start: new Date('2026-01-05T00:00:00Z'),
    end: new Date('2026-01-10T00:00:00Z'),
    progress: 0,
    originalType: 'step',
    deps: ['A'],
  },
  {
    id: 'C',
    name: 'C',
    start: new Date('2026-01-10T00:00:00Z'),
    end: new Date('2026-01-15T00:00:00Z'),
    progress: 0,
    originalType: 'step',
    deps: ['B'],
  },
];

const deps: GanttDependency[] = [
  { id: 'd1', predecessorId: 'A', predecessorType: 'STEP', successorId: 'B', successorType: 'STEP', type: 'FS', lag: 0 },
  { id: 'd2', predecessorId: 'B', predecessorType: 'STEP', successorId: 'C', successorType: 'STEP', type: 'FS', lag: 0 },
];

describe('critical path', () => {
  it('marks dependent chain as critical path', () => {
    const critical = computeCriticalPath(tasks, deps);
    expect(critical.has('A')).toBe(true);
    expect(critical.has('B')).toBe(true);
    expect(critical.has('C')).toBe(true);
  });

  it('returns empty set when dependencies are empty', () => {
    const critical = computeCriticalPath(tasks, []);
    expect(critical.size).toBe(0);
  });
});
