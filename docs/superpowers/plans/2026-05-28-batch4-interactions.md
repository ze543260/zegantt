# Batch 4 — Interactions: Inline Progress & Undo/Redo

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Edição inline de progresso via slider no popup de tarefa, e undo/redo de operações de drag/resize com Ctrl+Z.

**Architecture:** Undo/redo vive em um hook `useUndoHistory` isolado, chamado em ProjectGantt.tsx. A edição de progresso adiciona um slider no popup existente em GanttChart.tsx. Ambos adicionam callbacks opcionais em types.ts.

**Tech Stack:** React 18, TypeScript, Vitest

---

## Files

- Create: `src/hooks/useUndoHistory.ts` — hook de histórico de operações
- Modify: `src/types.ts` — `onProgressChange` e `onUndoHistoryChange`
- Modify: `src/context/GanttContext.tsx` — undo/redo state
- Modify: `src/ProjectGantt.tsx` — undo/redo integration + keyboard handler
- Modify: `src/components/GanttChart/index.tsx` — slider de progresso no popup
- Modify: `src/components/GanttHeader/index.tsx` — botões undo/redo

---

### Task 1: Hook useUndoHistory

**Files:**
- Create: `src/hooks/useUndoHistory.ts`

- [ ] **Step 1: Escrever o hook**

```typescript
// src/hooks/useUndoHistory.ts
import { useCallback, useRef, useState } from 'react';

export interface HistoryEntry {
    taskId: string;
    prevStart: Date;
    prevEnd: Date;
    nextStart: Date;
    nextEnd: Date;
}

const MAX_HISTORY = 20;

export function useUndoHistory(onTaskChange?: (taskId: string, start: Date, end: Date) => void) {
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);
    const undoStack = useRef<HistoryEntry[]>([]);
    const redoStack = useRef<HistoryEntry[]>([]);

    const sync = useCallback(() => {
        setCanUndo(undoStack.current.length > 0);
        setCanRedo(redoStack.current.length > 0);
    }, []);

    const push = useCallback((entry: HistoryEntry) => {
        undoStack.current.push(entry);
        if (undoStack.current.length > MAX_HISTORY) undoStack.current.shift();
        redoStack.current = [];
        sync();
    }, [sync]);

    const undo = useCallback(() => {
        const entry = undoStack.current.pop();
        if (!entry) return;
        redoStack.current.push(entry);
        onTaskChange?.(entry.taskId, entry.prevStart, entry.prevEnd);
        sync();
    }, [onTaskChange, sync]);

    const redo = useCallback(() => {
        const entry = redoStack.current.pop();
        if (!entry) return;
        undoStack.current.push(entry);
        onTaskChange?.(entry.taskId, entry.nextStart, entry.nextEnd);
        sync();
    }, [onTaskChange, sync]);

    const clear = useCallback(() => {
        undoStack.current = [];
        redoStack.current = [];
        sync();
    }, [sync]);

    return { push, undo, redo, clear, canUndo, canRedo };
}
```

- [ ] **Step 2: Commit**

```bash
git add src/hooks/useUndoHistory.ts
git commit -m "feat: add useUndoHistory hook"
```

---

### Task 2: Integrar undo/redo em ProjectGantt.tsx

**Files:**
- Modify: `src/types.ts`
- Modify: `src/ProjectGantt.tsx`
- Modify: `src/context/GanttContext.tsx`

- [ ] **Step 1: Adicionar callbacks em types.ts**

```typescript
// src/types.ts — em ProjectGanttProps:
/** Called when progress is updated via inline slider */
onProgressChange?: (taskId: string, percent: number) => void;
```

- [ ] **Step 2: Instanciar useUndoHistory em ProjectGantt.tsx**

```typescript
// Adicionar import:
import { useUndoHistory } from './hooks/useUndoHistory';

// No corpo de ProjectGantt, após os estados existentes:
const undoHistory = useUndoHistory((taskId, start, end) => {
    const task = data.tasks.find(t => t.id === taskId);
    if (!task) return;
    props.onTaskChange?.({
        id: taskId, name: task.name,
        start, end,
        type: task.originalType === 'step' ? 'task' : 'milestone',
        progress: task.progress,
    });
});
```

- [ ] **Step 3: Registrar entrada de histórico após drag/resize**

No handler `onUp` do drag (linha ~350 em ProjectGantt.tsx), após o `onTaskChange` existente:

```typescript
// Após onTaskChange({ ... }):
undoHistory.push({
    taskId: dragState.task.id,
    prevStart: dragState.originalStart,
    prevEnd: dragState.originalEnd,
    nextStart: addDays(dragState.originalStart, dragState.offsetDays),
    nextEnd: addDays(dragState.originalEnd, dragState.offsetDays),
});
```

No handler `onUp` do resize (linha ~395):

```typescript
// Após onTaskChange({ ... }):
undoHistory.push({
    taskId: resizeState.task.id,
    prevStart: resizeState.originalStart,
    prevEnd: resizeState.originalEnd,
    nextStart: newStart,
    nextEnd: newEnd,
});
```

- [ ] **Step 4: Keyboard handler global para Ctrl+Z e Ctrl+Shift+Z**

