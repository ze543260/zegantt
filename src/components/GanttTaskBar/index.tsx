import type React from 'react';
import { Flag, Clock, Paperclip } from 'lucide-react';
import { useGanttContext } from '../../context/GanttContext';
import { C, BAR_H, PILL_H, PILL_MIN_W, ROW_H, STEP_PALETTE } from '../../utils/constants';
import { dateToX } from '../../utils/timeline';
import { fmtDateShort } from '../../utils/date';
import type { InternalTask } from '../../types/internal';

interface GanttTaskBarProps {
    task: InternalTask;
    x: number;
    y: number;
    w: number;
    progW: number;
    isHov: boolean;
    isDrag: boolean;
    isResize: boolean;
    isCritical: boolean;
    isDelayed: boolean;
    isConnectTarget: boolean;
    showDots: boolean;
    isBarDimmed: boolean;
    isBarHighlighted: boolean;
    commonEvents: any;
    handleResizeMouseDown: (e: React.MouseEvent, task: InternalTask, edge: 'left' | 'right') => void;
    handleConnectDotMouseDown: (e: React.MouseEvent, task: InternalTask, edge: 'left' | 'right') => void;
}

export function GanttTaskBar({
    task, x, y, w, progW,
    isHov, isDrag, isResize, isCritical, isDelayed, isConnectTarget, showDots, isBarDimmed, isBarHighlighted,
    commonEvents, handleResizeMouseDown, handleConnectDotMouseDown
}: GanttTaskBarProps) {
    const { timeline, viewMode } = useGanttContext();


    // ── STEP BAR ──
    if (task.originalType === 'step') {
        const pal = STEP_PALETTE[task.colorIdx ?? 0];
        const barY = y + (ROW_H - BAR_H) / 2;

        // ── Prevision / planned baseline bar ──
        const showBaseline = !!(task.previsionStart && task.previsionEnd);
        const baseX = showBaseline ? dateToX(task.previsionStart!, timeline) : 0;
        const baseW = showBaseline
            ? Math.max(dateToX(task.previsionEnd!, timeline) - baseX, viewMode === 'month' ? timeline.dayWidth : 6)
            : 0;
        // Baseline bar sits just below the main bar (4 px stripe)
        const baseY = barY + BAR_H + 3;

        return (
            <>
                {showBaseline && (
                    <div
                        title={`Previsto: ${fmtDateShort(task.previsionStart!)} → ${fmtDateShort(task.previsionEnd!)}`}
                        style={{
                            position: 'absolute', left: baseX, top: baseY, width: baseW, height: 5,
                            borderRadius: 3, background: `${pal.progress}33`, border: `1.5px solid ${pal.progress}66`,
                            boxShadow: `inset 0 0 0 1px ${pal.progress}22`, pointerEvents: 'none', zIndex: 5,
                        }}
                    />
                )}
                <div
                    data-task-id={task.id}
                    {...commonEvents}
                    style={{
                        position: 'absolute', left: x, top: barY, width: w, height: BAR_H,
                        borderRadius: BAR_H / 2,
                        background: isDelayed ? 'linear-gradient(135deg, #fdd, #fee)' : pal.bar,
                        border: isCritical ? `2px solid ${C.today}` : isDelayed ? `1.5px solid ${C.today}88` : `1.5px solid ${pal.barBorder}`,
                        cursor: isDrag || isResize ? 'grabbing' : 'grab',
                        zIndex: isHov || isConnectTarget ? 20 : 10,
                        boxShadow: isConnectTarget
                            ? `0 0 0 2px ${C.group}, 0 4px 16px ${C.group}33`
                            : isCritical
                                ? `0 0 0 1px ${C.today}44, 0 3px 12px ${C.today}22`
                                : isBarHighlighted && !isHov ? `0 0 0 2px ${C.group}99, 0 3px 14px ${C.group}33`
                                    : isHov ? `0 3px 12px ${pal.progress}22` : 'none',
                        transform: isHov ? 'scaleY(1.06)' : 'scaleY(1)',
                        opacity: isBarDimmed ? 0.15 : 1,
                        transition: isDrag || isResize ? 'none' : 'box-shadow 0.2s, transform 0.15s, opacity 0.18s',
                        overflow: 'visible',
                    }}
                >
                    <div style={{ position: 'absolute', left: 0, top: 0, width: w, height: '100%', borderRadius: BAR_H / 2, overflow: 'hidden', pointerEvents: 'none' }}>
                        <div style={{
                            position: 'absolute', left: 0, top: 0, width: progW, height: '100%',
                            background: isDelayed ? `linear-gradient(90deg, ${C.today}cc, ${C.today}88)` : `linear-gradient(90deg, ${pal.progress}, ${pal.progress}cc)`,
                            borderRadius: `${BAR_H / 2}px 0 0 ${BAR_H / 2}px`,
                            transition: isDrag || isResize ? 'none' : 'width 0.3s',
                        }} />
                        {w > 50 && (
                            <span style={{
                                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 10, fontWeight: 700, letterSpacing: '0.05em',
                                color: task.progress > 50 ? '#fff' : isDelayed ? C.today : pal.progress, zIndex: 1, pointerEvents: 'none',
                            }}>
                                {Math.round(task.progress)}%
                            </span>
                        )}
                    </div>
                    <div onMouseDown={ev => handleResizeMouseDown(ev, task, 'left')} style={{ position: 'absolute', left: 0, top: 0, width: 8, height: '100%', cursor: 'col-resize', zIndex: 2, borderRadius: `${BAR_H / 2}px 0 0 ${BAR_H / 2}px` }} />
                    <div onMouseDown={ev => handleResizeMouseDown(ev, task, 'right')} style={{ position: 'absolute', right: 0, top: 0, width: 8, height: '100%', cursor: 'col-resize', zIndex: 2, borderRadius: `0 ${BAR_H / 2}px ${BAR_H / 2}px 0` }} />
                    {showDots && (
                        <>
                            <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'left')} style={{ position: 'absolute', left: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: '2.5px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.25)', cursor: 'crosshair', zIndex: 30 }} />
                            <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'right')} style={{ position: 'absolute', right: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: '2.5px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.25)', cursor: 'crosshair', zIndex: 30 }} />
                        </>
                    )}
                </div>
            </>
        );
    }

    // ── MILESTONE (pill badge) ──
    if (task.originalType === 'milestone') {
        const pillY = y + (ROW_H - PILL_H) / 2;
        return (
            <div
                data-task-id={task.id}
                {...commonEvents}
                style={{
                    position: 'absolute', left: x - 6, top: pillY, height: PILL_H, minWidth: PILL_MIN_W,
                    borderRadius: PILL_H / 2, background: isCritical ? `linear-gradient(135deg, #fee, #fff5f5)` : `linear-gradient(135deg, #e8f5ee, #f0f8f4)`,
                    border: isConnectTarget ? `2px solid ${C.group}` : isCritical ? `2px solid ${C.today}` : `1.5px solid ${C.milestoneRing}`,
                    display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 4, paddingRight: 12,
                    cursor: isDrag ? 'grabbing' : 'grab', zIndex: isHov || isConnectTarget ? 20 : 10,
                    boxShadow: isConnectTarget ? `0 0 0 2px ${C.group}, 0 4px 16px ${C.group}33` : isCritical ? `0 0 0 1px ${C.today}44, 0 3px 12px ${C.today}22` : isBarHighlighted && !isHov ? `0 0 0 2px ${C.group}99, 0 3px 14px ${C.group}33` : isHov ? `0 3px 12px ${C.milestone}22` : '0 1px 3px rgba(0,0,0,0.06)',
                    opacity: isBarDimmed ? 0.15 : 1, transition: 'box-shadow 0.2s, transform 0.15s, opacity 0.18s',
                    transform: isHov ? 'translateY(-1px)' : 'none', whiteSpace: 'nowrap', overflow: 'visible',
                }}
            >
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: isCritical ? C.today : C.milestone, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Flag size={11} color="#fff" strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, color: isCritical ? C.today : C.milestone, overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 130 }}>
                    {task.name}
                </span>
                {task.progress >= 100 && (
                    <span style={{ fontSize: 9, fontWeight: 700, color: '#fff', background: C.milestoneRing, borderRadius: 6, padding: '1px 5px' }}>✓</span>
                )}
                {showDots && (
                    <>
                        <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'left')} style={{ position: 'absolute', left: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: '2.5px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.25)', cursor: 'crosshair', zIndex: 30 }} />
                        <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'right')} style={{ position: 'absolute', right: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: '2.5px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.25)', cursor: 'crosshair', zIndex: 30 }} />
                    </>
                )}
            </div>
        );
    }

    // ── EVENT (pill badge, same pattern as milestone) ──
    if (task.originalType === 'event') {
        const pillY = y + (ROW_H - PILL_H) / 2;
        return (
            <div
                data-task-id={task.id}
                {...commonEvents}
                style={{
                    position: 'absolute', left: x - 6, top: pillY, height: PILL_H, minWidth: PILL_MIN_W,
                    borderRadius: PILL_H / 2,
                    background: isCritical ? `linear-gradient(135deg, #fee, #fff5f5)` : `linear-gradient(135deg, #fff7ed, #ffedd5)`,
                    border: isConnectTarget ? `2px solid ${C.group}` : isCritical ? `2px solid ${C.today}` : `1.5px solid ${C.event}`,
                    display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 4, paddingRight: 12,
                    cursor: isDrag ? 'grabbing' : 'grab', zIndex: isHov || isConnectTarget ? 20 : 10,
                    boxShadow: isConnectTarget ? `0 0 0 2px ${C.group}, 0 4px 16px ${C.group}33` : isCritical ? `0 0 0 1px ${C.today}44, 0 3px 12px ${C.today}22` : isBarHighlighted && !isHov ? `0 0 0 2px ${C.group}99, 0 3px 14px ${C.group}33` : isHov ? `0 3px 12px ${C.event}33` : '0 1px 3px rgba(0,0,0,0.06)',
                    opacity: isBarDimmed ? 0.15 : 1, transition: 'box-shadow 0.2s, transform 0.15s, opacity 0.18s',
                    transform: isHov ? 'translateY(-1px)' : 'none', whiteSpace: 'nowrap', overflow: 'visible',
                }}
            >
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: isCritical ? C.today : C.event, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={11} color="#fff" strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, color: isCritical ? C.today : C.event, overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 130 }}>
                    {task.name}
                </span>
                {task.progress >= 100 && (
                    <span style={{ fontSize: 9, fontWeight: 700, color: '#fff', background: C.event, borderRadius: 6, padding: '1px 5px' }}>✓</span>
                )}
                {showDots && (
                    <>
                        <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'left')} style={{ position: 'absolute', left: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: '2.5px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.25)', cursor: 'crosshair', zIndex: 30 }} />
                        <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'right')} style={{ position: 'absolute', right: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: '2.5px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.25)', cursor: 'crosshair', zIndex: 30 }} />
                    </>
                )}
            </div>
        );
    }

    // ── NOTE ("Post-it" style) ──
    if (task.originalType === 'note') {
        const noteW = 148;
        const noteY = y + 4;
        const bgColor = task.noteColor || '#FEF08A';
        const files = task.filesCount || 0;
        return (
            <div
                data-task-id={task.id}
                {...commonEvents}
                style={{
                    position: 'absolute', left: x, top: noteY,
                    width: noteW, minHeight: 72,
                    background: bgColor,
                    borderRadius: 3,
                    cursor: isDrag ? 'grabbing' : 'grab',
                    zIndex: isHov || isConnectTarget ? 20 : 10,
                    boxShadow: isConnectTarget
                        ? `0 0 0 2px ${C.group}, 4px 6px 16px rgba(0,0,0,0.22)`
                        : isBarHighlighted && !isHov
                            ? `0 0 0 2px ${C.group}99, 3px 4px 14px rgba(0,0,0,0.18)`
                            : isHov
                                ? '4px 6px 18px rgba(0,0,0,0.22)'
                                : '2px 3px 8px rgba(0,0,0,0.13)',
                    opacity: isBarDimmed ? 0.2 : 1,
                    transition: isDrag ? 'none' : 'box-shadow 0.2s, transform 0.15s, opacity 0.18s',
                    transform: isHov ? 'rotate(-1.5deg) scale(1.03) translateY(-2px)' : 'rotate(0deg)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    padding: '12px 10px 10px',
                    display: 'flex', flexDirection: 'column', gap: 2,
                    userSelect: 'none',
                }}
            >
                {/* Tape */}
                <div style={{
                    position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)',
                    width: 40, height: 11, background: 'rgba(255,255,255,0.55)',
                    borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                }} />

                {/* Title */}
                <span style={{
                    fontSize: 13, fontWeight: 700, color: '#1a1a1a',
                    lineHeight: '1.3', wordBreak: 'break-word',
                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}>
                    {task.name}
                </span>

                {/* Project name */}
                {task.projectTitle && (
                    <span style={{
                        fontSize: 10, fontWeight: 400, color: 'rgba(0,0,0,0.55)',
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>
                        {task.projectTitle}
                    </span>
                )}

                {/* Date row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 2 }}>
                    <span style={{ fontSize: 9, fontWeight: 500, color: 'rgba(0,0,0,0.45)' }}>
                        {fmtDateShort(task.start)}
                    </span>
                    {files > 0 && (
                        <span style={{
                            display: 'flex', alignItems: 'center', gap: 2,
                            fontSize: 9, color: 'rgba(0,0,0,0.45)',
                        }}>
                            <Paperclip size={8} /> {files}
                        </span>
                    )}
                </div>

                {showDots && (
                    <>
                        <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'left')} style={{ position: 'absolute', left: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: '2.5px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.25)', cursor: 'crosshair', zIndex: 30 }} />
                        <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'right')} style={{ position: 'absolute', right: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: '2.5px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.25)', cursor: 'crosshair', zIndex: 30 }} />
                    </>
                )}
            </div>
        );
    }
    return null;
}
