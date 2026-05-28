# Batch 5 — Multi-select de Tarefas

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

> ⚠️ **Dependência:** Este batch deve ser executado APÓS o merge do Batch 4. O contexto `GanttContext` foi modificado no batch 4 e este batch estende essas mudanças.

**Goal:** Permitir seleção de múltiplas tarefas com Ctrl+Click e Shift+Click, com barra de ações em lote (mover, atualizar progresso, deletar).

**Architecture:** `selectedTaskId: string | null` é substituído por `selectedTaskIds: Set<string>`. A barra de bulk actions é um novo componente renderizado no rodapé do GanttChart quando ≥2 tarefas estão selecionadas. Novos callbacks `onBulkDelete` e `onBulkProgressChange` são opcionais.

**Tech Stack:** React 18, TypeScript, Vitest

---

## Files

- Modify: `src/types/internal.ts` — não muda (nenhuma mudança de tipo interno)
- Modify: `src/context/GanttContext.tsx` — `selectedTaskIds: Set<string>` + bulk actions
- Modify: `src/ProjectGantt.tsx` — state de multi-select
- Modify: `src/components/GanttGrid/index.tsx` — Ctrl+Click / Shift+Click handlers
- Modify: `src/components/GanttChart/index.tsx` — highlight de múltiplas seleções + bulk bar
- Modify: `src/types.ts` — callbacks `onBulkDelete`, `onBulkProgressChange`
- Create: `src/components/BulkActionBar/index.tsx` — barra de ações em lote

---

### Task 1: Migrar selectedTaskId para selectedTaskIds no contexto

**Files:**
- Modify: `src/context/GanttContext.tsx`
- Modify: `src/ProjectGantt.tsx`

- [ ] **Step 1: Atualizar GanttContextState**

```typescript
// src/context/GanttContext.tsx — substituir:
// REMOVER:
selectedTaskId: string | null;
setSelectedTaskId: (v: string | null | ((prev: string | null) => string | null)) => void;
// ADICIONAR:
selectedTaskIds: Set<string>;
setSelectedTaskIds: (v: Set<string> | ((prev: Set<string>) => Set<string>)) => void;
selectedTaskId: string | null; // mantido para compatibilidade — retorna o último selecionado
```

- [ ] **Step 2: Atualizar estado em ProjectGantt.tsx**

```typescript
// Substituir:
const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
// Por:
const [selectedTaskIds, setSelectedTaskIds] = useState<Set<string>>(new Set());
// Compatibilidade — último selecionado:
const selectedTaskId = selectedTaskIds.size > 0
    ? [...selectedTaskIds].at(-1) ?? null
    : null;
```

- [ ] **Step 3: Atualizar contextValue para passar ambos**

```typescript
// No contextValue useMemo:
selectedTaskIds,
setSelectedTaskIds,
selectedTaskId, // computed acima
setSelectedTaskId: (v) => { // shim de compatibilidade
    const next = typeof v === 'function' ? v(selectedTaskId) : v;
    setSelectedTaskIds(next ? new Set([next]) : new Set());
},
```

- [ ] **Step 4: Commit**

```bash
git add src/context/GanttContext.tsx src/ProjectGantt.tsx
git commit -m "feat: migrate to selectedTaskIds (Set) with backward compat shim"
```

---

### Task 2: Adicionar callbacks de bulk em types.ts

**Files:**
- Modify: `src/types.ts`

- [ ] **Step 1: Adicionar ao ProjectGanttProps**

```typescript
// src/types.ts — em ProjectGanttProps:
/** Called when multiple tasks are deleted in bulk */
onBulkDelete?: (taskIds: string[]) => Promise<void>;
/** Called when progress is updated in bulk for multiple tasks */
onBulkProgressChange?: (taskIds: string[], percent: number) => Promise<void>;
```

- [ ] **Step 2: Commit**

```bash
git add src/types.ts
git commit -m "feat: add onBulkDelete and onBulkProgressChange callbacks"
```

---

### Task 3: Ctrl+Click e Shift+Click no GanttGrid

**Files:**
- Modify: `src/components/GanttGrid/index.tsx`

