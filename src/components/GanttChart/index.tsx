import React from 'react';
import { Flag, Clock, Eye, Edit2, Trash2, Paperclip } from 'lucide-react';
import { useGanttContext } from '../../context/GanttContext';
import { GanttTaskBar } from '../GanttTaskBar';
import { GanttArrows } from '../GanttArrows';
import { C, HEADER_ROW_H, ROW_H, STEP_PALETTE } from '../../utils/constants';
import { fmtDateShort, addDays } from '../../utils/date';
import { dateToX } from '../../utils/timeline';
import type { GanttTask, DependencyType } from '../../types';
import type { InternalTask } from '../../types/internal';

// Helper for task interaction
const toGanttTask = (t: InternalTask): GanttTask => ({
    id: t.id,
    name: t.name,
    start: t.start,
    end: t.end,
    type: t.originalType === 'step' ? 'task' : t.originalType,
    progress: t.progress,
});

const task_icon = (type: string, colorIdx?: number) => {
    switch (type) {
        case 'step': return <div style={{ width: 12, height: 12, borderRadius: 2, background: STEP_PALETTE[colorIdx ?? 0].bar, border: `1.5px solid ${STEP_PALETTE[colorIdx ?? 0].barBorder}`, flexShrink: 0 }} />;
        case 'milestone': return <div style={{ width: 16, height: 16, borderRadius: '50%', background: C.milestone, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Flag size={8} color="#fff" /></div>;
        case 'event': return <div style={{ width: 16, height: 16, borderRadius: '50%', background: C.event, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Clock size={8} color="#fff" /></div>;
        case 'note': return <div style={{ width: 12, height: 14, background: C.note, borderRadius: 2, boxShadow: '1px 1px 2px rgba(0,0,0,0.1)', flexShrink: 0 }} />;
        default: return null;
    }
};

export function GanttChart() {
    const {
        props,
        viewMode,
        timeline,
        displayRows,
        dragState,
        resizeState,
        connectState,
        pendingConnection, setPendingConnection,
        depModalType, setDepModalType,
        depModalLag, setDepModalLag,
        depCreating,
        deletingDepId, setDeletingDepId,
        chartMenu, setChartMenu,
        rightBodyRef, timeHeaderRef,
        handleChartMouseDown, handleChartWheel, openChartMenu,
        hoveredTaskId, setHoveredTaskId,
        selectedTaskId, setSelectedTaskId,
        tooltip, setTooltip,
        popupState, setPopupState,
        criticalIds, delayedIds, relatedIds,
        handleBarMouseDown,
        handleResizeMouseDown,
        handleConnectDotMouseDown,
        handleCreateDependency
    } = useGanttContext();

    const {
        translations,
        onViewStage, onEditStage, onDeleteStage, onDeleteDependency,
        onAddNewStage, onAddMilestone, onAddEvent, onAddNote
    } = props;

    // Minimal translation helper
    const t = (key: string, _def: string) => {
        if (!translations) return _def;
        if (typeof translations === 'function') return translations(key, _def);
        return translations[key] || _def;
    };

    const diffDays = (start: Date, end: Date) => Math.round((end.getTime() - start.getTime()) / 86400000) + 1;

    const contentH = Math.max(displayRows.length * ROW_H, 400);

    const closePopup = () => setPopupState({ isOpen: false, position: { x: 0, y: 0 }, task: null });

    return (
        <div className="flex-1 w-full bg-[#FAFAFA] flex flex-col relative overflow-hidden"
            style={{ borderLeft: `1px solid ${C.borderLight}` }}>

            {/* ── TIME HEADER ── */}
            <div
                ref={timeHeaderRef}
                style={{
                    height: HEADER_ROW_H * 2,
                    background: C.headerBg,
                    borderBottom: `1px solid ${C.borderLight}`,
                    overflow: 'hidden',
                    position: 'relative',
                    flexShrink: 0,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                }}
                onWheel={handleChartWheel}
            >
                <div style={{ width: timeline.totalWidth, height: '100%', position: 'relative' }}>
                    {/* Top row (Months/Years) */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: HEADER_ROW_H, display: 'flex' }}>
                        {viewMode === 'day' && timeline.months.map((m, i) => (
                            <div key={i} style={{ width: m.width, position: 'relative', height: '100%', borderRight: `1px solid ${C.borderLight}`, paddingLeft: 12, display: 'flex', alignItems: 'flex-end', paddingBottom: 6 }}>
                                <span style={{ fontSize: 13, fontWeight: 700, color: C.textTitle, letterSpacing: '0.02em' }}>{m.label}</span>
                            </div>
                        ))}
                        {viewMode === 'month' && timeline.years?.map((y, i) => (
                            <div key={i} style={{ width: y.width, position: 'relative', height: '100%', borderRight: `1px solid ${C.borderLight}`, paddingLeft: 12, display: 'flex', alignItems: 'flex-end', paddingBottom: 6 }}>
                                <span style={{ fontSize: 13, fontWeight: 700, color: C.textTitle, letterSpacing: '0.02em' }}>{y.label}</span>
                            </div>
                        ))}
                    </div>
                    {/* Bottom row (Days/Months) */}
                    <div style={{ position: 'absolute', top: HEADER_ROW_H, left: 0, right: 0, height: HEADER_ROW_H, display: 'flex' }}>
                        {viewMode === 'day' && timeline.days.map((d, i) => {
                            const isTd = d.isToday;
                            return (
                                <div key={i} style={{ width: timeline.dayWidth, position: 'relative', height: '100%', borderRight: `1px solid ${C.borderLight}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontSize: 11, fontWeight: isTd ? 800 : 500, color: isTd ? C.today : C.textSecondary, letterSpacing: '-0.03em' }}>
                                        {d.date.getDate().toString().padStart(2, '0')}
                                    </span>
                                </div>
                            );
                        })}
                        {viewMode === 'month' && timeline.months.map((m, i) => (
                            <div key={i} style={{ width: m.width, position: 'relative', height: '100%', borderRight: `1px solid ${C.borderLight}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: 11, fontWeight: 600, color: C.textPrimary, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    {m.label.substring(0, 3)}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── CHART BODY ── */}
            <div
                ref={rightBodyRef}
                className="flex-1 overflow-auto bg-white gantt-scroll"
                onMouseDown={handleChartMouseDown}
                onWheel={handleChartWheel}
                onContextMenu={openChartMenu}
                style={{ position: 'relative' }}
            >
                <div style={{ width: timeline.totalWidth, height: contentH, position: 'relative' }}>

                    {/* ── BACKGROUND GRID (SVG for performance) ── */}
                    <svg width={timeline.totalWidth} height={contentH} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
                        <defs>
                            <pattern id="gantt-y-lines" x="0" y="0" width={timeline.dayWidth} height={ROW_H} patternUnits="userSpaceOnUse">
                                <line x1={timeline.dayWidth} y1="0" x2={timeline.dayWidth} y2={ROW_H} stroke={C.border} strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                            </pattern>
                            <pattern id="gantt-x-lines" x="0" y="0" width={timeline.dayWidth} height={ROW_H} patternUnits="userSpaceOnUse">
                                <line x1="0" y1={ROW_H} x2={timeline.dayWidth} y2={ROW_H} stroke={C.borderLight} strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#gantt-x-lines)" />
                        <rect width="100%" height="100%" fill="url(#gantt-y-lines)" />

                        {viewMode === 'day' && timeline.days.map((d, i) => (
                            d.isWeekend ? <rect key={`we-${i}`} x={i * timeline.dayWidth} y={0} width={timeline.dayWidth} height={contentH} fill={C.weekendBg} opacity={0.6} /> : null
                        ))}
                        {viewMode === 'month' && timeline.days.map((d, i) => (
                            d.isWeekend ? <rect key={`wem-${i}`} x={i * timeline.dayWidth} y={0} width={timeline.dayWidth} height={contentH} fill={C.weekendBg} opacity={0.3} /> : null
                        ))}

                        {timeline.todayIndex >= 0 && (
                            <g>
                                <rect x={timeline.todayIndex * timeline.dayWidth!} y={0} width={timeline.dayWidth} height={contentH} fill={C.todayBg} />
                                <line x1={(timeline.todayIndex + 0.5) * timeline.dayWidth!} y1={0} x2={(timeline.todayIndex + 0.5) * timeline.dayWidth!} y2={contentH} stroke={C.today} strokeWidth={2} strokeDasharray="4 4" opacity={0.3} />
                            </g>
                        )}
                    </svg>

                    {/* ── ROW BACKGROUNDS FOR VISUAL GROUPING ── */}
                    {displayRows.map((r, i) => {
                        if (r.kind === 'group' || r.kind === 'projectHeader') {
                            return (
                                <div key={`bg-${i}`} style={{
                                    position: 'absolute', left: 0, top: i * ROW_H, width: '100%', height: ROW_H,
                                    background: r.kind === 'projectHeader' ? C.headerBg : `${C.groupLight}15`,
                                    borderBottom: `1px solid ${C.borderLight}`,
                                    pointerEvents: 'none'
                                }} />
                            );
                        }
                        return null;
                    })}

                    {/* ── TASKS ── */}
                    <div style={{ position: 'absolute', inset: 0 }}>
                        {displayRows.map((r, idx) => {
                            if (r.kind !== 'task') return null;
                            const task = r.task;

                            const isDrag = dragState?.task.id === task.id;
                            const isResize = resizeState?.task.id === task.id;

                            const s = isDrag || (isResize && resizeState.edge === 'left') ? addDays(task.start, (isDrag ? dragState!.offsetDays! : resizeState!.offsetDays!)) : task.start;
                            const e = isDrag || (isResize && resizeState.edge === 'right') ? addDays(task.end, (isDrag ? dragState!.offsetDays! : resizeState!.offsetDays!)) : task.end;

                            const isPoint = task.originalType !== 'step';
                            let x = dateToX(s, timeline);
                            let w = 0;
                            let progW = 0;

                            if (!isPoint) {
                                w = Math.max(dateToX(e, timeline) - x, timeline.dayWidth);
                                progW = w * (task.progress / 100);
                            }

                            const isHov = hoveredTaskId === task.id;
                            const isSel = selectedTaskId === task.id;
                            const isDelayed = delayedIds.has(task.id);
                            const isCritical = criticalIds.has(task.id);

                            const isBarDimmed = !!selectedTaskId && !isSel && !relatedIds.has(task.id);
                            const isBarHighlighted = isSel || (!!selectedTaskId && relatedIds.has(task.id));
                            const isConnectTarget = connectState?.hoverTargetId === task.id;
                            const showDots = isHov || isSel;
                            const y = idx * ROW_H;

                            const commonEvents = {
                                onMouseEnter: (ev: React.MouseEvent) => {
                                    setHoveredTaskId(task.id);
                                    if (!dragState && !resizeState) {
                                        setTooltip({ task, x: ev.clientX, y: ev.clientY });
                                    }
                                },
                                onMouseMove: (ev: React.MouseEvent) => {
                                    if (hoveredTaskId === task.id && !dragState && !resizeState) {
                                        setTooltip({ task, x: ev.clientX, y: ev.clientY });
                                    }
                                },
                                onMouseLeave: () => {
                                    setHoveredTaskId(null);
                                    setTooltip(null);
                                },
                                onClick: (ev: React.MouseEvent) => {
                                    ev.stopPropagation();
                                    setSelectedTaskId(task.id);
                                    if (ev.detail === 2) {
                                        onViewStage?.(toGanttTask(task));
                                    }
                                    setPopupState((!popupState.isOpen || popupState.task?.id !== task.id) ? {
                                        isOpen: true,
                                        position: { x: ev.clientX, y: ev.clientY },
                                        task
                                    } : { isOpen: false, position: { x: 0, y: 0 }, task: null });
                                },
                                onMouseDown: (ev: React.MouseEvent) => handleBarMouseDown(ev, task),
                            };

                            return (
                                <GanttTaskBar
                                    key={task.id}
                                    task={task}
                                    x={x} y={y} w={w} progW={progW}
                                    isHov={isHov} isDrag={isDrag} isResize={isResize}
                                    isCritical={isCritical} isDelayed={isDelayed}
                                    isConnectTarget={isConnectTarget}
                                    showDots={showDots}
                                    isBarDimmed={isBarDimmed}
                                    isBarHighlighted={isBarHighlighted}
                                    commonEvents={commonEvents}
                                    handleResizeMouseDown={handleResizeMouseDown}
                                    handleConnectDotMouseDown={handleConnectDotMouseDown}
                                />
                            );
                        })}

                        {/* ── Dependency arrows (SVG) ── */}
                        <svg width={timeline.totalWidth} height={contentH} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                            <GanttArrows />
                        </svg>

                        {/* ── Hover Tooltip ── */}
                        {tooltip && !dragState && (
                            <div style={{ position: 'fixed', left: tooltip.x + 16, top: tooltip.y - 10, zIndex: 9999, pointerEvents: 'none' }}>
                                <div
                                    className="rounded-xl px-4 py-3 min-w-[220px] max-w-[340px] backdrop-blur-sm"
                                    style={{ background: `${C.surface}f5`, border: `1px solid ${C.borderLight}`, boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)' }}
                                >
                                    <div className="flex items-center gap-2 mb-1.5">
                                        {task_icon(tooltip.task.originalType, tooltip.task.colorIdx)}
                                        <span className="text-xs font-bold truncate" style={{ color: C.textTitle }}>
                                            {tooltip.task.name}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-1 text-[11px]" style={{ color: C.textSecondary }}>
                                        {tooltip.task.originalType === 'step' ? (
                                            <>
                                                {/* Planned / Prevision row */}
                                                {tooltip.task.previsionStart && tooltip.task.previsionEnd && (
                                                    <div style={{ background: `${C.headerBg}`, borderRadius: 6, padding: '4px 6px', marginBottom: 2 }}>
                                                        <div className="flex items-center gap-1 mb-1">
                                                            <div style={{ width: 20, height: 4, borderRadius: 2, background: `${C.textSecondary}44`, border: `1.5px solid ${C.textSecondary}66` }} />
                                                            <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: C.textSecondary }}>Previsto</span>
                                                        </div>
                                                        <div className="flex justify-between gap-4">
                                                            <span>Início:</span>
                                                            <span className="font-semibold tabular-nums" style={{ color: C.textPrimary }}>{fmtDateShort(tooltip.task.previsionStart)}</span>
                                                        </div>
                                                        <div className="flex justify-between gap-4">
                                                            <span>Fim:</span>
                                                            <span className="font-semibold tabular-nums" style={{ color: C.textPrimary }}>{fmtDateShort(tooltip.task.previsionEnd)}</span>
                                                        </div>
                                                        <div className="flex justify-between gap-4">
                                                            <span>Duração:</span>
                                                            <span className="font-semibold tabular-nums" style={{ color: C.textPrimary }}>{diffDays(tooltip.task.previsionStart, tooltip.task.previsionEnd)}d</span>
                                                        </div>
                                                    </div>
                                                )}
                                                {/* Actual / Real row */}
                                                <div style={{ background: tooltip.task.hasActualDates ? `${C.groupLight}22` : 'transparent', borderRadius: 6, padding: '4px 6px' }}>
                                                    <div className="flex items-center gap-1 mb-1">
                                                        <div style={{ width: 20, height: 4, borderRadius: 2, background: STEP_PALETTE[tooltip.task.colorIdx ?? 0].progress }} />
                                                        <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: tooltip.task.hasActualDates ? C.group : C.textSecondary }}>
                                                            {tooltip.task.hasActualDates ? 'Real' : 'Previsto (em uso)'}
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between gap-4">
                                                        <span>Início:</span>
                                                        <span className="font-semibold tabular-nums" style={{ color: C.textPrimary }}>{fmtDateShort(tooltip.task.start)}</span>
                                                    </div>
                                                    <div className="flex justify-between gap-4">
                                                        <span>Fim:</span>
                                                        <span className="font-semibold tabular-nums" style={{ color: C.textPrimary }}>{fmtDateShort(tooltip.task.end)}</span>
                                                    </div>
                                                    <div className="flex justify-between gap-4">
                                                        <span>Duração:</span>
                                                        <span className="font-semibold tabular-nums" style={{ color: C.textPrimary }}>{diffDays(tooltip.task.start, tooltip.task.end)}d</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between gap-4 pt-1 mt-1" style={{ borderTop: `1px solid ${C.borderLight}` }}>
                                                    <span>{t('charts.gantt.progress', 'Progresso')}:</span>
                                                    <span className="font-bold" style={{ color: C.group }}>{Math.round(tooltip.task.progress)}%</span>
                                                </div>
                                            </>
                                        ) : tooltip.task.originalType === 'note' ? (
                                            <>
                                                {tooltip.task.noteProjectTitle && (
                                                    <div className="flex items-center gap-1.5 mb-1">
                                                        <div style={{ width: 8, height: 8, borderRadius: 2, background: tooltip.task.noteColor || C.note, flexShrink: 0 }} />
                                                        <span className="text-[11px] font-semibold truncate" style={{ color: C.textPrimary }}>
                                                            {tooltip.task.noteProjectTitle}
                                                        </span>
                                                    </div>
                                                )}
                                                <div className="flex justify-between gap-4">
                                                    <span>Data:</span>
                                                    <span className="font-semibold tabular-nums" style={{ color: C.textPrimary }}>{fmtDateShort(tooltip.task.start)}</span>
                                                </div>
                                                {(tooltip.task.filesCount || 0) > 0 && (
                                                    <div className="flex justify-between gap-4">
                                                        <span>Anexos:</span>
                                                        <span className="font-semibold flex items-center gap-1" style={{ color: C.textPrimary }}>
                                                            <Paperclip size={10} />
                                                            {tooltip.task.filesCount}
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <div className="flex justify-between gap-4">
                                                <span>{t('charts.gantt.start', 'Início')}:</span>
                                                <span className="font-semibold tabular-nums" style={{ color: C.textPrimary }}>{fmtDateShort(tooltip.task.start)}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ── TASK ACTION POPUP ── */}
            {popupState.task && popupState.isOpen && (() => {
                const t2 = popupState.task!;
                const taskDeps = (props.dependencies || []).filter(d => d.predecessorId === t2.id || d.successorId === t2.id);
                const depTypeLabel: Record<string, string> = { FS: 'Início após Fim', SS: 'Inícios simultâneos', FF: 'Fins simultâneos', SF: 'Fim após Início' };
                const PW = taskDeps.length > 0 ? 300 : 220;
                const left = Math.min(popupState.position.x, window.innerWidth - PW - 16);
                const top = popupState.position.y + 8;

                return (
                    <div
                        data-popup="gantt-action"
                        style={{ position: 'fixed', left, top, zIndex: 9999, background: '#fff', borderRadius: 4, boxShadow: '0 12px 40px rgba(0,0,0,0.14), 0 3px 10px rgba(0,0,0,0.07)', border: `1.5px solid ${C.borderLight}`, width: PW, overflow: 'hidden' }}
                        onMouseDown={e => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div style={{ padding: '12px 14px 10px', borderBottom: `1px solid ${C.borderLight}` }}>
                            <p style={{ fontSize: 13, fontWeight: 700, color: C.group, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={t2.name}>{t2.name}</p>
                        </div>
                        {/* Actions */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '8px 6px' }}>
                            <button onClick={() => { onViewStage?.(toGanttTask(t2)); closePopup(); }} className="gantt-popup-btn">
                                <Eye size={15} /> <span>{t('projects.stepAction.viewDetails', 'Ver detalhes')}</span>
                            </button>
                            <button onClick={() => { onEditStage?.(toGanttTask(t2)); closePopup(); }} className="gantt-popup-btn">
                                <Edit2 size={15} /> <span>{t('projects.stepAction.edit', 'Editar')}</span>
                            </button>
                            <button onClick={() => { onDeleteStage?.(t2.id); closePopup(); }} className="gantt-popup-btn text-red-500 hover:bg-red-50">
                                <Trash2 size={15} /> <span>{t('projects.stepAction.delete', 'Excluir')}</span>
                            </button>
                        </div>

                        {/* Relation block */}

                        {taskDeps.length > 0 && (
                            <div style={{ borderTop: `1px solid ${C.borderLight}`, padding: '10px 14px 12px' }}>
                                <div style={{ fontSize: 10, fontWeight: 700, color: C.textSecondary, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Relações ({taskDeps.length})</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                                    {taskDeps.map(dep => {
                                        const isPred = dep.predecessorId === t2.id;
                                        const otherName = isPred ? dep.successorName : dep.predecessorName;
                                        const isDeleting = deletingDepId === dep.id;
                                        return (
                                            <div key={dep.id} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px', borderRadius: 8, background: '#f8fafb', border: `1px solid ${C.borderLight}` }}>
                                                <div style={{ flex: 1, minWidth: 0 }}>
                                                    <div style={{ fontSize: 10, fontWeight: 700, color: C.group, marginBottom: 2 }}>
                                                        <span style={{ background: `${C.group}15`, borderRadius: 4, padding: '1px 5px' }}>{dep.type}</span> <span style={{ color: C.textSecondary, fontWeight: 500 }}>{isPred ? '→ ' : '← '}</span>
                                                        <span style={{ color: C.textMuted, fontWeight: 400, fontSize: 9 }}>{depTypeLabel[dep.type] ?? dep.type}</span>
                                                    </div>
                                                    <div style={{ fontSize: 11, color: C.textPrimary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={otherName}>{otherName}</div>
                                                </div>
                                                {onDeleteDependency && (
                                                    <button
                                                        disabled={!!isDeleting}
                                                        onClick={async () => {
                                                            setDeletingDepId(dep.id);
                                                            try { await onDeleteDependency(dep.id); } finally { setDeletingDepId(null); }
                                                        }}
                                                        style={{ flexShrink: 0, padding: '4px 6px', borderRadius: 6, border: 'none', background: isDeleting ? '#fee2e2' : 'transparent', cursor: isDeleting ? 'wait' : 'pointer', color: '#ef4444', fontSize: 14, opacity: isDeleting ? 0.5 : 1, transition: 'background 0.12s' }}
                                                    >
                                                        {isDeleting ? '⟳' : '🗑'}
                                                    </button>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                    </div>
                );
            })()}

            {/* ── CHART CREATE MENU ── */}
            {chartMenu && (
                <div
                    data-menu="chart-create"
                    style={{
                        position: 'fixed', left: Math.min(chartMenu.x, window.innerWidth - 220), top: Math.min(chartMenu.y, window.innerHeight - 220),
                        zIndex: 99999, background: '#fff', borderRadius: 10, boxShadow: '0 12px 40px rgba(0,0,0,0.15), 0 3px 10px rgba(0,0,0,0.08)',
                        border: `1.5px solid ${C.borderLight}`, width: 200, overflow: 'hidden',
                    }}
                    onClick={e => e.stopPropagation()}
                >
                    <div style={{ padding: '9px 13px 8px', borderBottom: `1px solid ${C.borderLight}`, background: C.headerBg }}>
                        <p style={{ margin: 0, fontSize: 10, fontWeight: 700, color: C.textSecondary, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Adicionar em {fmtDateShort(chartMenu.date)}</p>
                    </div>
                    <div style={{ padding: '5px 5px' }}>
                        {([
                            { label: 'Etapa', icon: task_icon('step', 0), action: () => { onAddNewStage?.(chartMenu!.date, chartMenu!.projectId); setChartMenu(null); } },
                            { label: 'Marco', icon: task_icon('milestone'), action: () => { onAddMilestone?.(chartMenu.date, chartMenu.projectId); setChartMenu(null); } },
                            { label: 'Evento', icon: task_icon('event'), action: () => { onAddEvent?.(chartMenu.date, chartMenu.projectId); setChartMenu(null); } },
                            { label: 'Nota', icon: task_icon('note'), action: () => { onAddNote?.(chartMenu.date, chartMenu.projectId); setChartMenu(null); } },
                        ] as const).map(opt => (
                            <button
                                key={opt.label} onClick={opt.action}
                                className="gantt-popup-btn"
                                style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '8px 10px', borderRadius: 7, border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 13, fontWeight: 500, color: C.textPrimary, textAlign: 'left', transition: 'background 0.12s' }}
                            >
                                {opt.icon} {opt.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* ── CONNECTION DRAG OVERLAY ── */}
            {connectState && (
                <svg style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 99999 }}>
                    <defs>
                        <marker id="connect-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L6,3 z" fill={C.group} />
                        </marker>
                    </defs>
                    <line x1={connectState.fromScreenX} y1={connectState.fromScreenY} x2={connectState.currentScreenX} y2={connectState.currentScreenY} stroke={C.group} strokeWidth={2.5} strokeDasharray="8 5" markerEnd="url(#connect-arrow)" opacity={0.85} style={{ animation: 'gantt-dash 0.5s linear infinite' }} />
                    <style>{`@keyframes gantt-dash { to { stroke-dashoffset: -13; } }`}</style>
                </svg>
            )}

            {/* ── DEPENDENCY MODAL ── */}
            {pendingConnection && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99998 }} onClick={() => setPendingConnection(null)}>
                    <div style={{ background: '#fff', borderRadius: 20, padding: '32px 36px', width: 420, boxShadow: '0 24px 80px rgba(0,0,0,0.18), 0 6px 24px rgba(0,0,0,0.08)' }} onClick={e => e.stopPropagation()}>
                        <div style={{ marginBottom: 20 }}>
                            <h3 style={{ fontSize: 18, fontWeight: 700, color: C.textTitle, marginBottom: 4 }}>Tipo de Relação</h3>
                            <p style={{ fontSize: 13, color: C.textSecondary }}>Escolha como as duas tarefas se relacionam</p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
                            {[
                                { type: 'FS', label: 'Início após Fim', desc: 'B começa quando A termina' },
                                { type: 'SS', label: 'Inícios simultâneos', desc: 'A e B começam juntos' },
                                { type: 'FF', label: 'Fins simultâneos', desc: 'A e B terminam juntos' },
                                { type: 'SF', label: 'Fim após Início', desc: 'B termina quando A começa' },
                            ].map((opt) => (
                                <button key={opt.type} onClick={() => setDepModalType(opt.type as DependencyType)} style={{ border: depModalType === opt.type ? `2px solid ${C.group}` : `1.5px solid ${C.borderLight}`, borderRadius: 12, padding: '12px 14px', textAlign: 'left', cursor: 'pointer', background: depModalType === opt.type ? `${C.group}0d` : '#fafafa' }}>
                                    <div style={{ fontSize: 11, fontFamily: 'monospace', fontWeight: 700, color: C.group, marginBottom: 4, background: depModalType === opt.type ? `${C.group}20` : `${C.group}0d`, borderRadius: 6, padding: '2px 6px', display: 'inline-block' }}>{opt.type}</div>
                                    <div style={{ fontSize: 13, fontWeight: 600, color: C.textTitle, marginBottom: 2 }}>{opt.label}</div>
                                    <div style={{ fontSize: 11, color: C.textSecondary }}>{opt.desc}</div>
                                </button>
                            ))}
                        </div>
                        <div style={{ marginBottom: 24 }}>
                            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: C.textTitle, marginBottom: 6 }}>Atraso (Lag) em dias</label>
                            <input type="number" value={depModalLag} onChange={e => setDepModalLag(parseInt(e.target.value) || 0)} style={{ width: '100%', padding: '10px 12px', border: `1.5px solid ${C.borderLight}`, borderRadius: 8, fontSize: 14 }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                            <button onClick={() => setPendingConnection(null)} style={{ padding: '10px 16px', borderRadius: 8, border: `1px solid ${C.borderLight}`, background: '#fff', cursor: 'pointer', fontWeight: 600 }}>Cancelar</button>
                            <button onClick={handleCreateDependency} disabled={depCreating} style={{ padding: '10px 16px', borderRadius: 8, border: 'none', background: C.group, color: '#fff', cursor: depCreating ? 'wait' : 'pointer', fontWeight: 600 }}>{depCreating ? 'Salvando...' : 'Criar Dependência'}</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
