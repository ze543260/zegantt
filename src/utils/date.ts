export const MS_DAY = 86_400_000;
export const addDays = (d: Date, n: number) => new Date(d.getTime() + n * MS_DAY);
export const diffDays = (a: Date, b: Date) => Math.round((b.getTime() - a.getTime()) / MS_DAY);
export const isWeekend = (d: Date) => d.getDay() === 0 || d.getDay() === 6;
export const startOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1);
export const endOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth() + 1, 0);

export const fmtDateShort = (d: Date) =>
    `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;

export const MONTH_NAMES_PT: Record<number, string> = {
    0: 'JANEIRO', 1: 'FEVEREIRO', 2: 'MARÇO', 3: 'ABRIL',
    4: 'MAIO', 5: 'JUNHO', 6: 'JULHO', 7: 'AGOSTO',
    8: 'SETEMBRO', 9: 'OUTUBRO', 10: 'NOVEMBRO', 11: 'DEZEMBRO',
};
