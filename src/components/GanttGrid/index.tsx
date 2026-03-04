
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

    const toGanttTask = (task: InternalTask): GanttTask => ({
        id: task.id, name: task.name, start: task.start, end: task.end,
        type: task.originalType === 'step' ? 'task' : 'milestone',
        progress: task.progress,
    });

    return (
        <div style={{ width: LEFT_W, flexShrink: 0, borderRight: `1px solid ${C.border}` }}>
            {/* Table header */}
            <div
                style={{
                    display: 'flex', alignItems: 'center', padding: '0 16px',
                    height: HEADER_H, background: C.headerBg, borderBottom: `1px solid ${C.border}`,
                }}
            >
                <div style={{ flex: 1, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: C.textSecondary }}>
                    {t('charts.gantt.stepName', 'STEP NAME')}
                </div>
                <div style={{ width: 80, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center', color: C.textSecondary }}>
                    {t('charts.gantt.start', 'START')}
                </div>
                <div style={{ width: 80, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center', color: C.textSecondary }}>
                    {t('charts.gantt.end', 'END')}
                </div>
            </div>

            {/* Rows */}
            <div
                ref={leftBodyRef}
                onScroll={handleLeftScroll}
                className="zg-no-scrollbar"
                style={{ overflowY: 'auto', overflowX: 'hidden', flex: 1 }}
            >
                {displayRows.map((row) => {
                    // Project header row
                    if (row.kind === 'projectHeader') {
                        return (
                            <div
                                key={`ph-${row.projectId}`}
                                style={{
                                    display: 'flex', alignItems: 'center', padding: '0 16px',
                                    cursor: 'pointer', userSelect: 'none',
                                    height: ROW_H, borderBottom: `1.5px solid ${C.group}44`, background: `${C.group}0E`,
                                }}
                                onClick={() => toggleProject(row.projectId)}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 0 }}>
                                    {row.collapsed
                                        ? <ChevronRight size={15} style={{ color: C.group, flexShrink: 0 }} />
                                        : <ChevronDown size={15} style={{ color: C.group, flexShrink: 0 }} />}
                                    <span style={{
                                        fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                                        color: C.group, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                                    }}>
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
                                style={{
                                    display: 'flex', alignItems: 'center', padding: '0 16px',
                                    cursor: 'pointer', userSelect: 'none',
                                    height: ROW_H, borderBottom: `1px solid ${C.border}`, background: C.headerBg,
                                }}
                                onClick={() => toggleGroup(groupKey)}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 0 }}>
                                    {row.collapsed
                                        ? <ChevronRight size={14} style={{ color: C.textSecondary, flexShrink: 0 }} />
                                        : <ChevronDown size={14} style={{ color: C.textSecondary, flexShrink: 0 }} />}
                                    <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: C.textTitle }}>
                                        {t(`gantt.group.${row.groupType}`, row.label)}
                                    </span>
                                    <span style={{ fontSize: 10, fontWeight: 600, padding: '2px 6px', borderRadius: 9999, background: 'rgba(0,0,0,0.06)', color: C.textSecondary }}>
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
                            style={{
                                display: 'flex', alignItems: 'center', padding: '0 16px',
                                cursor: 'pointer', transition: 'opacity 0.18s, background 0.15s',
                                height: ROW_H,
                                borderBottom: `1px solid ${C.borderLight}`,
                                background: rowBg,
                                borderLeft: isSel ? `3px solid ${C.group}` : isLeftRelated ? `3px solid ${C.group}66` : isCritical ? `3px solid ${C.today}` : undefined,
                                opacity: isLeftDimmed ? 0.3 : 1,
                            }}
                            onClick={() => setSelectedTaskId(p => p === task.id ? null : task.id)}
                            onDoubleClick={() => props.onTaskClick?.(toGanttTask(task))}
                            onMouseEnter={() => setHoveredTaskId(task.id)}
                            onMouseLeave={() => setHoveredTaskId(null)}
                        >
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, minWidth: 0, paddingRight: 8 }}>
                                {task.originalType === 'step' && (
                                    <div style={{ flexShrink: 0, borderRadius: 4, width: 14, height: 14, background: STEP_PALETTE[task.colorIdx ?? 0].bar, border: `1.5px solid ${STEP_PALETTE[task.colorIdx ?? 0].barBorder}` }} />
                                )}
                                {task.originalType === 'milestone' && (
                                    <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: 22, height: 22, background: `${C.milestoneRing}30`, border: `1.5px solid ${C.milestoneRing}` }}>
                                        <Flag size={11} style={{ color: C.milestone }} />
                                    </div>
                                )}
                                {task.originalType === 'event' && (
                                    <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: 22, height: 22, background: `${C.event}18`, border: `1.5px solid ${C.event}55` }}>
                                        <Clock size={11} style={{ color: C.event }} />
                                    </div>
                                )}
                                {task.originalType === 'note' && (
                                    <div style={{ flexShrink: 0, width: 16, height: 20, background: task.noteColor || C.note, borderRadius: 2, boxShadow: '1px 1px 3px rgba(0,0,0,0.14)', position: 'relative', overflow: 'visible' }}>
                                        <div style={{ position: 'absolute', top: -2, left: '50%', transform: 'translateX(-50%)', width: 10, height: 4, background: 'rgba(255,255,255,0.55)', borderRadius: 1 }} />
                                    </div>
                                )}

                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                                    <span
                                        style={{
                                            fontSize: 13, fontWeight: 500, lineHeight: 1.25,
                                            color: isSel ? C.group : isDelayed ? C.today : C.textPrimary,
                                            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {task.name}
                                    </span>
                                    {task.originalType === 'note' && task.noteProjectTitle && (
                                        <span style={{
                                            fontSize: 10, color: C.textSecondary, marginTop: 1,
                                            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                                        }}>
                                            {task.noteProjectTitle}
                                        </span>
                                    )}
                                </div>

                                {task.originalType === 'note' && (task.filesCount || 0) > 0 && (
                                    <span style={{
                                        flexShrink: 0, display: 'flex', alignItems: 'center', gap: 2,
                                        fontSize: 10, padding: '2px 6px', borderRadius: 9999,
                                        color: C.textSecondary, background: C.headerBg, border: `1px solid ${C.borderLight}`,
                                    }}>
                                        <Paperclip size={9} />
                                        {task.filesCount}
                                    </span>
                                )}

                                {isDelayed && (
                                    <AlertTriangle size={12} style={{ flexShrink: 0, color: C.today }} />
                                )}
                            </div>

                            <div style={{ width: 80, fontSize: 11, fontWeight: 500, textAlign: 'center', fontVariantNumeric: 'tabular-nums', color: isDelayed ? C.today : C.textMuted }}>
                                {fmtDateShort(task.start)}
                            </div>
                            <div style={{ width: 80, fontSize: 11, fontWeight: 500, textAlign: 'center', fontVariantNumeric: 'tabular-nums', color: isDelayed ? C.today : C.textMuted }}>
                                {isPoint ? '—' : fmtDateShort(task.end)}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
