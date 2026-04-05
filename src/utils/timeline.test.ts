import { describe, expect, it } from 'vitest';
import { computeTimeline, dateToX } from './timeline';
import type { InternalTask } from '../types/internal';

const baseTask: InternalTask = {
  id: 't1',
  name: 'Task 1',
  start: new Date('2026-01-10T00:00:00Z'),
  end: new Date('2026-01-20T00:00:00Z'),
  progress: 50,
  originalType: 'step',
  deps: [],
};

describe('timeline utils', () => {
  it('computes timeline with valid range and month labels', () => {
    const timeline = computeTimeline([baseTask], 'day', 'en-US');
    expect(timeline.totalDays).toBeGreaterThan(0);
    expect(timeline.months.length).toBeGreaterThan(0);
    expect(timeline.totalWidth).toBe(timeline.totalDays * timeline.dayWidth);
  });

  it('maps dates to x coordinates consistently', () => {
    const timeline = computeTimeline([baseTask], 'day', 'en-US');
    const x1 = dateToX(baseTask.start, timeline);
    const x2 = dateToX(baseTask.end, timeline);
    expect(x2).toBeGreaterThanOrEqual(x1);
  });
});
