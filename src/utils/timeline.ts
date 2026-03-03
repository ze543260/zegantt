import type { InternalTask, TimelineInfo, ViewMode } from '../types/internal';
import { addDays, diffDays, endOfMonth, MONTH_NAMES_PT, startOfMonth } from './date';
import { DAY_W_MONTH, DAY_W_YEAR } from './constants';

export function computeTimeline(tasks: InternalTask[], mode: ViewMode): TimelineInfo {
    const dayW = mode === 'day' ? DAY_W_MONTH : DAY_W_YEAR;

    const buildDays = (s: Date, totalD: number) => {
        const daysArr: TimelineInfo['days'] = [];
        const todayStr = new Date().toDateString();
        let todayIndex = -1;
        for (let i = 0; i < totalD; i++) {
            const d = addDays(s, i);
            const isToday = d.toDateString() === todayStr;
            if (isToday) todayIndex = i;
            daysArr.push({
                date: d,
                isToday,
                isWeekend: d.getDay() === 0 || d.getDay() === 6,
            });
        }
        return { daysArr, todayIndex };
    };

    if (tasks.length === 0) {
        const now = new Date();
        const s = startOfMonth(now);
        const e = endOfMonth(now);
        const totalD = diffDays(s, e) + 1;
        const { daysArr, todayIndex } = buildDays(s, totalD);
        return {
            start: s, end: e, totalDays: totalD, dayWidth: dayW,
            totalWidth: totalD * dayW,
            months: [{ date: s, label: `${MONTH_NAMES_PT[s.getMonth()]} DE ${s.getFullYear()}`, startDay: 0, days: totalD, width: totalD * dayW }],
            years: [{ label: s.getFullYear().toString(), width: totalD * dayW }],
            days: daysArr,
            todayIndex
        };
    }

    let minD = new Date(tasks[0].start);
    let maxD = new Date(tasks[0].end);
    tasks.forEach(t => {
        if (t.start < minD) minD = new Date(t.start);
        if (t.end > maxD) maxD = new Date(t.end);
    });

    const s = startOfMonth(addDays(minD, -14));
    const e = endOfMonth(addDays(maxD, 14));
    const totalD = diffDays(s, e) + 1;

    const months: TimelineInfo['months'] = [];
    let cursor = new Date(s);
    while (cursor <= e) {
        const mEnd = endOfMonth(cursor);
        const clampedEnd = mEnd > e ? e : mEnd;
        const startDay = diffDays(s, cursor);
        const days = diffDays(cursor, clampedEnd) + 1;
        months.push({
            date: new Date(cursor),
            label: `${MONTH_NAMES_PT[cursor.getMonth()]} DE ${cursor.getFullYear()}`,
            startDay,
            days,
            width: days * dayW,
        });
        cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
    }

    const { daysArr, todayIndex } = buildDays(s, totalD);

    const years: TimelineInfo['years'] = [];
    if (mode === 'month') {
        let currentYearStr = '';
        let currentYearDays = 0;

        for (const m of months) {
            const yStr = m.date.getFullYear().toString();
            if (yStr !== currentYearStr) {
                if (currentYearStr) {
                    years.push({ label: currentYearStr, width: currentYearDays * dayW });
                }
                currentYearStr = yStr;
                currentYearDays = m.days;
            } else {
                currentYearDays += m.days;
            }
        }
        if (currentYearStr) {
            years.push({ label: currentYearStr, width: currentYearDays * dayW });
        }
    }

    return { start: s, end: e, totalDays: totalD, dayWidth: dayW, totalWidth: totalD * dayW, months, years, days: daysArr, todayIndex };
}

export function dateToX(date: Date, tl: TimelineInfo): number {
    return diffDays(tl.start, date) * tl.dayWidth;
}
