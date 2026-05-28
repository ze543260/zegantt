
import { useCallback, useMemo } from 'react';
import { ChevronDown, ChevronRight, Clock, Flag, AlertTriangle, Paperclip, MessageCircle } from 'lucide-react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useGanttContext } from '../../context/GanttContext';
import { C, HEADER_H, ROW_H, STEP_PALETTE } from '../../utils/constants';
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
        selectedTaskIds,
        setSelectedTaskIds,
        delayedIds,
        criticalIds,
        relatedIds,
        setActivePinboardTask,
        groupProgress,
        sidebarW,
    } = useGanttContext();

    const toGanttTask = (task: InternalTask): GanttTask => ({
        id: task.id, name: task.name, start: task.start, end: task.end,
        type: task.originalType === 'step' ? 'task' : 'milestone',
        progress: task.progress,
    });

    // TanStack Virtual intentionally returns non-memoizable functions.
    // eslint-disable-next-line react-hooks/incompatible-library
    const rowVirtualizer = useVirtualizer({
        count: displayRows.length,
        getScrollElement: () => leftBodyRef.current,
        estimateSize: () => ROW_H,
        overscan: 12,
    });

    const virtualRows = rowVirtualizer.getVirtualItems();
    const contentHeight = Math.max(rowVirtualizer.getTotalSize(), 400) + 80;

    const orderedTaskIds = useMemo(
        () => displayRows.filter((row) => row.kind === 'task').map((row) => row.task.id),
        [displayRows],
    );

    const selectRelativeTask = useCallback((fromTaskId: string, delta: number) => {
        const idx = orderedTaskIds.indexOf(fromTaskId);
        if (idx < 0) return;
        const nextIdx = Math.min(Math.max(0, idx + delta), orderedTaskIds.length - 1);
        const nextTaskId = orderedTaskIds[nextIdx];
        if (nextTaskId) setSelectedTaskIds(new Set([nextTaskId]));
    }, [orderedTaskIds, setSelectedTaskIds]);

    return (
        <div style={{ width: sidebarW, flexShrink: 0, borderRight: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Table header */}
            <div
                style={{
                    boxSizing: 'border-box',
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
                onClick={() => setSelectedTaskIds(new Set())}
                className="zg-no-scrollbar"
                style={{ overflowY: 'auto', overflowX: 'hidden', flex: 1 }}
                role="grid"
                aria-rowcount={displayRows.length}
            >
                <div style={{ height: contentHeight, position: 'relative' }}>
                    {virtualRows.map((virtualRow) => {
                        const row = displayRows[virtualRow.index];
                        if (!row) return null;
                        const rowBaseStyle = {
                            position: 'absolute' as const,
                            top: virtualRow.start,
                            left: 0,
                            width: '100%',
                            height: ROW_H,
                        };

                        // Project header row
                        if (row.kind === 'projectHeader') {
                            return (
                                <div
                                    key={`ph-${row.projectId}`}
                                    style={{
                                        ...rowBaseStyle,
                                        boxSizing: 'border-box',
                                        display: 'flex', alignItems: 'center', padding: '0 16px',
                                        cursor: 'pointer', userSelect: 'none',
                                        borderBottom: `1.5px solid ${C.groupBorderWeak}`, background: C.groupSoft,
                                    }}
                                    onClick={() => toggleProject(row.projectId)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            toggleProject(row.projectId);
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Toggle project ${row.projectTitle}`}
                                    aria-expanded={!row.collapsed}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 0 }}>
                                        {row.collapsed
                                            ? <ChevronRight size={15} style={{ color: C.group, flexShrink: 0 }} />
                                            : <ChevronDown size={15} style={{ color: C.group, flexShrink: 0 }} />}
                                        <span style={{
                                            fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                                            color: C.group, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flexShrink: 1,
                                        }}>
                                            {row.projectTitle}
                                        </span>
                                        {groupProgress.byProject.has(row.projectId) && (
                                            <>
                                                <div style={{ flex: 1, height: 4, background: 'rgba(26,60,48,0.2)', borderRadius: 2, overflow: 'hidden', minWidth: 40 }}>
                                                    <div style={{
                                                        width: `${groupProgress.byProject.get(row.projectId)}%`,
                                                        height: '100%',
                                                        background: C.group,
                                                        borderRadius: 2,
                                                    }} />
                                                </div>
                                                <span style={{ fontSize: 10, fontWeight: 700, color: C.group, flexShrink: 0, marginRight: 4 }}>
                                                    {groupProgress.byProject.get(row.projectId)}%
                                                </span>
                                            </>
                                        )}
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
                                        ...rowBaseStyle,
                                        boxSizing: 'border-box',
                                        display: 'flex', alignItems: 'center', padding: '0 16px',
                                        cursor: 'pointer', userSelect: 'none',
                                        borderBottom: `1px solid ${C.border}`, background: C.headerBg,
                                    }}
                                    onClick={() => toggleGroup(groupKey)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            toggleGroup(groupKey);
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Toggle group ${row.label}`}
                                    aria-expanded={!row.collapsed}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 0 }}>
                                        {row.collapsed
                                            ? <ChevronRight size={14} style={{ color: C.textSecondary, flexShrink: 0 }} />
                                            : <ChevronDown size={14} style={{ color: C.textSecondary, flexShrink: 0 }} />}
                                        <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: C.textTitle, flexShrink: 0 }}>
                                            {t(`gantt.group.${row.groupType}`, row.label)}
                                        </span>
                                        <span style={{ fontSize: 10, fontWeight: 600, padding: '2px 6px', borderRadius: 9999, background: C.groupSoftStrong, color: C.textSecondary, flexShrink: 0 }}>
                                            {row.count}
                                        </span>
                                        {row.groupType === 'step' && groupProgress.byType.has('step') && (
                                            <>
                                                <div style={{ flex: 1, height: 4, background: C.borderLight, borderRadius: 2, overflow: 'hidden', minWidth: 40 }}>
                                                    <div style={{
                                                        width: `${groupProgress.byType.get('step')}%`,
                                                        height: '100%',
                                                        background: C.group,
                                                        borderRadius: 2,
                                                        transition: 'width 0.3s',
                                                    }} />
                                                </div>
                                                <span style={{ fontSize: 10, fontWeight: 700, color: C.textSecondary, flexShrink: 0 }}>
                                                    {groupProgress.byType.get('step')}%
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            );
                        }

                        const task = row.task;
                        const isSel = selectedTaskIds.has(task.id);
                        const isHov = hoveredTaskId === task.id;
                        const isPoint = task.originalType !== 'step';
                        const isDelayed = delayedIds.has(task.id);
                        const isCritical = criticalIds.has(task.id);
                        const isLeftDimmed = selectedTaskIds.size > 0 && !isSel && !relatedIds.has(task.id);
                        const isLeftRelated = selectedTaskIds.size > 0 && !isSel && relatedIds.has(task.id);
                        const rowBg = isDelayed ? C.dangerBgSoft : isSel ? C.groupLight : isLeftRelated ? C.groupLightStrong : isHov ? C.pageBg : C.surface;

                        return (
                            <div
                                key={task.id}
                                style={{
                                    ...rowBaseStyle,
                                    boxSizing: 'border-box',
                                    display: 'flex', alignItems: 'center', padding: '0 16px',
                                    cursor: 'pointer', transition: 'opacity 0.18s, background 0.15s',
                                    borderBottom: `1px solid ${C.borderLight}`,
                                    background: rowBg,
                                    borderLeft: isSel ? `3px solid ${C.group}` : isLeftRelated ? `3px solid ${C.groupGlow}` : isCritical ? `3px solid ${C.today}` : undefined,
                                    opacity: isLeftDimmed ? 0.3 : 1,
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const taskId = task.id;
                                    if (e.ctrlKey || e.metaKey) {
                                        setSelectedTaskIds(prev => {
                                            const next = new Set(prev);
                                            if (next.has(taskId)) next.delete(taskId);
                                            else next.add(taskId);
                                            return next;
                                        });
                                    } else if (e.shiftKey && selectedTaskIds.size > 0) {
                                        const lastId = [...selectedTaskIds].at(-1);
                                        if (!lastId) { setSelectedTaskIds(new Set([taskId])); return; }
                                        const fromIdx = orderedTaskIds.indexOf(lastId);
                                        const toIdx = orderedTaskIds.indexOf(taskId);
                                        if (fromIdx < 0 || toIdx < 0) { setSelectedTaskIds(new Set([taskId])); return; }
                                        const [start, end] = fromIdx < toIdx ? [fromIdx, toIdx] : [toIdx, fromIdx];
                                        setSelectedTaskIds(new Set(orderedTaskIds.slice(start, end + 1)));
                                    } else {
                                        setSelectedTaskIds(prev => prev.size === 1 && prev.has(taskId) ? new Set() : new Set([taskId]));
                                    }
                                }}
                                onDoubleClick={() => props.onTaskClick?.(toGanttTask(task))}
                                onMouseEnter={() => setHoveredTaskId(task.id)}
                                onMouseLeave={() => setHoveredTaskId(null)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        props.onTaskClick?.(toGanttTask(task));
                                        return;
                                    }
                                    if (e.key === ' ') {
                                        e.preventDefault();
                                        setSelectedTaskIds(prev => {
                                            const next = new Set(prev);
                                            if (next.has(task.id)) next.delete(task.id);
                                            else next.add(task.id);
                                            return next;
                                        });
                                        return;
                                    }
                                    if (e.key === 'ArrowDown') {
                                        e.preventDefault();
                                        selectRelativeTask(task.id, 1);
                                        return;
                                    }
                                    if (e.key === 'ArrowUp') {
                                        e.preventDefault();
                                        selectRelativeTask(task.id, -1);
                                    }
                                }}
                                role="button"
                                tabIndex={0}
                                aria-selected={isSel}
                                aria-label={`Task ${task.name}`}
                            >
                                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, minWidth: 0, paddingRight: 8 }}>
                                    {task.originalType === 'step' && (
                                        <div style={{ flexShrink: 0, borderRadius: 4, width: 14, height: 14, background: STEP_PALETTE[task.colorIdx ?? 0].bar, border: `1.5px solid ${STEP_PALETTE[task.colorIdx ?? 0].barBorder}` }} />
                                    )}
                                    {task.originalType === 'milestone' && (
                                        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: 22, height: 22, background: C.milestoneRingSoft, border: `1.5px solid ${C.milestoneRing}` }}>
                                            <Flag size={11} style={{ color: C.milestone }} />
                                        </div>
                                    )}
                                    {task.originalType === 'event' && (
                                        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: 22, height: 22, background: C.eventSoft, border: `1.5px solid ${C.eventBorderSoft}` }}>
                                            <Clock size={11} style={{ color: C.event }} />
                                        </div>
                                    )}
                                    {task.originalType === 'note' && (
                                        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4, width: 22, height: 22, background: 'rgba(254,240,138,0.4)', border: `1.5px solid rgba(250,204,21,0.5)` }}>
                                            <MessageCircle size={11} style={{ color: C.note }} />
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
                                    </div>

                                    {(task.attachedNotes?.length || 0) > 0 && (
                                        <button
                                            className="zg-note-badge-btn"
                                            aria-label={`Open ${task.attachedNotes?.length} linked notes`}
                                            style={{
                                                flexShrink: 0, display: 'flex', alignItems: 'center', gap: 4,
                                                fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 6,
                                                color: C.noteBadgeText, background: C.noteBadgeBg, border: 'none',
                                                cursor: 'pointer', boxShadow: C.shadowSmall,
                                                transition: 'transform 0.12s ease',
                                            }}
                                            onClick={(e) => { e.stopPropagation(); setActivePinboardTask(task); }}
                                        >
                                            <Paperclip size={12} />
                                            {task.attachedNotes?.length}
                                        </button>
                                    )}

                                    {isDelayed && (
                                        <AlertTriangle size={12} style={{ flexShrink: 0, color: C.today }} />
                                    )}
                                </div>

                                <div style={{ width: 80, fontSize: 11, fontWeight: 500, textAlign: 'center', fontVariantNumeric: 'tabular-nums', color: isDelayed ? C.today : C.textMuted }}>
                                    {fmtDateShort(task.start, props.locale)}
                                </div>
                                <div style={{ width: 80, fontSize: 11, fontWeight: 500, textAlign: 'center', fontVariantNumeric: 'tabular-nums', color: isDelayed ? C.today : C.textMuted }}>
                                    {isPoint ? '—' : fmtDateShort(task.end, props.locale)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
