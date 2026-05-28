# ZeGantt — UI Improvements & New Features Design
**Date:** 2026-05-28  
**Scope:** Complete UI improvements + new features roadmap for parallel implementation

---

## Overview

ZeGantt is a React Gantt library for construction/project planning. This spec covers 17 improvements identified through codebase analysis, organized into parallel implementation batches based on file ownership and dependency isolation.

---

## Items Scoped

### Group A — Timeline & Header Controls
Files primarily touched: `GanttHeader/index.tsx`, `utils/timeline.ts`, `utils/constants.ts`, `context/GanttContext.tsx`

**A1. Botão "Ir para Hoje"**  
- Button in header near view mode controls
- Smooth scroll to `todayIndex` position in chart
- Only visible when today is outside current viewport
- Callback via `rightBodyRef.current.scrollTo()`

**A2. Números de Semana no Header**  
- ISO 8601 week numbers (W01–W53) in day-view header
- Appears at start of each Monday column
- Controlled via prop `showWeekNumbers?: boolean`
- Helper function in `date.ts`

**A3. View Mode "Semana"**  
- Third segmented option alongside Day/Month
- DAY_W_WEEK constant (~18px/day), span ~90 days
- Header: month on top, week groupings on bottom
- New `ViewMode` value: `'week'`

---

### Group B — Task Bar & Arrow Visuals
Files primarily touched: `components/GanttTaskBar/index.tsx`, `components/GanttArrows/index.tsx`

**B1. Label Fora de Barras Estreitas**  
- When `w < 55px`, render task name to the right of the bar
- Text color follows task state (critical=red, delayed=red, normal=primary)
- Ellipsis clip with max-width
- Prop `showLabelOutside?: boolean` (default: true)

