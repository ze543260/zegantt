import React, { useRef, useCallback, useState, useEffect } from 'react';
import type { TimelineInfo } from '../types/internal';
import { dateToX } from '../utils/timeline';

export function useGanttScroll(timeline: TimelineInfo) {
    const leftBodyRef = useRef<HTMLDivElement>(null);
    const rightBodyRef = useRef<HTMLDivElement>(null);
    const timeHeaderRef = useRef<HTMLDivElement>(null);
    const syncing = useRef(false);

    const handleRightScroll = useCallback(() => {
        if (syncing.current) return;
        syncing.current = true;
        const rb = rightBodyRef.current;
        if (rb && leftBodyRef.current) leftBodyRef.current.scrollTop = rb.scrollTop;
        if (rb && timeHeaderRef.current) timeHeaderRef.current.scrollLeft = rb.scrollLeft;
        syncing.current = false;
    }, []);

    const handleLeftScroll = useCallback(() => {
        if (syncing.current) return;
        syncing.current = true;
        if (leftBodyRef.current && rightBodyRef.current)
            rightBodyRef.current.scrollTop = leftBodyRef.current.scrollTop;
        syncing.current = false;
    }, []);

    const didScrollToToday = useRef(false);
    useEffect(() => {
        if (didScrollToToday.current || !timeline.totalWidth) return;
        const rb = rightBodyRef.current;
        if (!rb) return;
        const todayPx = dateToX(new Date(), timeline);
        if (todayPx >= 0 && todayPx <= timeline.totalWidth) {
            const scrollTarget = todayPx - rb.clientWidth / 2;
            rb.scrollLeft = Math.max(0, scrollTarget);
            if (timeHeaderRef.current) timeHeaderRef.current.scrollLeft = rb.scrollLeft;
            didScrollToToday.current = true;
        }
    }, [timeline]);

    const [panState, setPanState] = useState<{ startX: number; startY: number; scrollLeft: number; scrollTop: number } | null>(null);

    const handleChartMouseDown = useCallback((e: React.MouseEvent, isResizingOrDragging: boolean) => {
        if (isResizingOrDragging) return;
        if (e.button === 2) return;
        const rb = rightBodyRef.current;
        if (!rb) return;
        e.preventDefault();
        setPanState({ startX: e.clientX, startY: e.clientY, scrollLeft: rb.scrollLeft, scrollTop: rb.scrollTop });
    }, []);

    useEffect(() => {
        if (!panState) return;
        const onMove = (e: MouseEvent) => {
            const rb = rightBodyRef.current;
            if (!rb) return;
            const dx = e.clientX - panState.startX;
            const dy = e.clientY - panState.startY;
            rb.scrollLeft = panState.scrollLeft - dx;
            rb.scrollTop = panState.scrollTop - dy;
            if (leftBodyRef.current) leftBodyRef.current.scrollTop = rb.scrollTop;
            if (timeHeaderRef.current) timeHeaderRef.current.scrollLeft = rb.scrollLeft;
        };
        const onUp = () => setPanState(null);
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
        return () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
    }, [panState]);

    const handleChartWheel = useCallback((e: React.WheelEvent) => {
        const rb = rightBodyRef.current;
        if (!rb) return;
        e.preventDefault();

        if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            const delta = e.shiftKey ? e.deltaY : e.deltaX;
            rb.scrollLeft += delta;
            if (timeHeaderRef.current) timeHeaderRef.current.scrollLeft = rb.scrollLeft;
        } else {
            rb.scrollTop += e.deltaY;
            if (leftBodyRef.current) leftBodyRef.current.scrollTop = rb.scrollTop;
        }
    }, []);

    return {
        leftBodyRef,
        rightBodyRef,
        timeHeaderRef,
        handleRightScroll,
        handleLeftScroll,
        handleChartMouseDown,
        handleChartWheel,
        panState,
        setPanState
    };
}
