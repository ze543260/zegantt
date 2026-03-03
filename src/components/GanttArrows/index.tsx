import React from 'react';
import { useGanttContext } from '../../context/GanttContext';
import { C } from '../../utils/constants';

export function GanttArrows() {
    const {
        arrows,
        hoveredTaskId,
        selectedTaskId,
        relatedIds,
    } = useGanttContext();

    return (
        <>
            {arrows.map((a, i) => {
                const on = hoveredTaskId === a.predId || hoveredTaskId === a.succId;
                const isArrowActive = !selectedTaskId || (a.predId === selectedTaskId || a.succId === selectedTaskId || relatedIds.has(a.predId) || relatedIds.has(a.succId));
                const isArrowHighlighted = selectedTaskId !== null && isArrowActive;
                const col = on ? C.arrowHover : isArrowHighlighted ? C.group : C.arrow;
                return (
                    <g key={i} style={{ opacity: !isArrowActive ? 0.08 : isArrowHighlighted ? 1 : undefined, transition: 'opacity 0.18s' }}>
                        <path d={a.path} fill="none" stroke={col}
                            strokeWidth={isArrowHighlighted ? 2.5 : on ? 2 : 1.5}
                            style={{ transition: 'stroke 0.2s, stroke-width 0.2s' }} />
                        <polygon
                            points={`${a.headX},${a.headY} ${a.headX - 6},${a.headY - 4} ${a.headX - 6},${a.headY + 4}`}
                            fill={col} style={{ transition: 'fill 0.2s' }} />
                    </g>
                );
            })}
        </>
    );
}
