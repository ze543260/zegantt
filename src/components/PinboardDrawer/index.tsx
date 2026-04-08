import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { X, Plus, Calendar, Grip, RotateCcw } from 'lucide-react';
import { useGanttContext } from '../../context/GanttContext';
import { C } from '../../utils/constants';
import { fmtDateShort } from '../../utils/date';

type NoteLayout = {
    x: number;
    y: number;
    z: number;
    rotate: number;
};

const NOTE_WIDTH = 260;
const NOTE_HEIGHT = 170;
const BOARD_PADDING = 20;

export function PinboardDrawer() {
    const { props, activePinboardTask, setActivePinboardTask, t } = useGanttContext();
    const isPinboardOpen = !!activePinboardTask;
    const boardRef = useRef<HTMLDivElement>(null);
    const [layoutByTask, setLayoutByTask] = useState<Record<string, Record<string, NoteLayout>>>({});
    const [dragState, setDragState] = useState<{
        pointerId: number;
        taskId: string;
        noteId: string;
        offsetX: number;
        offsetY: number;
    } | null>(null);

    const handleClose = () => setActivePinboardTask(null);

    const currentTaskId = activePinboardTask?.id || null;
    const notes = activePinboardTask?.attachedNotes || [];

    const activeLayout = useMemo(() => {
        if (!currentTaskId) return {} as Record<string, NoteLayout>;
        return layoutByTask[currentTaskId] || {};
    }, [currentTaskId, layoutByTask]);

    const ensureTaskLayout = useCallback((taskId: string, noteCount: number) => {
        setLayoutByTask(prev => {
            const existing = prev[taskId] || {};
            if (Object.keys(existing).length >= noteCount) return prev;

            const next = { ...existing };
            return { ...prev, [taskId]: next };
        });
    }, []);

    const resetLayout = useCallback(() => {
        if (!activePinboardTask) return;
        const { id: taskId } = activePinboardTask;
        const next: Record<string, NoteLayout> = {};
        notes.forEach((note, idx) => {
            const col = idx % 4;
            const row = Math.floor(idx / 4);
            const baseX = BOARD_PADDING + col * (NOTE_WIDTH + 18);
            const baseY = BOARD_PADDING + row * (NOTE_HEIGHT + 18);
            const rotate = ((idx % 5) - 2) * 0.8;
            next[note.id] = { x: baseX, y: baseY, z: idx + 1, rotate };
        });
        setLayoutByTask(prev => ({ ...prev, [taskId]: next }));
    }, [activePinboardTask, notes]);

    useEffect(() => {
        if (!activePinboardTask) return;
        ensureTaskLayout(activePinboardTask.id, notes.length);
        if (!layoutByTask[activePinboardTask.id] || Object.keys(layoutByTask[activePinboardTask.id]).length === 0) {
            resetLayout();
        }
    }, [activePinboardTask, ensureTaskLayout, layoutByTask, notes.length, resetLayout]);

    useEffect(() => {
        if (!isPinboardOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isPinboardOpen]);

    useEffect(() => {
        if (!dragState || !currentTaskId) return;

        const handleMove = (event: PointerEvent) => {
            if (event.pointerId !== dragState.pointerId) return;
            const board = boardRef.current;
            if (!board) return;

            const rect = board.getBoundingClientRect();
            const maxX = Math.max(BOARD_PADDING, rect.width - NOTE_WIDTH - BOARD_PADDING);
            const maxY = Math.max(BOARD_PADDING, rect.height - NOTE_HEIGHT - BOARD_PADDING);

            const x = Math.max(BOARD_PADDING, Math.min(maxX, event.clientX - rect.left - dragState.offsetX));
            const y = Math.max(BOARD_PADDING, Math.min(maxY, event.clientY - rect.top - dragState.offsetY));

            setLayoutByTask(prev => {
                const current = prev[currentTaskId] || {};
                const note = current[dragState.noteId];
                if (!note) return prev;
                return {
                    ...prev,
                    [currentTaskId]: {
                        ...current,
                        [dragState.noteId]: { ...note, x, y },
                    },
                };
            });
        };

        const handleUp = (event: PointerEvent) => {
            if (event.pointerId !== dragState.pointerId) return;
            setDragState(null);
        };

        document.addEventListener('pointermove', handleMove);
        document.addEventListener('pointerup', handleUp);
        document.addEventListener('pointercancel', handleUp);

        return () => {
            document.removeEventListener('pointermove', handleMove);
            document.removeEventListener('pointerup', handleUp);
            document.removeEventListener('pointercancel', handleUp);
        };
    }, [currentTaskId, dragState]);

    const startDrag = useCallback((event: React.PointerEvent<HTMLDivElement>, noteId: string) => {
        if (!currentTaskId) return;
        const board = boardRef.current;
        if (!board) return;

        const layout = layoutByTask[currentTaskId]?.[noteId];
        if (!layout) return;

        const maxZ = Object.values(layoutByTask[currentTaskId] || {}).reduce((acc, n) => Math.max(acc, n.z), 0);
        setLayoutByTask(prev => {
            const current = prev[currentTaskId] || {};
            const note = current[noteId];
            if (!note) return prev;
            return {
                ...prev,
                [currentTaskId]: {
                    ...current,
                    [noteId]: { ...note, z: maxZ + 1 },
                },
            };
        });

        const rect = board.getBoundingClientRect();
        setDragState({
            pointerId: event.pointerId,
            taskId: currentTaskId,
            noteId,
            offsetX: event.clientX - rect.left - layout.x,
            offsetY: event.clientY - rect.top - layout.y,
        });
    }, [currentTaskId, layoutByTask]);

    return (
        <>
            {isPinboardOpen && (
                <div
                    onClick={handleClose}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: C.overlaySoft,
                        zIndex: 999,
                        backdropFilter: 'blur(5px)',
                        transition: 'opacity 0.3s ease',
                    }}
                />
            )}

            {isPinboardOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={t('pinboard.modalTitle', 'Pinboard')}
                    style={{
                        position: 'fixed',
                        inset: 14,
                        backgroundColor: C.surface,
                        border: `1px solid ${C.border}`,
                        borderRadius: 18,
                        boxShadow: 'var(--zg-shadow-panel)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        zIndex: 1000,
                    }}
                >
                    <div style={{
                        padding: '16px 18px',
                        backgroundColor: C.headerBg,
                        borderBottom: `1px solid ${C.borderLight}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12,
                        flexWrap: 'wrap',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                            <span style={{
                                fontSize: 10,
                                fontWeight: 700,
                                backgroundColor: C.milestoneRing,
                                color: C.group,
                                padding: '3px 8px',
                                borderRadius: 999,
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                            }}>
                                {activePinboardTask?.originalType || ''}
                            </span>
                            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.textTitle }}>
                                {activePinboardTask?.name || ''}
                            </h2>
                            <span style={{ fontSize: 12, color: C.textSecondary, display: 'flex', alignItems: 'center', gap: 4 }}>
                                <Calendar size={12} />
                                {activePinboardTask && fmtDateShort(activePinboardTask.start, props.locale)}
                                {activePinboardTask?.originalType === 'step' && ` - ${fmtDateShort(activePinboardTask.end, props.locale)}`}
                            </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <button
                                onClick={resetLayout}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    background: C.surface,
                                    border: `1px solid ${C.border}`,
                                    borderRadius: 8,
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: C.textPrimary,
                                    padding: '8px 10px',
                                    cursor: 'pointer',
                                }}
                            >
                                <RotateCcw size={14} />
                                {t('pinboard.reset', 'Reset layout')}
                            </button>
                            <button
                                onClick={handleClose}
                                style={{
                                    background: C.surface,
                                    border: `1px solid ${C.border}`,
                                    borderRadius: 8,
                                    cursor: 'pointer',
                                    width: 34,
                                    height: 34,
                                    display: 'grid',
                                    placeItems: 'center',
                                }}
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    <div
                        ref={boardRef}
                        style={{
                            position: 'relative',
                            flex: 1,
                            overflow: 'hidden',
                            background: `linear-gradient(180deg, ${C.surfaceAlt} 0%, ${C.surface} 100%)`,
                            backgroundImage: `
                              linear-gradient(${C.borderLight} 1px, transparent 1px),
                              linear-gradient(90deg, ${C.borderLight} 1px, transparent 1px)
                            `,
                            backgroundSize: '28px 28px',
                            cursor: dragState ? 'grabbing' : 'default',
                        }}
                    >
                        <p style={{ margin: 0, position: 'absolute', left: 20, top: 14, fontSize: 12, color: C.textSecondary }}>
                            {t('pinboard.dragHint', 'Drag the notes to organize your board freely.')}
                        </p>

                        {notes.map((note, idx) => {
                            const fallback: NoteLayout = {
                                x: BOARD_PADDING + (idx % 4) * (NOTE_WIDTH + 18),
                                y: BOARD_PADDING + Math.floor(idx / 4) * (NOTE_HEIGHT + 18),
                                z: idx + 1,
                                rotate: ((idx % 5) - 2) * 0.8,
                            };
                            const layout = activeLayout[note.id] || fallback;
                            const isDragging = dragState?.noteId === note.id;

                            return (
                                <div
                                    key={note.id}
                                    onPointerDown={(event) => startDrag(event, note.id)}
                                    style={{
                                        position: 'absolute',
                                        left: layout.x,
                                        top: layout.y,
                                        width: NOTE_WIDTH,
                                        minHeight: NOTE_HEIGHT,
                                        padding: '18px 14px 14px',
                                        borderRadius: 6,
                                        border: `1px solid ${C.groupSoftStrong}`,
                                        background: note.color || C.note,
                                        boxShadow: isDragging ? C.shadowStickyHover : C.shadowSticky,
                                        transform: `rotate(${layout.rotate}deg)`,
                                        userSelect: 'none',
                                        touchAction: 'none',
                                        cursor: isDragging ? 'grabbing' : 'grab',
                                        zIndex: layout.z,
                                        transition: isDragging ? 'none' : 'box-shadow 0.2s ease',
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute',
                                        top: -6,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: 40,
                                        height: 10,
                                        background: C.stickyTape,
                                        borderRadius: 2,
                                        boxShadow: C.shadowTiny,
                                    }} />

                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 8 }}>
                                        <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: C.inkSoft, lineHeight: 1.3 }}>{note.title}</h3>
                                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, color: C.inkSoft4 }}>
                                            <Grip size={12} />
                                            {t('pinboard.drag', 'Drag')}
                                        </span>
                                    </div>

                                    <p style={{ margin: 0, fontSize: 13, color: C.inkSoft2, lineHeight: 1.4 }}>
                                        {note.description || ''}
                                    </p>

                                    {note.author && (
                                        <div style={{ marginTop: 12, fontSize: 11, fontWeight: 600, color: C.inkSoft4, textAlign: 'right' }}>
                                            - {note.author}
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {notes.length === 0 && (
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: C.textMuted,
                                textAlign: 'center',
                                gap: 12,
                                opacity: 0.7,
                            }}>
                                <div style={{ width: 60, height: 60, borderRadius: '50%', background: C.headerBg, display: 'grid', placeItems: 'center' }}>
                                    <Plus size={30} />
                                </div>
                                <p style={{ margin: 0, fontSize: 14 }}>{t('pinboard.empty', 'Nenhuma nota vinculada')}</p>
                            </div>
                        )}
                    </div>

                    <div style={{ padding: '14px 18px', borderTop: `1px solid ${C.borderLight}`, background: C.surface }}>
                        <button
                            onClick={() => {
                                if (!activePinboardTask) return;
                                props.onAddNote?.(activePinboardTask.start, activePinboardTask.projectId);
                            }}
                            style={{
                                width: '100%',
                                padding: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 8,
                                backgroundColor: C.group,
                                color: C.white,
                                border: 'none',
                                borderRadius: 10,
                                fontSize: 14,
                                fontWeight: 700,
                                cursor: 'pointer',
                            }}
                        >
                            <Plus size={18} /> {t('pinboard.newBtn', 'Nova Nota nesta Etapa')}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
