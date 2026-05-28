
import { useGanttContext } from '../../context/GanttContext';
import { C } from '../../utils/constants';
import type { ArrowPath } from '../../utils/dependencies';

interface GanttArrowsProps {
    arrows?: ArrowPath[];
}

export function GanttArrows({ arrows: arrowsProp }: GanttArrowsProps) {
    const {
        arrows: contextArrows,
        hoveredTaskId,
        selectedTaskId,
        relatedIds,
    } = useGanttContext();

    const arrows = arrowsProp || contextArrows;

    const DEP_COLORS: Record<string, string> = {
        FS: C.group,
        SS: C.event,
        FF: 'var(--zg-dep-ff, #7c3aed)',
        SF: 'var(--zg-dep-sf, #0369a1)',
    };

    return (
        <>
            {arrows.map((a, i) => {
                const on = hoveredTaskId === a.predId || hoveredTaskId === a.succId;
                const isArrowActive = !selectedTaskId || (a.predId === selectedTaskId || a.succId === selectedTaskId || relatedIds.has(a.predId) || relatedIds.has(a.succId));
                const isArrowHighlighted = selectedTaskId !== null && isArrowActive;
                const baseColor = DEP_COLORS[a.depType] ?? C.arrow;
                const col = on
                    ? C.arrowHover
                    : isArrowHighlighted
                        ? baseColor
                        : C.arrow;
                return (
                    <g key={i} style={{ opacity: !isArrowActive ? 0.08 : isArrowHighlighted ? 1 : undefined, transition: 'opacity 0.18s' }}>
                        <path d={a.path} fill="none" stroke={col}
                            strokeWidth={isArrowHighlighted ? 2.5 : on ? 2 : 1.5}
                            style={{ transition: 'stroke 0.2s, stroke-width 0.2s' }} />
                        <polygon
                            points={`${a.headX},${a.headY} ${a.headX - 6},${a.headY - 4} ${a.headX - 6},${a.headY + 4}`}
                            fill={col} style={{ transition: 'fill 0.2s' }} />
                        {a.lag !== 0 && (
                            <g>
                                <rect
                                    x={a.headX - 40}
                                    y={a.headY - 10}
                                    width={32}
                                    height={14}
                                    rx={4}
                                    fill="var(--zg-surface, #fff)"
                                    stroke={col}
                                    strokeWidth={0.8}
                                    opacity={isArrowActive ? 1 : 0}
                                />
                                <text
                                    x={a.headX - 24}
                                    y={a.headY + 1}
                                    fontSize={8}
                                    fontWeight={700}
                                    fill={col}
                                    textAnchor="middle"
                                    opacity={isArrowActive ? 1 : 0}
                                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                                >
                                    {a.lag > 0 ? `+${a.lag}d` : `${a.lag}d`}
                                </text>
                            </g>
                        )}
                    </g>
                );
            })}
        </>
    );
}
