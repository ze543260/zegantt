import { describe, expect, it } from 'vitest';
import { fmtDateShort, getMonthName, normalizeLocale } from './date';

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
