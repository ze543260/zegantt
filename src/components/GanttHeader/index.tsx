
import React from 'react';
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
            className="flex items-center justify-between px-6 py-5"
            style={{ borderBottom: `1px solid ${C.border}`, background: `linear-gradient(180deg, ${C.headerBg} 0%, ${C.surface} 100%)` }}
        >
            <div className="flex items-center gap-4">
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: C.textTitle }}>
                        {t('planning.gantt', 'PLANEJAMENTO DA OBRA')}
                    </h3>
                    <div className="h-[2.5px] w-16 mt-1.5 rounded-full" style={{ background: `linear-gradient(90deg, ${C.group}, ${C.milestoneRing})` }} />
                </div>
                {projectName && (
                    <span
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{ color: C.textSecondary, background: C.surface, border: `1px solid ${C.border}` }}
                    >
                        {projectName}
                    </span>
                )}
            </div>

            <div className="flex items-center gap-3">
                {/* Segmented Control */}
                <div className="flex p-1 rounded-lg" style={{ background: 'rgba(122,122,122,0.07)', border: `1px solid ${C.borderLight}` }}>
                    {(['month', 'year'] as ViewMode[]).map(m => (
                        <button
                            key={m}
                            onClick={() => setViewMode(m)}
                            className="px-5 py-1.5 text-xs font-semibold rounded-md transition-all duration-200"
                            style={viewMode === m
                                ? { background: C.surface, color: C.group, boxShadow: '0 1px 3px rgb(0 0 0 / 0.08)' }
                                : { color: C.textSecondary }}
                        >
                            {m === 'month' ? t('charts.gantt.month', 'Mês') : t('charts.gantt.year', 'Ano')}
                        </button>
                    ))}
                </div>

                {/* Type Filters */}
                <div className="flex p-1 rounded-lg gap-0.5" style={{ background: 'rgba(122,122,122,0.07)', border: `1px solid ${C.borderLight}` }}>
                    {([
                        { type: 'step' as OriginalType, label: 'Etapas', icon: <div className="w-2.5 h-2.5 rounded-sm" style={{ background: STEP_PALETTE[0].bar, border: `1px solid ${STEP_PALETTE[0].barBorder}` }} /> },
                        { type: 'milestone' as OriginalType, label: 'Marcos', icon: <Flag size={11} style={{ color: C.milestone }} /> },
                        { type: 'event' as OriginalType, label: 'Eventos', icon: <Clock size={11} style={{ color: C.event }} /> },
                        { type: 'note' as OriginalType, label: 'Notas', icon: <MessageCircle size={11} style={{ color: C.note }} /> },
                    ]).map(f => {
                        const active = visibleTypes.has(f.type);
                        return (
                            <button
                                key={f.type}
                                onClick={() => toggleVisibility(f.type)}
                                className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-md transition-all duration-200"
                                style={active
                                    ? { background: C.surface, color: C.group, boxShadow: '0 1px 3px rgb(0 0 0 / 0.08)' }
                                    : { color: C.textMuted, opacity: 0.5 }}
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
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                            style={{ background: `linear-gradient(135deg, ${C.group}, ${C.group}dd)` }}
                        >
                            <Plus size={16} />
                            <span>{t('charts.gantt.newAction', 'Nova Ação')}</span>
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
                                        label: 'Etapa',
                                        icon: <div style={{ width: 14, height: 14, borderRadius: 3, background: STEP_PALETTE[0].bar, border: `1.5px solid ${STEP_PALETTE[0].barBorder}`, flexShrink: 0 }} />,
                                        action: () => { onAddNewStage(); setNewActionOpen(false); },
                                    },
                                    {
                                        label: 'Marco',
                                        icon: <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${C.milestoneRing}30`, border: `1.5px solid ${C.milestoneRing}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Flag size={11} style={{ color: C.milestone }} /></div>,
                                        action: () => { onAddMilestone?.(); setNewActionOpen(false); },
                                    },
                                    {
                                        label: 'Evento',
                                        icon: <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${C.event}18`, border: `1.5px solid ${C.event}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Clock size={11} style={{ color: C.event }} /></div>,
                                        action: () => { onAddEvent?.(); setNewActionOpen(false); },
                                    },
                                    {
                                        label: 'Nota',
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
