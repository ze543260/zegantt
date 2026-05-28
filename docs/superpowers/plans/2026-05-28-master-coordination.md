# ZeGantt UI Improvements — Master Coordination Plan

> **Para subagents:** Este é o documento de coordenação. Cada batch tem seu próprio plano detalhado. Leia este arquivo para entender a ordem de execução e as dependências entre branches.

**Goal:** Implementar 17 melhorias de UI e novas funcionalidades no ZeGantt via 6 subagents paralelos em worktrees isolados.

**Architecture:** Cada batch trabalha em branch separado. Batches 1, 2, 3 e 6 não têm dependências entre si e rodam em paralelo. Batch 4 deve mergear antes do Batch 5 (multi-select estende o contexto que Batch 4 modifica).

---

## Batches e Planos

| Batch | Branch | Plano | Pode rodar em paralelo com |
|-------|--------|-------|---------------------------|
| 1 — Timeline & Header | `feat/batch1-timeline` | `2026-05-28-batch1-timeline.md` | 2, 3, 6 |
| 2 — Task Bars & Arrows | `feat/batch2-bars` | `2026-05-28-batch2-bars.md` | 1, 3, 6 |
| 3 — Grid & Sidebar | `feat/batch3-grid` | `2026-05-28-batch3-grid.md` | 1, 2, 6 |
| 4 — Interactions | `feat/batch4-interactions` | `2026-05-28-batch4-interactions.md` | 1, 2, 3, 6 |
| 5 — Multi-select | `feat/batch5-multiselect` | `2026-05-28-batch5-multiselect.md` | ❌ aguardar batch 4 |
| 6 — Global Features | `feat/batch6-global` | `2026-05-28-batch6-global.md` | 1, 2, 3, 4 |

## Ordem de Merge

```
main ← merge batch1 (timeline)   ┐
main ← merge batch2 (bars)       │ paralelo
main ← merge batch3 (grid)       │
main ← merge batch6 (global)     ┘
main ← merge batch4 (interactions)
main ← merge batch5 (multiselect)  ← depende de batch4 mergeado
```

## Features por Batch

**Batch 1:** Botão "Ir para Hoje" · Números de Semana · View Mode "Semana"  
**Batch 2:** Label fora de barras estreitas · Setas por tipo de dependência · Lag nas setas  
**Batch 3:** Progresso agregado nos grupos · Sidebar redimensionável · Skeleton loading  
**Batch 4:** Edição inline de progresso · Undo/Redo de drag/resize  
**Batch 5:** Seleção múltipla de tarefas  
**Batch 6:** Feriados customizáveis · Busca por texto · Dark mode · Export PNG/PDF

## Comandos para subagent usar em cada batch

```bash
# Dentro do worktree isolado
git checkout -b feat/batchN-name
npm run test         # vitest
npm run build        # vite build
```

## Arquivos sensíveis (tocar com cuidado — múltiplos batches dependem deles)

- `src/types.ts` — cada batch que adiciona props deve adicionar no final da interface, evitando conflito
- `src/types/internal.ts` — somente batch1 (ViewMode) e batch5 (selectedTaskIds) modificam
- `src/context/GanttContext.tsx` — somente batch4 e batch5 modificam (sequencialmente)
- `src/utils/dependencies.ts` — somente batch2 modifica (ArrowPath)
