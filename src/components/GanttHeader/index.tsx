import { ChevronDown, Clock, Flag, MessageCircle, Plus } from 'lucide-react';
import { useGanttContext } from '../../context/GanttContext';
import { C, STEP_PALETTE } from '../../utils/constants';
import type { ViewMode, OriginalType } from '../../types/internal';

export function GanttHeader() {
    const {
        props,
        t,
        viewMode,
        setViewMode,
        isInfiniteCanvas,
        zoomPercent,
        zoomIn,
        zoomOut,
        fitToScreen,
        visibleTypes,
        setVisibleTypes,
        newActionOpen,
        setNewActionOpen,
        newActionRef
    } = useGanttContext();

    const { projectName, onAddNewStage, onAddMilestone, onAddEvent, onAddNote } = props;

    const toggleVisibility = (type: OriginalType) => {
        setVisibleTypes(prev => {
            const next = new Set(prev);
            if (next.has(type)) next.delete(type);
            else next.add(type);
            return next;
        });
    };

    return (
        <div
            className="zg-header"
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 14,
                flexWrap: 'wrap',
                padding: '14px 18px',
                borderBottom: `1px solid ${C.border}`,
                background: C.headerBg,
            }}
        >
            <div className="zg-header-brand" style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                <div>
                    <h3 style={{ margin: 0, fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.textTitle, fontFamily: 'var(--zg-font-accent)' }}>
                        {t('planning.gantt', 'Project Planning')}
                    </h3>
                    <div style={{ height: 2.5, width: 64, marginTop: 6, borderRadius: 9999, background: C.group }} />
                </div>
                {projectName && (
                    <span
                        style={{
                            fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase',
                            padding: '6px 12px', borderRadius: 9999,
                            color: C.textSecondary, background: C.surface, border: `1px solid ${C.border}`,
                            boxShadow: C.shadowTiny,
                        }}
                    >
                        {projectName}
                    </span>
                )}
            </div>

            <div className="zg-header-controls" style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', justifyContent: 'flex-end', flex: '1 1 560px' }}>
                {/* Viewport Controls / Segmented Mode */}
                {isInfiniteCanvas ? (
                    <div className="zg-control-group" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: 4, borderRadius: 10, background: C.groupSoftStrong, border: `1px solid ${C.borderLight}` }}>
                        <button
                            className="zg-control-btn zg-control-btn--icon"
                            onClick={zoomOut}
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 6,
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: 16,
                                fontWeight: 700,
                                color: C.group,
                                background: C.surface,
                                boxShadow: C.shadowTiny,
                            }}
                            aria-label={t('gantt.viewport.zoomOut', 'Zoom out')}
                            title={t('gantt.viewport.zoomOut', 'Zoom out')}
                        >
                            -
                        </button>
                        <span style={{ minWidth: 58, textAlign: 'center', fontSize: 11, fontWeight: 700, color: C.textSecondary }}>
                            {zoomPercent}%
                        </span>
                        <button
                            className="zg-control-btn zg-control-btn--icon"
                            onClick={zoomIn}
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 6,
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: 16,
                                fontWeight: 700,
                                color: C.group,
                                background: C.surface,
                                boxShadow: C.shadowTiny,
                            }}
                            aria-label={t('gantt.viewport.zoomIn', 'Zoom in')}
                            title={t('gantt.viewport.zoomIn', 'Zoom in')}
                        >
                            +
                        </button>
                        <button
                            className="zg-control-btn zg-control-btn--fit"
                            onClick={fitToScreen}
                            style={{
                                padding: '0 12px',
                                height: 30,
                                borderRadius: 6,
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: 11,
                                fontWeight: 700,
                                color: C.group,
                                background: C.surface,
                                boxShadow: C.shadowTiny,
                                textTransform: 'uppercase',
                                letterSpacing: '0.04em',
                            }}
                            title={t('gantt.viewport.fit', 'Fit to screen')}
                        >
                            {t('gantt.viewport.fit', 'Fit')}
                        </button>
                    </div>
                ) : (
                    <div className="zg-control-group" style={{ display: 'flex', padding: 4, borderRadius: 10, background: C.groupSoftStrong, border: `1px solid ${C.borderLight}` }}>
                        {(['day', 'month'] as ViewMode[]).map(m => (
                            <button
                                key={m}
                                className={`zg-segment-btn ${viewMode === m ? 'is-active' : 'is-inactive'}`}
                                onClick={() => setViewMode(m)}
                                style={{
                                    padding: '6px 20px', fontSize: 12, fontWeight: 600, borderRadius: 6,
                                    transition: 'all 0.2s', border: 'none', cursor: 'pointer',
                                    ...(viewMode === m
                                        ? { background: C.surface, color: C.group, boxShadow: C.shadowTiny }
                                        : { background: 'transparent', color: C.textSecondary }),
                                }}
                            >
                                {m === 'day' ? t('charts.gantt.month', 'Month') : t('charts.gantt.year', 'Year')}
                            </button>
                        ))}
                    </div>
                )}

                {/* Type Filters */}
                <div className="zg-control-group zg-control-group--filters" style={{ display: 'flex', padding: 4, borderRadius: 10, gap: 2, background: C.groupSoftStrong, border: `1px solid ${C.borderLight}`, flexWrap: 'wrap' }}>
                    {([
                        { type: 'step' as OriginalType, label: t('gantt.filter.steps', 'Steps'), icon: <div style={{ width: 10, height: 10, borderRadius: 2, background: STEP_PALETTE[0].bar, border: `1px solid ${STEP_PALETTE[0].barBorder}` }} /> },
                        { type: 'milestone' as OriginalType, label: t('gantt.filter.milestones', 'Milestones'), icon: <Flag size={11} style={{ color: C.milestone }} /> },
                        { type: 'event' as OriginalType, label: t('gantt.filter.events', 'Events'), icon: <Clock size={11} style={{ color: C.event }} /> },
                        { type: 'note' as OriginalType, label: t('gantt.filter.notes', 'Notes'), icon: <MessageCircle size={11} style={{ color: C.note }} /> },
                    ]).map(f => {
                        const active = visibleTypes.has(f.type);
                        return (
                            <button
                                key={f.type}
                                className={`zg-segment-btn ${active ? 'is-active' : 'is-inactive'}`}
                                onClick={() => toggleVisibility(f.type)}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: 6,
                                    padding: '6px 12px', fontSize: 11, fontWeight: 600, borderRadius: 6,
                                    transition: 'all 0.2s', border: 'none', cursor: 'pointer',
                                    ...(active
                                        ? { background: C.surface, color: C.group, boxShadow: C.shadowTiny }
                                        : { background: 'transparent', color: C.textSecondary, opacity: 0.58 }),
                                }}
                            >
                                {f.icon}
                                <span>{f.label}</span>
                            </button>
                        );
                    })}
                </div>

                {onAddNewStage && (
                    <div ref={newActionRef} style={{ position: 'relative' }}>
                        <button
                            className="zg-new-action-btn"
                            onClick={() => setNewActionOpen(p => !p)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: 8,
                                padding: '10px 20px', borderRadius: 8,
                                fontSize: 14, fontWeight: 600, color: C.white, border: 'none', cursor: 'pointer',
                                background: C.group,
                                transition: 'all 0.2s',
                            }}
                        >
                            <Plus size={16} />
                            <span>{t('charts.gantt.newAction', 'New Action')}</span>
                            <ChevronDown size={14} style={{ opacity: 0.7, transform: newActionOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.18s' }} />
                        </button>
                        {newActionOpen && (
                            <div
                                className="zg-new-action-menu"
                                style={{
                                    position: 'absolute', top: 'calc(100% + 6px)', right: 0,
                                    zIndex: 99999,
                                    background: C.surface,
                                    borderRadius: 10,
                                    boxShadow: 'var(--zg-shadow-popover)',
                                    border: `1.5px solid ${C.borderLight}`,
                                    width: 200,
                                    overflow: 'hidden',
                                    padding: '5px 5px',
                                }}
                                onClick={e => e.stopPropagation()}
                            >
                                {([
                                    {
                                        label: t('gantt.newAction.step', 'Step'),
                                        icon: <div style={{ width: 14, height: 14, borderRadius: 3, background: STEP_PALETTE[0].bar, border: `1.5px solid ${STEP_PALETTE[0].barBorder}`, flexShrink: 0 }} />,
                                        action: () => { onAddNewStage(); setNewActionOpen(false); },
                                    },
                                    {
                                        label: t('gantt.newAction.milestone', 'Milestone'),
                                        icon: <div style={{ width: 22, height: 22, borderRadius: '50%', background: C.milestoneRingSoft, border: `1.5px solid ${C.milestoneRing}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Flag size={11} style={{ color: C.milestone }} /></div>,
                                        action: () => { onAddMilestone?.(); setNewActionOpen(false); },
                                    },
                                    {
                                        label: t('gantt.newAction.event', 'Event'),
                                        icon: <div style={{ width: 22, height: 22, borderRadius: '50%', background: C.eventSoft, border: `1.5px solid ${C.eventBorderSoft}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Clock size={11} style={{ color: C.event }} /></div>,
                                        action: () => { onAddEvent?.(); setNewActionOpen(false); },
                                    },
                                    {
                                        label: t('gantt.newAction.note', 'Note'),
                                        icon: <div style={{ width: 16, height: 20, background: C.note, borderRadius: 2, boxShadow: C.shadowTiny, position: 'relative', overflow: 'visible', flexShrink: 0 }}><div style={{ position: 'absolute', top: -2, left: '50%', transform: 'translateX(-50%)', width: 10, height: 4, background: C.stickyTape, borderRadius: 1 }} /></div>,
                                        action: () => { onAddNote?.(); setNewActionOpen(false); },
                                    },
                                ] as const).map(opt => (
                                    <button
                                        key={opt.label}
                                        onClick={opt.action}
                                        className="zg-popup-btn"
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: 10,
                                            width: '100%', padding: '8px 10px',
                                            borderRadius: 7, border: 'none',
                                            background: 'transparent',
                                            cursor: 'pointer',
                                            fontSize: 13, fontWeight: 500, color: C.textPrimary,
                                            textAlign: 'left',
                                        }}
                                    >
                                        {opt.icon}
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
