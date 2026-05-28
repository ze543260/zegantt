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

describe('timeline week view', () => {
  it('produces ~90 day span for week view with no tasks', () => {
    const tl = computeTimeline([], 'week', 'en', 18);
    expect(tl.days.length).toBeGreaterThan(60);
    expect(tl.days.length).toBeLessThan(120);
  });
  it('uses DAY_W_WEEK as dayWidth', () => {
    const tl = computeTimeline([], 'week', 'en', 18);
    expect(tl.dayWidth).toBe(18);
  });
  it('produces reasonable span for week view with tasks', () => {
    const tl = computeTimeline([baseTask], 'week', 'en', 18);
    expect(tl.days.length).toBeGreaterThan(60);
    expect(tl.totalWidth).toBe(tl.totalDays * tl.dayWidth);
  });
});
