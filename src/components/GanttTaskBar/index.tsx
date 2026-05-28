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
    commonEvents: React.HTMLAttributes<HTMLDivElement>;
    handleResizeMouseDown: (e: React.MouseEvent, task: InternalTask, edge: 'left' | 'right') => void;
    handleResizeTouchStart: (e: React.TouchEvent, task: InternalTask, edge: 'left' | 'right') => void;
    handleConnectDotMouseDown: (e: React.MouseEvent, task: InternalTask, edge: 'left' | 'right') => void;
    handleConnectDotTouchStart: (e: React.TouchEvent, task: InternalTask, edge: 'left' | 'right') => void;
}

export function GanttTaskBar({
    task, x, y, w, progW,
    isHov, isDrag, isResize, isCritical, isDelayed, isConnectTarget, showDots, isBarDimmed, isBarHighlighted,
    commonEvents, handleResizeMouseDown, handleResizeTouchStart, handleConnectDotMouseDown, handleConnectDotTouchStart
}: GanttTaskBarProps) {
    const { timeline, viewMode, props } = useGanttContext();


    // ── STEP BAR ──
    if (task.originalType === 'step') {
        const pal = STEP_PALETTE[task.colorIdx ?? 0];
        const barY = y + (ROW_H - BAR_H) / 2;

        const finalBarColor = task.barColor || pal.bar;
        const finalProgressColor = task.progressColor || pal.progress;
        const finalBorderColor = task.borderColor || pal.barBorder;

        const LABEL_THRESHOLD = 55;
        const showOutsideLabel = (props.showLabelOutside !== false) && w < LABEL_THRESHOLD;
        const outsideLabelColor = isCritical || isDelayed ? C.today : C.textPrimary;

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
                        title={`Previsto: ${fmtDateShort(task.previsionStart!, props.locale)} → ${fmtDateShort(task.previsionEnd!, props.locale)}`}
                        style={{
                            position: 'absolute', left: baseX, top: baseY, width: baseW, height: 5,
                            borderRadius: 3, 
                            background: `color-mix(in srgb, ${finalProgressColor}, transparent 80%)`, 
                            border: `1.5px solid color-mix(in srgb, ${finalProgressColor}, transparent 60%)`,
                            boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${finalProgressColor}, transparent 85%)`, 
                            pointerEvents: 'none', zIndex: 5,
                        }}
                    />
                )}
                <div
                    data-task-id={task.id}
                    {...commonEvents}
                    role="button"
                    tabIndex={0}
                    aria-label={`Task bar ${task.name}`}
                    style={{
                        position: 'absolute', left: x, top: barY, width: w, height: BAR_H,
                        borderRadius: BAR_H / 2,
                        background: isDelayed ? C.delayedTaskBg : finalBarColor,
                        border: isCritical ? `2px solid ${C.today}` : isDelayed ? `1.5px solid ${C.todayStrong}` : `1.5px solid ${finalBorderColor}`,
                        cursor: isDrag || isResize ? 'grabbing' : 'grab',
                        zIndex: isHov || isConnectTarget ? 20 : 10,
                        boxShadow: isConnectTarget
                            ? `0 0 0 2px ${C.group}, 0 4px 16px ${C.groupGlowSoft}`
                            : isCritical
                                ? `0 0 0 1px ${C.todayMid}, 0 3px 12px ${C.todaySoft}`
                                : isBarHighlighted && !isHov ? `0 0 0 2px ${C.groupGlowStrong}, 0 3px 14px ${C.groupGlowSoft}`
                                    : isHov ? `0 3px 12px color-mix(in srgb, ${finalProgressColor}, transparent 85%)` : 'none',
                        transform: isHov ? 'scaleY(1.06)' : 'scaleY(1)',
                        opacity: isBarDimmed ? 0.15 : 1,
                        transition: isDrag || isResize ? 'none' : 'box-shadow 0.2s, transform 0.15s, opacity 0.18s',
                        overflow: 'visible',
                    }}
                >
                    <div style={{ position: 'absolute', left: 0, top: 0, width: w, height: '100%', borderRadius: BAR_H / 2, overflow: 'hidden', pointerEvents: 'none' }}>
                        <div style={{
                            position: 'absolute', left: 0, top: 0, width: progW, height: '100%',
                            background: isDelayed ? C.today : finalProgressColor,
                            borderRadius: `${BAR_H / 2}px 0 0 ${BAR_H / 2}px`,
                            transition: isDrag || isResize ? 'none' : 'width 0.3s',
                        }} />
                        {w > 50 && (
                            <span style={{
                                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 10, fontWeight: 700, letterSpacing: '0.05em',
                                color: task.progress > 50 ? C.white : isDelayed ? C.today : finalProgressColor, zIndex: 1, pointerEvents: 'none',
                            }}>
                                {Math.round(task.progress)}%
                            </span>
                        )}
                    </div>
                    <div onMouseDown={ev => handleResizeMouseDown(ev, task, 'left')} onTouchStart={ev => handleResizeTouchStart(ev, task, 'left')} style={{ position: 'absolute', left: 0, top: 0, width: 8, height: '100%', cursor: 'col-resize', zIndex: 2, borderRadius: `${BAR_H / 2}px 0 0 ${BAR_H / 2}px` }} />
                    <div onMouseDown={ev => handleResizeMouseDown(ev, task, 'right')} onTouchStart={ev => handleResizeTouchStart(ev, task, 'right')} style={{ position: 'absolute', right: 0, top: 0, width: 8, height: '100%', cursor: 'col-resize', zIndex: 2, borderRadius: `0 ${BAR_H / 2}px ${BAR_H / 2}px 0` }} />
                    {showDots && (
                        <>
                            <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'left')} onTouchStart={ev => handleConnectDotTouchStart(ev, task, 'left')} style={{ position: 'absolute', left: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: `2.5px solid ${C.connectorDotBorder}`, boxShadow: C.shadowLarge, cursor: 'crosshair', zIndex: 30 }} />
                            <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'right')} onTouchStart={ev => handleConnectDotTouchStart(ev, task, 'right')} style={{ position: 'absolute', right: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: `2.5px solid ${C.connectorDotBorder}`, boxShadow: C.shadowLarge, cursor: 'crosshair', zIndex: 30 }} />
                        </>
                    )}
                </div>
                {showOutsideLabel && (
                    <span
                        style={{
                            position: 'absolute',
                            left: x + w + 6,
                            top: barY,
                            height: BAR_H,
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: 11,
                            fontWeight: 600,
                            color: outsideLabelColor,
                            whiteSpace: 'nowrap',
                            pointerEvents: 'none',
                            maxWidth: 120,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            opacity: isBarDimmed ? 0.15 : 1,
                            transition: 'opacity 0.18s',
                        }}
                        title={task.name}
                    >
                        {task.name}
                    </span>
                )}
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
                role="button"
                tabIndex={0}
                aria-label={`Milestone ${task.name}`}
                style={{
                    position: 'absolute', left: x - 6, top: pillY, height: PILL_H, minWidth: PILL_MIN_W,
                    borderRadius: PILL_H / 2, background: isCritical ? C.criticalPillBg : C.milestonePillBg,
                    border: isConnectTarget ? `2px solid ${C.group}` : isCritical ? `2px solid ${C.today}` : `1.5px solid ${C.milestoneRing}`,
                    display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 4, paddingRight: 12,
                    cursor: isDrag ? 'grabbing' : 'grab', zIndex: isHov || isConnectTarget ? 20 : 10,
                    boxShadow: isConnectTarget ? `0 0 0 2px ${C.group}, 0 4px 16px ${C.groupGlowSoft}` : isCritical ? `0 0 0 1px ${C.todayMid}, 0 3px 12px ${C.todaySoft}` : isBarHighlighted && !isHov ? `0 0 0 2px ${C.groupGlowStrong}, 0 3px 14px ${C.groupGlowSoft}` : isHov ? `0 3px 12px ${C.milestoneRingSoft}` : C.shadowSoft,
                    opacity: isBarDimmed ? 0.15 : 1, transition: 'box-shadow 0.2s, transform 0.15s, opacity 0.18s',
                    transform: isHov ? 'translateY(-1px)' : 'none', whiteSpace: 'nowrap', overflow: 'visible',
                }}
            >
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: isCritical ? C.today : C.milestone, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Flag size={11} color={C.white} strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, color: isCritical ? C.today : C.milestone, overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 130 }}>
                    {task.name}
                </span>
                {task.progress >= 100 && (
                    <span style={{ fontSize: 9, fontWeight: 700, color: C.white, background: C.milestoneRing, borderRadius: 6, padding: '1px 5px' }}>✓</span>
                )}
                {showDots && (
                    <>
                        <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'left')} onTouchStart={ev => handleConnectDotTouchStart(ev, task, 'left')} style={{ position: 'absolute', left: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: `2.5px solid ${C.connectorDotBorder}`, boxShadow: C.shadowLarge, cursor: 'crosshair', zIndex: 30 }} />
                        <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'right')} onTouchStart={ev => handleConnectDotTouchStart(ev, task, 'right')} style={{ position: 'absolute', right: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: `2.5px solid ${C.connectorDotBorder}`, boxShadow: C.shadowLarge, cursor: 'crosshair', zIndex: 30 }} />
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
                role="button"
                tabIndex={0}
                aria-label={`Event ${task.name}`}
                style={{
                    position: 'absolute', left: x - 6, top: pillY, height: PILL_H, minWidth: PILL_MIN_W,
                    borderRadius: PILL_H / 2,
                    background: isCritical ? C.criticalPillBg : C.eventPillBg,
                    border: isConnectTarget ? `2px solid ${C.group}` : isCritical ? `2px solid ${C.today}` : `1.5px solid ${C.event}`,
                    display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 4, paddingRight: 12,
                    cursor: isDrag ? 'grabbing' : 'grab', zIndex: isHov || isConnectTarget ? 20 : 10,
                    boxShadow: isConnectTarget ? `0 0 0 2px ${C.group}, 0 4px 16px ${C.groupGlowSoft}` : isCritical ? `0 0 0 1px ${C.todayMid}, 0 3px 12px ${C.todaySoft}` : isBarHighlighted && !isHov ? `0 0 0 2px ${C.groupGlowStrong}, 0 3px 14px ${C.groupGlowSoft}` : isHov ? `0 3px 12px ${C.eventBorderSoft}` : C.shadowSoft,
                    opacity: isBarDimmed ? 0.15 : 1, transition: 'box-shadow 0.2s, transform 0.15s, opacity 0.18s',
                    transform: isHov ? 'translateY(-1px)' : 'none', whiteSpace: 'nowrap', overflow: 'visible',
                }}
            >
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: isCritical ? C.today : C.event, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={11} color={C.white} strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, color: isCritical ? C.today : C.event, overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 130 }}>
                    {task.name}
                </span>
                {task.progress >= 100 && (
                    <span style={{ fontSize: 9, fontWeight: 700, color: C.white, background: C.event, borderRadius: 6, padding: '1px 5px' }}>✓</span>
                )}
                {showDots && (
                    <>
                        <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'left')} onTouchStart={ev => handleConnectDotTouchStart(ev, task, 'left')} style={{ position: 'absolute', left: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: `2.5px solid ${C.connectorDotBorder}`, boxShadow: C.shadowLarge, cursor: 'crosshair', zIndex: 30 }} />
                        <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'right')} onTouchStart={ev => handleConnectDotTouchStart(ev, task, 'right')} style={{ position: 'absolute', right: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: `2.5px solid ${C.connectorDotBorder}`, boxShadow: C.shadowLarge, cursor: 'crosshair', zIndex: 30 }} />
                    </>
                )}
            </div>
        );
    }

    // ── NOTE ("Post-it" style) ──
    if (task.originalType === 'note') {
        const noteW = 148;
        const noteY = y + 4;
        const bgColor = task.noteColor || C.noteDefaultBg;
        const files = task.filesCount || 0;
        return (
            <div
                data-task-id={task.id}
                {...commonEvents}
                role="button"
                tabIndex={0}
                aria-label={`Note ${task.name}`}
                style={{
                    position: 'absolute', left: x, top: noteY,
                    width: noteW, minHeight: 72,
                    background: bgColor,
                    borderRadius: 3,
                    cursor: isDrag ? 'grabbing' : 'grab',
                    zIndex: isHov || isConnectTarget ? 20 : 10,
                    boxShadow: isConnectTarget
                        ? `0 0 0 2px ${C.group}, ${C.shadowStickyStrong}`
                        : isBarHighlighted && !isHov
                            ? `0 0 0 2px ${C.groupGlowStrong}, ${C.shadowStickyHover}`
                            : isHov
                                ? C.shadowStickyHover
                                : C.shadowSticky,
                    opacity: isBarDimmed ? 0.2 : 1,
                    transition: isDrag ? 'none' : 'box-shadow 0.2s, transform 0.15s, opacity 0.18s',
                    transform: isHov ? 'rotate(-1.5deg) scale(1.03) translateY(-2px)' : 'rotate(0deg)',
                    border: `1px solid ${C.groupSoftStrong}`,
                    padding: '12px 10px 10px',
                    display: 'flex', flexDirection: 'column', gap: 2,
                    userSelect: 'none',
                }}
            >
                {/* Tape */}
                <div style={{
                    position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)',
                    width: 40, height: 11, background: C.stickyTape,
                    borderRadius: 2, boxShadow: C.shadowTiny,
                }} />

                {/* Title */}
                <span style={{
                    fontSize: 13, fontWeight: 700,
                    color: C.inkStrong,
                    lineHeight: '1.3', wordBreak: 'break-word',
                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}>
                    {task.name}
                </span>

                {/* Project name */}
                {task.projectTitle && (
                    <span style={{
                        fontSize: 10, fontWeight: 400, color: C.inkSoft3,
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>
                        {task.projectTitle}
                    </span>
                )}

                {/* Date row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 2 }}>
                    <span style={{ fontSize: 9, fontWeight: 500, color: C.inkSoft4 }}>
                        {fmtDateShort(task.start, props.locale)}
                    </span>
                    {files > 0 && (
                        <span style={{
                            display: 'flex', alignItems: 'center', gap: 2,
                            fontSize: 9, color: C.inkSoft4,
                        }}>
                            <Paperclip size={8} /> {files}
                        </span>
                    )}
                </div>

                {showDots && (
                    <>
                        <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'left')} onTouchStart={ev => handleConnectDotTouchStart(ev, task, 'left')} style={{ position: 'absolute', left: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: `2.5px solid ${C.connectorDotBorder}`, boxShadow: C.shadowLarge, cursor: 'crosshair', zIndex: 30 }} />
                        <div data-task-id={task.id} onMouseDown={ev => handleConnectDotMouseDown(ev, task, 'right')} onTouchStart={ev => handleConnectDotTouchStart(ev, task, 'right')} style={{ position: 'absolute', right: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: C.group, border: `2.5px solid ${C.connectorDotBorder}`, boxShadow: C.shadowLarge, cursor: 'crosshair', zIndex: 30 }} />
                    </>
                )}
            </div>
        );
    }
    return null;
}
