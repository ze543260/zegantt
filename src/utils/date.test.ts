import { describe, expect, it } from 'vitest';
import { fmtDateShort, getMonthName, normalizeLocale, getWeekNumber } from './date';

describe('date utils', () => {
  it('formats date using provided locale', () => {
    const d = new Date(2026, 0, 10);
    expect(fmtDateShort(d, 'en-US')).toMatch(/01\/10\/2026|1\/10\/2026/);
    expect(fmtDateShort(d, 'pt-BR')).toMatch(/10\/01\/2026|10\/1\/2026/);
  });

  it('falls back to english locale for invalid locale string', () => {
    const d = new Date(2026, 0, 10);
    expect(normalizeLocale('invalid-locale-__')).toBe('en-US');
    expect(fmtDateShort(d, 'invalid-locale-__')).toMatch(/01\/10\/2026|1\/10\/2026/);
  });

  it('returns uppercase month name for locale', () => {
    const d = new Date(2026, 2, 15);
    expect(getMonthName(d, 'en-US')).toBe('MARCH');
    expect(getMonthName(d, 'pt-BR')).toContain('MAR');
  });
});

describe('getWeekNumber', () => {
  it('returns 2 for Jan 5 2026 (W02)', () => {
    expect(getWeekNumber(new Date(2026, 0, 5))).toBe(2);
  });
  it('returns 1 for Jan 1 2026 (Thursday)', () => {
    expect(getWeekNumber(new Date(2026, 0, 1))).toBe(1);
  });
  it('returns 53 for Dec 31 2020 (Thursday)', () => {
    expect(getWeekNumber(new Date(2020, 11, 31))).toBe(53);
  });
  it('returns week on monday boundary', () => {
    expect(getWeekNumber(new Date(2026, 0, 12))).toBe(3); // Jan 12 = Monday of W03
  });
});