**B2. Setas de Dependência por Tipo**  
- FS → `C.group` (green, solid)
- SS → `C.event` (orange, dashed)
- FF → purple (#7c3aed, double-dash)
- SF → blue (#0369a1, solid)
- SVG marker per type in `GanttArrows`

**B3. Lag Visível nas Setas**  
- When `dep.lag !== 0`, render `+Xd` / `-Xd` label at midpoint of arrow
- White background rect behind text for legibility
- Font: 9px, bold, colored per dep type

---

### Group C — Grid & Sidebar Enhancements
Files primarily touched: `components/GanttGrid/index.tsx`, `utils/constants.ts`

**C1. Progress Agregado nos Grupos**  
- Group rows show: count badge + mini progress bar (avg %) + percent label
- Computed from tasks in the group
- Applies to both type groups and project header rows (`groupByProject`)

**C2. Sidebar Redimensionável**  
- Drag handle (5px wide div) between GanttGrid and GanttChart
- `useState(LEFT_W)` in `ProjectGantt.tsx`
- `localStorage` persistence under key `zg-sidebar-w`
- Min: 200px, Max: 700px
- Expose controlled prop `sidebarWidth?: number`

**C3. Skeleton Loading State**  
- When `loading={true}`, render shimmer rows in sidebar and placeholder bars in chart
- 5 skeleton rows, random bar widths/positions
- CSS animation `shimmer` via keyframes (no external dep)

---

### Group D — New Interaction Features
Files primarily touched: `context/GanttContext.tsx`, `components/GanttChart/index.tsx`, `hooks/`

**D1. Edição Inline de Progresso**  
- Add progress section to existing task action popup
- Slider (`<input type="range">`) with live preview on bar
- Confirm on blur/Enter, cancel on Escape
- New callback: `onProgressChange?: (taskId: string, percent: number) => void`

**D2. Undo / Redo de Drag & Resize**  
- History stack (max 20) in context: `undoStack: HistoryEntry[]`
- Entry: `{ taskId, prevStart, prevEnd, nextStart, nextEnd }`
- Keyboard: `Ctrl+Z` (undo), `Ctrl+Shift+Z` (redo)
- Buttons in header (disabled when stack empty)
- `onTaskChange` fires only after each committed action

**D3. Seleção Múltipla**  
- `selectedTaskIds: Set<string>` replaces `selectedTaskId: string | null`
- `Ctrl+Click` toggles, `Shift+Click` selects range
- Bulk action bar appears at bottom when ≥2 selected
- New callbacks: `onBulkDelete?(ids: string[])`, `onBulkProgressChange?(ids: string[], percent: number)`

---

### Group E — New Global Features
Files primarily touched: `types.ts`, `components/GanttChart/index.tsx` (SVG), `utils/theme.ts`, new files

**E1. Feriados e Dias Não-Úteis**  
- New prop `nonWorkingDays?: (Date | string)[]`
- Render orange-tinted background in SVG grid (distinct from weekend gray)
- Tooltip on hover with optional reason string
- Type: `GanttNonWorkingDay = { date: Date | string; label?: string }`

**E2. Busca por Texto**  
- Search input in header (controlled), debounced 300ms
- Filters all visible types by name match
- Highlights matched text in sidebar rows
- Activated by `Ctrl+F` / `Cmd+F`
- Shows count badge: "X resultados"

**E3. Dark Mode**  
- New `darkTheme` preset exported from lib
- Named `export const darkTheme: GanttTheme`
- Respects `prefers-color-scheme` when `theme` prop = `'auto'`
- ~20 variable overrides in `theme.ts`

**E4. Export PNG / PDF**  
- New hook `useGanttExport(ref)` exported from lib
- PNG: `html-to-image` (or canvas-based fallback)
- PDF: `jsPDF` + image embed
- Options: `{ scope: 'visible' | 'full', filename?: string }`
- New callbacks: `onExportStart?`, `onExportEnd?`

---

## Dependency Map

```
A1 (Ir para hoje)   → needs todayIndex from timeline (no blocking dep)
A2 (Semanas)        → isolated to timeline header
A3 (View Semana)    → extends ViewMode type, touches timeline + header
B1 (Label fora)     → isolated to GanttTaskBar
B2 (Setas tipo)     → isolated to GanttArrows  
B3 (Lag setas)      → isolated to GanttArrows (can be with B2)
C1 (Grupo progress) → isolated to GanttGrid
C2 (Sidebar resize) → touches ProjectGantt layout + constants
C3 (Skeleton)       → isolated to ProjectGantt + GanttGrid
D1 (Inline progress)→ new callback in types.ts, popup in GanttChart
D2 (Undo/redo)      → touches context + hooks — no dependency on others
D3 (Multi-select)   → changes selectedTaskId → selectedTaskIds — touching point with D1
E1 (Feriados)       → new prop in types.ts + SVG in GanttChart
E2 (Busca)          → new state in context + header UI
E3 (Dark mode)      → CSS only, theme.ts
E4 (Export)         → new hook/util file, minimal component touch
```

---

## Parallel Batch Strategy

Given worktree isolation, group by file ownership to minimize merge conflicts:

| Batch | Agent | Items | Core Files |
|-------|-------|-------|------------|
| 1 | agent-timeline | A1 + A2 + A3 | GanttHeader, timeline.ts, constants.ts |
| 2 | agent-bars | B1 + B2 + B3 | GanttTaskBar, GanttArrows |
| 3 | agent-grid | C1 + C2 + C3 | GanttGrid, ProjectGantt |
| 4 | agent-interactions | D1 + D2 | GanttContext, GanttChart popup, hooks |
| 5 | agent-multiselect | D3 | GanttContext, GanttGrid, GanttChart |
| 6 | agent-global | E1 + E2 + E3 + E4 | types.ts, theme.ts, new files |

Batches 1, 2, 3, 6 can run fully in parallel.  
Batch 4 should complete before Batch 5 (multi-select extends the context D2 changes).

---

## Non-Goals

- No backend/server changes
- No breaking changes to existing `ProjectGanttProps` (all new props are optional)
- No changes to build/bundler config
- No new mandatory peer dependencies (new deps must be optional or peer)