```typescript
// Em ProjectGantt.tsx, adicionar useEffect:
useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
        const isMac = navigator.platform.toUpperCase().includes('MAC');
        const ctrlOrCmd = isMac ? e.metaKey : e.ctrlKey;
        if (!ctrlOrCmd) return;
        if (e.key === 'z' && !e.shiftKey) {
            e.preventDefault();
            undoHistory.undo();
        }
        if ((e.key === 'z' && e.shiftKey) || e.key === 'y') {
            e.preventDefault();
            undoHistory.redo();
        }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
}, [undoHistory]);
```

- [ ] **Step 5: Expor undo/redo no contexto**

```typescript
// src/context/GanttContext.tsx — em GanttContextState:
canUndo: boolean;
canRedo: boolean;
undo: () => void;
redo: () => void;

// src/ProjectGantt.tsx — no contextValue:
canUndo: undoHistory.canUndo,
canRedo: undoHistory.canRedo,
undo: undoHistory.undo,
redo: undoHistory.redo,
```

- [ ] **Step 6: Commit**

```bash
git add src/types.ts src/ProjectGantt.tsx src/context/GanttContext.tsx
git commit -m "feat: integrate undo/redo with Ctrl+Z keyboard handler"
```

---

### Task 3: Botões undo/redo no header

**Files:**
- Modify: `src/components/GanttHeader/index.tsx`

- [ ] **Step 1: Adicionar botões ao GanttHeader**

```typescript
// Adicionar ao destructuring de useGanttContext:
const { ..., canUndo, canRedo, undo, redo } = useGanttContext();
```

```tsx
{/* Adicionar antes dos filtros de tipo, dentro do zg-header-controls: */}
{!isInfiniteCanvas && (
    <div style={{ display: 'flex', gap: 4 }}>
        <button
            onClick={undo}
            disabled={!canUndo}
            title="Desfazer (Ctrl+Z)"
            style={{
                width: 30, height: 30, borderRadius: 6, border: `1px solid ${C.borderLight}`,
                background: C.surface, cursor: canUndo ? 'pointer' : 'default',
                opacity: canUndo ? 1 : 0.35, display: 'grid', placeItems: 'center',
                fontSize: 14, color: C.textPrimary, transition: 'opacity 0.15s',
            }}
            aria-label="Undo"
        >
            ↩
        </button>
        <button
            onClick={redo}
            disabled={!canRedo}
            title="Refazer (Ctrl+Shift+Z)"
            style={{
                width: 30, height: 30, borderRadius: 6, border: `1px solid ${C.borderLight}`,
                background: C.surface, cursor: canRedo ? 'pointer' : 'default',
                opacity: canRedo ? 1 : 0.35, display: 'grid', placeItems: 'center',
                fontSize: 14, color: C.textPrimary, transition: 'opacity 0.15s',
            }}
            aria-label="Redo"
        >
            ↪
        </button>
    </div>
)}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/GanttHeader/index.tsx
git commit -m "feat: undo/redo buttons in header"
```

---

### Task 4: Edição inline de progresso no popup

**Files:**
- Modify: `src/components/GanttChart/index.tsx`

- [ ] **Step 1: Adicionar estado de progresso local no popup**

No topo do componente `GanttChart`, adicionar:

```typescript
import { useState as useLocalState } from 'react'; // já importado como useState normalmente
// Adicionar state local para o slider (não precisa de contexto):
const [localProgress, setLocalProgress] = useLocalState<number | null>(null);
```

- [ ] **Step 2: Adicionar slider na seção de ações do popup**

Dentro do popup de task action (onde estão os botões View/Edit/Delete), adicionar após os botões e antes da seção de relações:

```tsx
{/* Progress section — apenas para steps */}
{t2.originalType === 'step' && props.onProgressChange && (
    <div style={{ padding: '10px 14px', borderTop: `1px solid ${C.borderLight}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.textTitle }}>
                {t('charts.gantt.progress', 'Progress')}
            </span>
            <span style={{ fontSize: 13, fontWeight: 800, color: C.group }}>
                {localProgress ?? Math.round(t2.progress)}%
            </span>
        </div>
        <input
            type="range"
            min={0}
            max={100}
            step={1}
            defaultValue={Math.round(t2.progress)}
            onChange={(e) => setLocalProgress(Number(e.target.value))}
            onMouseUp={(e) => {
                const val = Number((e.target as HTMLInputElement).value);
                props.onProgressChange?.(t2.id, val);
                setLocalProgress(null);
                closePopup();
            }}
            style={{
                width: '100%',
                accentColor: C.group,
                cursor: 'pointer',
            }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: C.textMuted, marginTop: 2 }}>
            <span>0%</span><span>100%</span>
        </div>
    </div>
)}
```

> **Nota:** `localProgress` é usado apenas para exibir o valor em tempo real durante o drag do slider. O `onMouseUp` confirma e fecha o popup.

> **Nota 2:** `props.onProgressChange` vem de `useGanttContext().props`. Certifique-se de que `props` está acessível no escopo do popup (já está via `useGanttContext`).

- [ ] **Step 3: Rodar build**

```bash
npm run build 2>&1 | head -30
```
Expected: sem erros

- [ ] **Step 4: Commit**

```bash
git add src/components/GanttChart/index.tsx
git commit -m "feat: inline progress slider in task action popup"
```

---

### Task 5: Build e testes finais

- [ ] **Step 1: Rodar todos os testes**

```bash
npm run test
```
Expected: PASS

- [ ] **Step 2: Build final**

```bash
npm run build
```

- [ ] **Step 3: Commit final**

```bash
git add -A
git commit -m "feat(batch4): interactions — undo/redo, inline progress editing"
```
