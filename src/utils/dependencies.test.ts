import { describe, expect, it } from 'vitest';
import { wouldCreateDependencyCycle } from './dependencies';
import type { GanttDependency } from '../types';

const deps: GanttDependency[] = [
  { id: 'd1', predecessorId: 'A', predecessorType: 'STEP', successorId: 'B', successorType: 'STEP', type: 'FS', lag: 0 },
  { id: 'd2', predecessorId: 'B', predecessorType: 'STEP', successorId: 'C', successorType: 'STEP', type: 'FS', lag: 0 },
];

describe('dependency cycle validation', () => {
  it('detects when a new relation would create a cycle', () => {
    expect(wouldCreateDependencyCycle(deps, 'C', 'A')).toBe(true);
  });

  it('allows acyclic relation', () => {
    expect(wouldCreateDependencyCycle(deps, 'A', 'D')).toBe(false);
  });
});
