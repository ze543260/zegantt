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
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '20px 24px',
                borderBottom: `1px solid ${C.border}`,
                background: `linear-gradient(180deg, ${C.headerBg} 0%, ${C.surface} 100%)`,
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div>
                    <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.textTitle }}>
                        {t('planning.gantt', 'Project Planning')}
                    </h3>
                    <div style={{ height: 2.5, width: 64, marginTop: 6, borderRadius: 9999, background: `linear-gradient(90deg, ${C.group}, ${C.milestoneRing})` }} />
                </div>
                {projectName && (
                    <span
                        style={{
                            fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 9999,
                            color: C.textSecondary, background: C.surface, border: `1px solid ${C.border}`,
                        }}
                    >
                        {projectName}
                    </span>
                )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {/* Segmented Control */}
                <div style={{ display: 'flex', padding: 4, borderRadius: 8, background: 'rgba(122,122,122,0.07)', border: `1px solid ${C.borderLight}` }}>
                    {(['day', 'month'] as ViewMode[]).map(m => (
                        <button
                            key={m}
                            onClick={() => setViewMode(m)}
                            style={{
                                padding: '6px 20px', fontSize: 12, fontWeight: 600, borderRadius: 6,
                                transition: 'all 0.2s', border: 'none', cursor: 'pointer',
                                ...(viewMode === m
                                    ? { background: C.surface, color: C.group, boxShadow: '0 1px 3px rgb(0 0 0 / 0.08)' }
                                    : { background: 'transparent', color: C.textSecondary }),
                            }}
                        >
                            {m === 'day' ? t('charts.gantt.month', 'Month') : t('charts.gantt.year', 'Year')}
                        </button>
                    ))}
                </div>

                {/* Type Filters */}
                <div style={{ display: 'flex', padding: 4, borderRadius: 8, gap: 2, background: 'rgba(122,122,122,0.07)', border: `1px solid ${C.borderLight}` }}>
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
                                onClick={() => toggleVisibility(f.type)}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: 6,
                                    padding: '6px 12px', fontSize: 11, fontWeight: 600, borderRadius: 6,
                                    transition: 'all 0.2s', border: 'none', cursor: 'pointer',
                                    ...(active
                                        ? { background: C.surface, color: C.group, boxShadow: '0 1px 3px rgb(0 0 0 / 0.08)' }
                                        : { background: 'transparent', color: C.textMuted, opacity: 0.5 }),
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
                            onClick={() => setNewActionOpen(p => !p)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: 8,
                                padding: '10px 20px', borderRadius: 8,
                                fontSize: 14, fontWeight: 600, color: '#fff', border: 'none', cursor: 'pointer',
                                background: `linear-gradient(135deg, ${C.group}, ${C.group}dd)`,
                                transition: 'all 0.2s',
                            }}
                        >
                            <Plus size={16} />
                            <span>{t('charts.gantt.newAction', 'New Action')}</span>
                            <ChevronDown size={14} style={{ opacity: 0.7, transform: newActionOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.18s' }} />
                        </button>
                        {newActionOpen && (
                            <div
                                style={{
                                    position: 'absolute', top: 'calc(100% + 6px)', right: 0,
                                    zIndex: 99999,
                                    background: '#fff',
                                    borderRadius: 10,
                                    boxShadow: '0 12px 40px rgba(0,0,0,0.15), 0 3px 10px rgba(0,0,0,0.08)',
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
                                        icon: <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${C.milestoneRing}30`, border: `1.5px solid ${C.milestoneRing}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Flag size={11} style={{ color: C.milestone }} /></div>,
                                        action: () => { onAddMilestone?.(); setNewActionOpen(false); },
                                    },
                                    {
                                        label: t('gantt.newAction.event', 'Event'),
                                        icon: <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${C.event}18`, border: `1.5px solid ${C.event}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Clock size={11} style={{ color: C.event }} /></div>,
                                        action: () => { onAddEvent?.(); setNewActionOpen(false); },
                                    },
                                    {
                                        label: t('gantt.newAction.note', 'Note'),
                                        icon: <div style={{ width: 16, height: 20, background: C.note, borderRadius: 2, boxShadow: '1px 1px 3px rgba(0,0,0,0.14)', position: 'relative', overflow: 'visible', flexShrink: 0 }}><div style={{ position: 'absolute', top: -2, left: '50%', transform: 'translateX(-50%)', width: 10, height: 4, background: 'rgba(255,255,255,0.55)', borderRadius: 1 }} /></div>,
                                        action: () => { onAddNote?.(); setNewActionOpen(false); },
                                    },
                                ] as const).map(opt => (
                                    <button
                                        key={opt.label}
                                        onClick={opt.action}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: 10,
                                            width: '100%', padding: '8px 10px',
                                            borderRadius: 7, border: 'none',
                                            background: 'transparent',
                                            cursor: 'pointer',
                                            fontSize: 13, fontWeight: 500, color: C.textPrimary,
                                            textAlign: 'left',
                                            transition: 'background 0.12s',
                                        }}
                                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.headerBg; }}
                                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
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
