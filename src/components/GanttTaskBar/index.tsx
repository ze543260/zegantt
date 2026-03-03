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

    // ── EVENT (diamond/circle) ──
    if (task.originalType === 'event') {
        const evSize = 22;
        const evY = y + (ROW_H - evSize) / 2;
        return (
            <div
                data-task-id={task.id}
                {...commonEvents}
                style={{
                    position: 'absolute', left: x - evSize / 2, top: evY, width: evSize, height: evSize,
                    borderRadius: '50%', background: isCritical ? `linear-gradient(135deg, #fee, #fff5f5)` : `linear-gradient(135deg, #fff7ed, #ffedd5)`,
                    border: isConnectTarget ? `2px solid ${C.group}` : isCritical ? `2px solid ${C.today}` : `1.5px solid ${C.event}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: isDrag ? 'grabbing' : 'grab', zIndex: isHov || isConnectTarget ? 20 : 10,
                    boxShadow: isConnectTarget ? `0 0 0 2px ${C.group}, 0 4px 16px ${C.group}33` : isCritical ? `0 0 0 1px ${C.today}44, 0 3px 12px ${C.today}22` : isBarHighlighted && !isHov ? `0 0 0 2px ${C.group}99, 0 3px 14px ${C.group}33` : isHov ? `0 3px 12px ${C.event}33` : '0 1px 3px rgba(0,0,0,0.06)',
                    opacity: isBarDimmed ? 0.15 : 1, transition: 'box-shadow 0.2s, transform 0.15s, opacity 0.18s',
                    transform: isHov ? 'scale(1.15)' : 'none', overflow: 'visible',
                }}
            >
                <div style={{ width: 14, height: 14, borderRadius: '50%', background: isCritical ? C.today : C.event, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Clock size={8} color="#fff" strokeWidth={3} />
                </div>
                {task.progress >= 100 && (
                    <div style={{ position: 'absolute', top: -5, right: -12, background: C.event, color: '#fff', fontSize: 8, fontWeight: 700, padding: '1px 4px', borderRadius: 4 }}>✓</div>
                )}
                {/* Fixed tooltip text */}
                <div style={{
                    position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                    marginTop: 4, background: 'rgba(255,255,255,0.9)', padding: '2px 6px',
                    borderRadius: 4, border: `1px solid ${C.borderLight}`,
                    fontSize: 9, fontWeight: 600, color: isCritical ? C.today : C.event,
                    whiteSpace: 'nowrap', pointerEvents: 'none',
                    opacity: isHov ? 1 : 0, transition: 'opacity 0.15s',
                }}>
                    {task.name}
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

    // ── NOTE ("Post-it" style) ──
    if (task.originalType === 'note') {
        const mw = 36; const mh = 44;
        const noteY = y + (ROW_H - mh) / 2;
        const bgColor = task.noteColor || C.note;
        return (
            <div
                data-task-id={task.id}
                {...commonEvents}
                style={{
                    position: 'absolute', left: x - mw / 2, top: noteY, width: mw, height: mh,
                    background: bgColor, borderRadius: 2, cursor: isDrag ? 'grabbing' : 'grab',
                    zIndex: isHov || isConnectTarget ? 20 : 10,
                    boxShadow: isConnectTarget ? `0 0 0 2px ${C.group}, 0 4px 16px ${C.group}33` : isBarHighlighted && !isHov ? `0 0 0 2px ${C.group}99, 0 3px 14px ${C.group}33` : isHov ? '3px 4px 12px rgba(0,0,0,0.2)' : '1px 2px 5px rgba(0,0,0,0.15)',
                    opacity: isBarDimmed ? 0.2 : 1, transition: 'box-shadow 0.2s, transform 0.15s, opacity 0.18s',
                    transform: isHov ? 'rotate(-2deg) scale(1.05)' : 'none', overflow: 'visible',
                    display: 'flex', flexDirection: 'column',
                    border: '1px solid rgba(0,0,0,0.04)',
                }}
            >
                {/* Tape */}
                <div style={{ position: 'absolute', top: -5, left: '50%', transform: 'translateX(-50%)', width: 18, height: 6, background: 'rgba(255,255,255,0.6)', borderRadius: 1, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }} />
                <div style={{ padding: '6px 4px 2px', flex: 1, overflow: 'hidden' }}>
                    {/* Simulated text lines */}
                    <div style={{ width: '80%', height: 2, background: 'rgba(0,0,0,0.1)', borderRadius: 1, marginBottom: 3 }} />
                    <div style={{ width: '60%', height: 2, background: 'rgba(0,0,0,0.1)', borderRadius: 1, marginBottom: 3 }} />
                    <div style={{ width: '90%', height: 2, background: 'rgba(0,0,0,0.1)', borderRadius: 1 }} />
                </div>
                {(task.filesCount || 0) > 0 && (
                    <div style={{ position: 'absolute', bottom: -5, right: -5, background: C.headerBg, color: C.textSecondary, borderRadius: '50%', border: `1px solid ${C.borderLight}`, width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', zIndex: 2 }}>
                        <Paperclip size={8} />
                    </div>
                )}
                <div style={{
                    position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                    marginTop: 6, background: 'rgba(255,255,255,0.95)', padding: '3px 8px', borderRadius: 4,
                    border: `1px solid ${C.borderLight}`, fontSize: 10, fontWeight: 500, color: C.textPrimary,
                    whiteSpace: 'nowrap', pointerEvents: 'none', opacity: isHov ? 1 : 0, transition: 'opacity 0.15s',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}>
                    {task.name}
                </div>
                {showDots && (
                    <>
                        <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'left')} style={{ position: 'absolute', left: -10, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: '2.5px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.25)', cursor: 'crosshair', zIndex: 30 }} />
                        <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'right')} style={{ position: 'absolute', right: -10, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: '2.5px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.25)', cursor: 'crosshair', zIndex: 30 }} />
                    </>
                )}
            </div>
        );
    }
    return null;
}
