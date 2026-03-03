
import { ChevronDown, ChevronRight, Clock, Flag, AlertTriangle, Paperclip } from 'lucide-react';
import { useGanttContext } from '../../context/GanttContext';
import { C, HEADER_H, LEFT_W, ROW_H, STEP_PALETTE } from '../../utils/constants';
import { fmtDateShort } from '../../utils/date';
import type { InternalTask } from '../../types/internal';
import type { GanttTask } from '../../types';

export function GanttGrid() {
    const {
        props,
        t,
        displayRows,
        leftBodyRef,
        handleLeftScroll,
        toggleProject,
        toggleGroup,
        hoveredTaskId,
        setHoveredTaskId,
        selectedTaskId,
        setSelectedTaskId,
        delayedIds,
        criticalIds,
        relatedIds,
    } = useGanttContext();

    const maxBodyH = 540;

    const toGanttTask = (task: InternalTask): GanttTask => ({
        id: task.id, name: task.name, start: task.start, end: task.end,
        type: task.originalType === 'step' ? 'task' : 'milestone',
        progress: task.progress,
    });

    return (
        <div style={{ width: LEFT_W, flexShrink: 0, borderRight: `1px solid ${C.border}` }}>
            {/* Table header */}
            <div
                className="flex items-center px-4"
                style={{ height: HEADER_H, background: C.headerBg, borderBottom: `1px solid ${C.border}` }}
            >
                <div className="flex-1 text-[11px] font-bold uppercase tracking-wider" style={{ color: C.textSecondary }}>
                    {t('charts.gantt.stepName', 'NOME DA ETAPA')}
                </div>
                <div className="w-[80px] text-[11px] font-bold uppercase tracking-wider text-center" style={{ color: C.textSecondary }}>
                    {t('charts.gantt.start', 'INÍCIO')}
                </div>
                <div className="w-[80px] text-[11px] font-bold uppercase tracking-wider text-center" style={{ color: C.textSecondary }}>
                    {t('charts.gantt.end', 'FIM')}
                </div>
            </div>

            {/* Rows */}
            <div
                ref={leftBodyRef}
                onScroll={handleLeftScroll}
                className="overflow-y-auto overflow-x-hidden"
                style={{ maxHeight: maxBodyH, scrollbarWidth: 'none' }}
            >
                {displayRows.map((row) => {
                    // Project header row
                    if (row.kind === 'projectHeader') {
                        return (
                            <div
                                key={`ph-${row.projectId}`}
                                className="flex items-center px-4 cursor-pointer select-none"
                                style={{ height: ROW_H, borderBottom: `1.5px solid ${C.group}44`, background: `${C.group}0E` }}
                                onClick={() => toggleProject(row.projectId)}
                            >
                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                    {row.collapsed
                                        ? <ChevronRight size={15} style={{ color: C.group, flexShrink: 0 }} />
                                        : <ChevronDown size={15} style={{ color: C.group, flexShrink: 0 }} />}
                                    <span className="text-[12px] font-bold uppercase tracking-widest truncate" style={{ color: C.group }}>
                                        {row.projectTitle}
                                    </span>
                                </div>
                            </div>
                        );
                    }
                    if (row.kind === 'group') {
                        const groupKey = row.projectId ? `${row.projectId}-${row.groupType}` : row.groupType;
                        return (
                            <div
                                key={`g-${groupKey}`}
                                className="flex items-center px-4 cursor-pointer select-none"
                                style={{ height: ROW_H, borderBottom: `1px solid ${C.border}`, background: C.headerBg }}
                                onClick={() => toggleGroup(groupKey)}
                            >
                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                    {row.collapsed
                                        ? <ChevronRight size={14} style={{ color: C.textSecondary, flexShrink: 0 }} />
                                        : <ChevronDown size={14} style={{ color: C.textSecondary, flexShrink: 0 }} />}
                                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: C.textTitle }}>
                                        {row.label}
                                    </span>
                                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(0,0,0,0.06)', color: C.textSecondary }}>
                                        {row.count}
                                    </span>
                                </div>
                            </div>
                        );
                    }

                    const task = row.task;
                    const isSel = selectedTaskId === task.id;
                    const isHov = hoveredTaskId === task.id;
                    const isPoint = task.originalType !== 'step';
                    const isDelayed = delayedIds.has(task.id);
                    const isCritical = criticalIds.has(task.id);
                    const isLeftDimmed = selectedTaskId !== null && task.id !== selectedTaskId && !relatedIds.has(task.id);
                    const isLeftRelated = selectedTaskId !== null && relatedIds.has(task.id);
                    const rowBg = isDelayed ? '#FFF5F5' : isSel ? C.groupLight : isLeftRelated ? `${C.groupLight}99` : isHov ? C.pageBg : C.surface;

                    return (
                        <div
                            key={task.id}
                            className="flex items-center px-4 cursor-pointer transition-colors duration-150"
                            style={{
                                height: ROW_H,
                                borderBottom: `1px solid ${C.borderLight}`,
                                background: rowBg,
                                borderLeft: isSel ? `3px solid ${C.group}` : isLeftRelated ? `3px solid ${C.group}66` : isCritical ? `3px solid ${C.today}` : undefined,
                                opacity: isLeftDimmed ? 0.3 : 1,
                                transition: 'opacity 0.18s, background 0.15s',
                            }}
                            onClick={() => setSelectedTaskId(p => p === task.id ? null : task.id)}
                            onDoubleClick={() => props.onTaskClick?.(toGanttTask(task))}
                            onMouseEnter={() => setHoveredTaskId(task.id)}
                            onMouseLeave={() => setHoveredTaskId(null)}
                        >
                            <div className="flex-1 flex items-center gap-2 min-w-0 pr-2">
                                {task.originalType === 'step' && (
                                    <div className="flex-shrink-0 rounded" style={{ width: 14, height: 14, background: STEP_PALETTE[task.colorIdx ?? 0].bar, border: `1.5px solid ${STEP_PALETTE[task.colorIdx ?? 0].barBorder}` }} />
                                )}
                                {task.originalType === 'milestone' && (
                                    <div className="flex-shrink-0 flex items-center justify-center rounded-full" style={{ width: 22, height: 22, background: `${C.milestoneRing}30`, border: `1.5px solid ${C.milestoneRing}` }}>
                                        <Flag size={11} style={{ color: C.milestone }} />
                                    </div>
                                )}
                                {task.originalType === 'event' && (
                                    <div className="flex-shrink-0 flex items-center justify-center rounded-full" style={{ width: 22, height: 22, background: `${C.event}18`, border: `1.5px solid ${C.event}55` }}>
                                        <Clock size={11} style={{ color: C.event }} />
                                    </div>
                                )}
                                {task.originalType === 'note' && (
                                    <div className="flex-shrink-0" style={{ width: 16, height: 20, background: task.noteColor || C.note, borderRadius: 2, boxShadow: '1px 1px 3px rgba(0,0,0,0.14)', position: 'relative', overflow: 'visible' }}>
                                        <div style={{ position: 'absolute', top: -2, left: '50%', transform: 'translateX(-50%)', width: 10, height: 4, background: 'rgba(255,255,255,0.55)', borderRadius: 1 }} />
                                    </div>
                                )}

                                <div className="flex-1 flex flex-col min-w-0">
                                    <span
                                        className="text-[13px] truncate font-medium leading-tight"
                                        style={{ color: isSel ? C.group : isDelayed ? C.today : C.textPrimary }}
                                    >
                                        {task.name}
                                    </span>
                                    {task.originalType === 'note' && task.noteProjectTitle && (
                                        <span className="text-[10px] truncate" style={{ color: C.textSecondary, marginTop: 1 }}>
                                            {task.noteProjectTitle}
                                        </span>
                                    )}
                                </div>

                                {task.originalType === 'note' && (task.filesCount || 0) > 0 && (
                                    <span className="flex-shrink-0 flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full" style={{ color: C.textSecondary, background: C.headerBg, border: `1px solid ${C.borderLight}` }}>
                                        <Paperclip size={9} />
                                        {task.filesCount}
                                    </span>
                                )}

                                {isDelayed && (
                                    <AlertTriangle size={12} className="flex-shrink-0" style={{ color: C.today }} />
                                )}
                            </div>

                            <div className="w-[80px] text-[11px] font-medium text-center tabular-nums" style={{ color: isDelayed ? C.today : C.textMuted }}>
                                {fmtDateShort(task.start)}
                            </div>
                            <div className="w-[80px] text-[11px] font-medium text-center tabular-nums" style={{ color: isDelayed ? C.today : C.textMuted }}>
                                {isPoint ? '—' : fmtDateShort(task.end)}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
