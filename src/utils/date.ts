export const MS_DAY = 86_400_000;
export const addDays = (d: Date, n: number) => new Date(d.getTime() + n * MS_DAY);
export const diffDays = (a: Date, b: Date) => Math.round((b.getTime() - a.getTime()) / MS_DAY);
export const isWeekend = (d: Date) => d.getDay() === 0 || d.getDay() === 6;
export const startOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1);
export const endOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth() + 1, 0);

export const fmtDateShort = (d: Date) =>
    `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;

export const getMonthName = (d: Date, locale = 'en'): string =>
    new Intl.DateTimeFormat(locale, { month: 'long' }).format(d).toUpperCase();
