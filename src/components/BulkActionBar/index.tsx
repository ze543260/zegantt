// src/components/BulkActionBar/index.tsx
import { useState } from 'react';
import { useGanttContext } from '../../context/GanttContext';
import { C } from '../../utils/constants';

export function BulkActionBar() {
    const { props, selectedTaskIds, setSelectedTaskIds, t } = useGanttContext();
    const [bulkProgress, setBulkProgress] = useState<number | null>(null);
    const [deleting, setDeleting] = useState(false);
    const [applyingProgress, setApplyingProgress] = useState(false);

    if (selectedTaskIds.size < 2) return null;

    const count = selectedTaskIds.size;
    const ids = [...selectedTaskIds];

    const handleDelete = async () => {
        if (!props.onBulkDelete) return;
        setDeleting(true);
        try {
            await props.onBulkDelete(ids);
            setSelectedTaskIds(new Set());
        } finally {
            setDeleting(false);
        }
    };

    const handleProgressApply = async () => {
        if (!props.onBulkProgressChange || bulkProgress === null) return;
        setApplyingProgress(true);
        try {
            await props.onBulkProgressChange(ids, bulkProgress);
            setBulkProgress(null);
            setSelectedTaskIds(new Set());
        } finally {
            setApplyingProgress(false);
        }
    };

    return (
        <div style={{
            position: 'sticky', bottom: 0, zIndex: 50,
            background: C.group, color: C.white,
            padding: '10px 18px',
            display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
            boxShadow: '0 -4px 16px rgba(0,0,0,0.15)',
        }}>
            <span style={{ fontSize: 13, fontWeight: 700 }}>
                {count} {t('gantt.bulk.selected', 'selecionadas')}
            </span>

            <button
                onClick={() => setSelectedTaskIds(new Set())}
                style={{
                    background: 'rgba(255,255,255,0.15)', border: 'none',
                    color: C.white, padding: '6px 12px', borderRadius: 6,
                    fontSize: 12, fontWeight: 600, cursor: 'pointer',
                }}
            >
                {t('gantt.bulk.clear', 'Limpar seleção')}
            </button>

            {props.onBulkProgressChange && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input
                        type="range" min={0} max={100} step={1}
                        value={bulkProgress ?? 0}
                        onChange={e => setBulkProgress(Number(e.target.value))}
                        style={{ width: 80, accentColor: '#fff' }}
                    />
                    <span style={{ fontSize: 12, minWidth: 30 }}>{bulkProgress ?? '—'}%</span>
                    <button
                        onClick={handleProgressApply}
                        disabled={bulkProgress === null || applyingProgress}
                        style={{
                            background: 'rgba(255,255,255,0.2)', border: 'none',
                            color: C.white, padding: '6px 12px', borderRadius: 6,
                            fontSize: 12, fontWeight: 600,
                            cursor: bulkProgress !== null ? 'pointer' : 'default',
                            opacity: bulkProgress !== null ? 1 : 0.5,
                        }}
                    >
                        {applyingProgress ? '...' : t('gantt.bulk.applyProgress', 'Aplicar %')}
                    </button>
                </div>
            )}

            {props.onBulkDelete && (
                <button
                    onClick={handleDelete}
                    disabled={deleting}
                    style={{
                        marginLeft: 'auto',
                        background: 'rgba(239,68,68,0.8)', border: 'none',
                        color: '#fff', padding: '6px 14px', borderRadius: 6,
                        fontSize: 12, fontWeight: 700,
                        cursor: deleting ? 'wait' : 'pointer',
                    }}
                >
                    {deleting ? '...' : t('gantt.bulk.delete', 'Deletar selecionadas')}
                </button>
            )}
        </div>
    );
}
