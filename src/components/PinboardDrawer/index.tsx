import { X, Plus, Calendar } from 'lucide-react';
import { useGanttContext } from '../../context/GanttContext';
import { C } from '../../utils/constants';
import { fmtDateShort } from '../../utils/date';

export function PinboardDrawer() {
    const { props, activePinboardTask, setActivePinboardTask, t } = useGanttContext();
    const isPinboardOpen = !!activePinboardTask;

    const handleClose = () => setActivePinboardTask(null);

    return (
        <>
            {/* Backdrop */}
            {isPinboardOpen && (
                <div
                    onClick={handleClose}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: C.overlaySoft,
                        zIndex: 99,
                        backdropFilter: 'blur(2px)',
                        transition: 'opacity 0.3s ease',
                    }}
                />
            )}

            <div style={{
                position: 'fixed',
                top: 0,
                right: isPinboardOpen ? 0 : -450,
                width: 400,
                height: '100vh',
                backgroundColor: C.surface,
                boxShadow: 'var(--zg-shadow-drawer, var(--zg-shadow-large))',
                borderLeft: `1px solid ${C.border}`,
                transition: 'right 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 100
            }}>

                {/* Header do Pinboard */}
                <div style={{
                    padding: '20px 24px',
                    backgroundColor: C.headerBg,
                    borderBottom: `1px solid ${C.borderLight}`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{
                                fontSize: 10,
                                fontWeight: 700,
                                backgroundColor: C.milestoneRing,
                                color: C.group,
                                padding: '2px 6px',
                                borderRadius: 4,
                                letterSpacing: '0.5px'
                            }}>
                                {activePinboardTask?.originalType?.toUpperCase() || ''}
                            </span>
                            <span style={{ fontSize: 12, color: C.textSecondary, display: 'flex', alignItems: 'center', gap: 4 }}>
                                <Calendar size={12} />
                                {activePinboardTask && fmtDateShort(activePinboardTask.start, props.locale)}
                                {activePinboardTask?.originalType === 'step' && ` - ${fmtDateShort(activePinboardTask.end, props.locale)}`}
                            </span>
                        </div>
                        <button
                            onClick={handleClose}
                            style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 4, borderRadius: 4 }}
                        >
                            <X size={18} />
                        </button>
                    </div>
                    <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.textTitle }}>
                        {activePinboardTask?.name || ''}
                    </h2>
                    <p style={{ margin: 0, fontSize: 13, color: C.textSecondary }}>
                        {t('pinboard.description', 'Quadro de anotações e arquivos vinculados a esta etapa.')}
                    </p>
                </div>

                {/* Lista de Notas */}
                <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    backgroundColor: C.surfaceAlt
                }}>
                    {activePinboardTask?.attachedNotes?.map((note, idx) => (
                        <div
                            key={note.id}
                            style={{
                                background: note.color || C.note,
                                padding: '16px',
                                borderRadius: '2px',
                                boxShadow: C.shadowLarge,
                                transform: `rotate(${idx % 2 === 0 ? '-1deg' : '1deg'})`,
                                position: 'relative',
                            }}
                        >
                            {/* Paper effect */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '40px',
                                height: '12px',
                                background: C.stickyTape,
                                borderRadius: '0 0 4px 4px'
                            }} />

                            <h3 style={{ margin: '0 0 8px 0', fontSize: 14, fontWeight: 700, color: C.inkSoft }}>
                                {note.title}
                            </h3>
                            <p style={{ margin: 0, fontSize: 13, color: C.inkSoft2, lineHeight: 1.4 }}>
                                {note.description || ''}
                            </p>
                            {note.author && (
                                <div style={{ marginTop: 12, fontSize: 11, fontWeight: 600, color: C.inkSoft4, textAlign: 'right' }}>
                                    — {note.author}
                                </div>
                            )}
                        </div>
                    ))}

                    {(!activePinboardTask?.attachedNotes || activePinboardTask.attachedNotes.length === 0) && (
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: C.textMuted,
                            textAlign: 'center',
                            gap: 12,
                            opacity: 0.6
                        }}>
                            <div style={{ width: 60, height: 60, borderRadius: '50%', background: C.headerBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Plus size={32} />
                            </div>
                            <p style={{ margin: 0, fontSize: 14 }}>{t('pinboard.empty', 'Nenhuma nota vinculada')}</p>
                        </div>
                    )}
                </div>

                {/* Footer do Pinboard */}
                <div style={{ padding: '16px 24px', backgroundColor: C.surface, borderTop: `1px solid ${C.borderLight}` }}>
                    <button style={{
                        width: '100%', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        backgroundColor: C.group, color: C.white, border: 'none', borderRadius: 8,
                        fontSize: 14, fontWeight: 600, cursor: 'pointer'
                    }}>
                        <Plus size={18} /> {t('pinboard.newBtn', 'Nova Nota nesta Etapa')}
                    </button>
                </div>
            </div>
        </>
    );
}
