export const MS_DAY = 86_400_000;
export const addDays = (d: Date, n: number) => new Date(d.getTime() + n * MS_DAY);
export const diffDays = (a: Date, b: Date) => Math.round((b.getTime() - a.getTime()) / MS_DAY);
export const isWeekend = (d: Date) => d.getDay() === 0 || d.getDay() === 6;
export const startOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1);
export const endOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth() + 1, 0);

export const normalizeLocale = (locale?: string): string => {
    if (!locale) return 'en-US';
    try {
        return new Intl.DateTimeFormat(locale).resolvedOptions().locale;
    } catch {
        return 'en-US';
    }
};

export const fmtDateShort = (d: Date, locale = 'en-US') =>
    new Intl.DateTimeFormat(normalizeLocale(locale), {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).format(d);

export const getMonthName = (d: Date, locale = 'en'): string =>
    new Intl.DateTimeFormat(normalizeLocale(locale), { month: 'long' }).format(d).toUpperCase();

/** ISO 8601 week number (1–53) */
export const getWeekNumber = (d: Date): number => {
    const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    return Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
};