- [ ] **Step 1: Adicionar selectedTaskIds ao destructuring**

```typescript
const { ..., selectedTaskIds, setSelectedTaskIds } = useGanttContext();
```

- [ ] **Step 2: Atualizar onClick da row de tarefa**

Substituir o `onClick` atual da row:

```typescript
onClick={(e) => {
    const taskId = task.id;
    if (e.ctrlKey || e.metaKey) {
        // Ctrl+Click: toggle individual
        setSelectedTaskIds(prev => {
            const next = new Set(prev);
            if (next.has(taskId)) next.delete(taskId);
            else next.add(taskId);
            return next;
        });
    } else if (e.shiftKey && selectedTaskIds.size > 0) {
        // Shift+Click: selecionar range
        const lastId = [...selectedTaskIds].at(-1);
        if (!lastId) { setSelectedTaskIds(new Set([taskId])); return; }
        const ids = orderedTaskIds;
        const fromIdx = ids.indexOf(lastId);
        const toIdx = ids.indexOf(taskId);
        if (fromIdx < 0 || toIdx < 0) { setSelectedTaskIds(new Set([taskId])); return; }
        const [start, end] = fromIdx < toIdx ? [fromIdx, toIdx] : [toIdx, fromIdx];
        setSelectedTaskIds(new Set(ids.slice(start, end + 1)));
    } else {
        // Click simples: selecionar só este
        setSelectedTaskIds(prev => prev.size === 1 && prev.has(taskId) ? new Set() : new Set([taskId]));
    }
}}
```

- [ ] **Step 3: Atualizar highlight de linha para multi-select**

```typescript
// Trocar `isSel` para checar o Set:
const isSel = selectedTaskIds.has(task.id);
const isLeftDimmed = selectedTaskIds.size > 0 && !isSel && !relatedIds.has(task.id);
```

- [ ] **Step 4: Commit**

```bash
git add src/components/GanttGrid/index.tsx
git commit -m "feat: Ctrl+Click and Shift+Click multi-select in sidebar"
```

---

### Task 4: Criar BulkActionBar

**Files:**
- Create: `src/components/BulkActionBar/index.tsx`

- [ ] **Step 1: Criar o componente**

```typescript
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
```

- [ ] **Step 2: Adicionar BulkActionBar ao ProjectGantt.tsx**

```typescript
// Import:
import { BulkActionBar } from './components/BulkActionBar';

// No JSX, dentro do GanttProvider, após o </div> do body principal e antes do PinboardDrawer:
<BulkActionBar />
```

- [ ] **Step 3: Commit**

```bash
git add src/components/BulkActionBar/index.tsx src/ProjectGantt.tsx
git commit -m "feat: BulkActionBar for multi-select bulk operations"
```

---

### Task 5: Highlight de múltiplas seleções no GanttChart

**Files:**
- Modify: `src/components/GanttChart/index.tsx`

- [ ] **Step 1: Atualizar isBarDimmed e isBarHighlighted para usar selectedTaskIds**

```typescript
// Dentro do virtualRows.map, trocar as linhas de dimmed/highlighted:
const isSel = selectedTaskIds.has(task.id);
const isBarDimmed = selectedTaskIds.size > 0 && !isSel && !relatedIds.has(task.id);
const isBarHighlighted = isSel || (selectedTaskIds.size > 0 && relatedIds.has(task.id));
```

Adicionar `selectedTaskIds` ao destructuring de `useGanttContext()`:
```typescript
const { ..., selectedTaskIds, ... } = useGanttContext();
```

- [ ] **Step 2: Commit**

```bash
git add src/components/GanttChart/index.tsx
git commit -m "feat: multi-select highlight in chart bars"
```

---

### Task 6: Build e testes finais

- [ ] **Step 1: Rodar todos os testes**

```bash
npm run test
```
Expected: PASS

- [ ] **Step 2: Build final**

```bash
npm run build
```
Expected: sem erros TypeScript

- [ ] **Step 3: Commit final**

```bash
git add -A
git commit -m "feat(batch5): multi-select — Ctrl+Click, Shift+Click, bulk actions bar"
```
