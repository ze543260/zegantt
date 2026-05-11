import type React from 'react';
import { Flag, Clock, Paperclip, Calendar, Info } from 'lucide-react';
import { C, STEP_PALETTE } from '../../utils/constants';
import { fmtDateShort } from '../../utils/date';
import type { InternalTask } from '../../types/internal';
import { useGanttContext } from '../../context/GanttContext';

interface GanttTooltipProps {
    task: InternalTask;
    x: number;
    y: number;
}

const diffDays = (start: Date, end: Date) => Math.round((end.getTime() - start.getTime()) / 86400000) + 1;

export function GanttTooltip({ task, x, y }: GanttTooltipProps) {
    const { props, t } = useGanttContext();

    const taskIcon = () => {
        switch (task.originalType) {
            case 'step':
                return (
                    <div style={{
                        width: 14, height: 14, borderRadius: 3,
                        background: STEP_PALETTE[task.colorIdx ?? 0].bar,
                        border: `1.5px solid ${STEP_PALETTE[task.colorIdx ?? 0].barBorder}`,
                        flexShrink: 0
                    }} />
                );
            case 'milestone':
                return (
                    <div style={{
                        width: 18, height: 18, borderRadius: '50%',
                        background: C.milestone, display: 'flex',
                        alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                        <Flag size={10} color={C.white} strokeWidth={2.5} />
                    </div>
                );
            case 'event':
                return (
                    <div style={{
                        width: 18, height: 18, borderRadius: '50%',
                        background: C.event, display: 'flex',
                        alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                        <Clock size={10} color={C.white} strokeWidth={2.5} />
                    </div>
                );
            case 'note':
                return (
                    <div style={{
                        width: 14, height: 16, background: task.noteColor || C.note,
                        borderRadius: 2, boxShadow: C.shadowTiny, flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <div style={{ width: 8, height: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }} />
                    </div>
                );
            default: return <Info size={14} />;
        }
    };

    const typeLabel = () => {
        switch (task.originalType) {
            case 'step': return t('gantt.newAction.step', 'Step');
            case 'milestone': return t('gantt.newAction.milestone', 'Milestone');
            case 'event': return t('gantt.newAction.event', 'Event');
            case 'note': return t('gantt.newAction.note', 'Note');
            default: return '';
        }
    };

    return (
        <div style={{
            position: 'fixed',
            left: x + 20,
            top: y - 10,
            zIndex: 99999,
            pointerEvents: 'none',
            transform: 'translate3d(0,0,0)',
        }}>
            <div
                style={{
                    borderRadius: 12,
                    background: 'var(--zg-surface-frost)',
                    backdropFilter: 'blur(12px)',
                    border: `1px solid var(--zg-border-light)`,
                    boxShadow: 'var(--zg-shadow-large)',
                    minWidth: 260,
                    maxWidth: 360,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/* Header */}
                <div style={{
                    padding: '12px 16px',
                    borderBottom: `1px solid var(--zg-border-light)`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: 'rgba(255,255,255,0.4)',
                }}>
                    {taskIcon()}
                    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
                        <span style={{
                            fontSize: 10,
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: C.textMuted,
                            lineHeight: 1
                        }}>
                            {typeLabel()}
                        </span>
                        <h4 style={{
                            margin: '4px 0 0 0',
                            fontSize: 14,
                            fontWeight: 700,
                            color: C.textTitle,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            lineHeight: 1.2
                        }}>
                            {task.name}
                        </h4>
                    </div>
                </div>

                {/* Body */}
                <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    
                    {/* Project context */}
                    {task.projectTitle && (
                        <div style={{ 
                            display: 'flex', alignItems: 'center', gap: 6, 
                            padding: '6px 8px', borderRadius: 8, background: C.pageBg,
                            border: `1px solid ${C.borderLight}`
                        }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.group }} />
                            <span style={{ fontSize: 11, fontWeight: 600, color: C.textPrimary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {task.projectTitle}
                            </span>
                        </div>
                    )}

                    {task.originalType === 'step' ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {/* Planned Baseline */}
                            {task.previsionStart && task.previsionEnd && (
                                <div style={{ background: C.headerBg, borderRadius: 8, padding: '8px 10px', border: `1px solid ${C.borderLight}` }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                                        <Calendar size={12} style={{ color: C.textSecondary }} />
                                        <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: C.textSecondary }}>
                                            {t('gantt.tooltip.planned', 'Planned')}
                                        </span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
                                        <span style={{ color: C.textSecondary }}>{fmtDateShort(task.previsionStart, props.locale)} → {fmtDateShort(task.previsionEnd, props.locale)}</span>
                                        <span style={{ fontWeight: 700, color: C.textPrimary }}>{diffDays(task.previsionStart, task.previsionEnd)}d</span>
                                    </div>
                                </div>
                            )}

                            {/* Actual Dates */}
                            <div style={{ 
                                background: task.hasActualDates ? 'color-mix(in srgb, var(--zg-group-light), transparent 90%)' : 'transparent', 
                                borderRadius: 8, 
                                padding: task.hasActualDates ? '8px 10px' : '0',
                                border: task.hasActualDates ? `1px solid color-mix(in srgb, var(--zg-group-light), transparent 70%)` : 'none'
                            }}>
                                {!task.hasActualDates && (
                                    <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: C.textMuted, marginBottom: 4 }}>
                                        {t('gantt.tooltip.plannedInUse', 'Planned (in use)')}
                                    </div>
                                )}
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                                    <span style={{ fontWeight: 600, color: C.textPrimary }}>{fmtDateShort(task.start, props.locale)} → {fmtDateShort(task.end, props.locale)}</span>
                                    <span style={{ fontWeight: 700, color: C.group }}>{diffDays(task.start, task.end)}d</span>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div style={{ marginTop: 4 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                                    <span style={{ fontSize: 11, fontWeight: 600, color: C.textSecondary }}>{t('charts.gantt.progress', 'Progress')}</span>
                                    <span style={{ fontSize: 12, fontWeight: 800, color: C.group }}>{Math.round(task.progress)}%</span>
                                </div>
                                <div style={{ width: '100%', height: 6, background: C.borderLight, borderRadius: 3, overflow: 'hidden' }}>
                                    <div style={{ 
                                        width: `${task.progress}%`, 
                                        height: '100%', 
                                        background: STEP_PALETTE[task.colorIdx ?? 0].progress,
                                        borderRadius: 3
                                    }} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                    <Calendar size={14} style={{ color: C.textMuted }} />
                                    <span style={{ fontSize: 12, fontWeight: 600, color: C.textPrimary }}>
                                        {fmtDateShort(task.start, props.locale)}
                                    </span>
                                </div>
                                {task.originalType === 'note' && (task.filesCount || 0) > 0 && (
                                    <div style={{ 
                                        display: 'flex', alignItems: 'center', gap: 4, 
                                        padding: '2px 8px', background: C.headerBg, 
                                        borderRadius: 6, fontSize: 10, fontWeight: 700, color: C.textSecondary 
                                    }}>
                                        <Paperclip size={10} />
                                        {task.filesCount} {t('gantt.tooltip.attachments', 'Attachments')}
                                    </div>
                                )}
                            </div>
                            
                            {task.attachedNotes && task.attachedNotes.length > 0 && (
                                <div style={{ 
                                    marginTop: 4, padding: '8px 10px', background: C.noteBadgeBg, 
                                    borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8,
                                    border: `1px solid color-mix(in srgb, ${C.noteBadgeBg}, black 10%)`
                                }}>
                                    <Paperclip size={12} style={{ color: C.noteBadgeText }} />
                                    <span style={{ fontSize: 11, fontWeight: 700, color: C.noteBadgeText }}>
                                        {task.attachedNotes.length} {t('gantt.filter.notes', 'Notes')}
                                    </span>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer hint */}
                <div style={{ 
                    padding: '8px 16px', background: 'rgba(0,0,0,0.02)', 
                    borderTop: `1px solid ${C.borderLight}`,
                    fontSize: 9, fontWeight: 600, color: C.textMuted,
                    textAlign: 'center', letterSpacing: '0.02em'
                }}>
                    {t('gantt.tooltip.hint', 'CLICK TO SEE DETAILS')}
                </div>
            </div>
        </div>
    );
}
