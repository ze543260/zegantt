# Batch 6 — Global Features: Feriados, Busca, Dark Mode, Export

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Quatro features globais independentes: feriados customizáveis no grid, busca por texto no header, preset de dark mode, e export PNG/PDF.

**Architecture:** Feriados são processados em useGanttData e renderizados no SVG do GanttChart. Busca usa estado no contexto com debounce local. Dark mode é apenas CSS variables em theme.ts. Export usa html-to-image (sem jsPDF — dependência pesada; usar apenas PNG por padrão, PDF como instrução de uso).

**Tech Stack:** React 18, TypeScript, `html-to-image` (nova dep opcional)

---

## Files

- Modify: `src/types.ts` — `nonWorkingDays`, `GanttNonWorkingDay`, `searchQuery`
- Modify: `src/utils/theme.ts` — `darkTheme` preset e `darkVariables`
- Modify: `src/index.ts` — exportar `darkTheme`
- Modify: `src/hooks/useGanttData.ts` — processar nonWorkingDays
- Modify: `src/context/GanttContext.tsx` — searchQuery state
- Modify: `src/ProjectGantt.tsx` — nonWorkingDays + search state + export ref
- Modify: `src/components/GanttChart/index.tsx` — SVG feriados + export ref
- Modify: `src/components/GanttHeader/index.tsx` — search input + export button
- Create: `src/hooks/useGanttExport.ts` — hook de export PNG

---

### Task 1: Tipo GanttNonWorkingDay e prop nonWorkingDays

**Files:**
- Modify: `src/types.ts`

- [ ] **Step 1: Adicionar tipo e prop**

```typescript
// src/types.ts — adicionar antes de ProjectGanttProps:
export interface GanttNonWorkingDay {
    date: Date | string;
    label?: string;
}

// Dentro de ProjectGanttProps:
/** Dates to mark as non-working (holidays, shutdowns). Distinct from weekends. */
nonWorkingDays?: GanttNonWorkingDay[];
```

- [ ] **Step 2: Commit**

```bash
git add src/types.ts
git commit -m "feat: add GanttNonWorkingDay type and nonWorkingDays prop"
```

---

### Task 2: Processar feriados em useGanttData e renderizar no SVG

**Files:**
- Modify: `src/hooks/useGanttData.ts`
- Modify: `src/components/GanttChart/index.tsx`
- Modify: `src/context/GanttContext.tsx`

- [ ] **Step 1: Computar nonWorkingDaySet em useGanttData**

```typescript
// Em useGanttData, adicionar ao retorno:
const nonWorkingDaySet = useMemo(() => {
    const set = new Set<string>();
    for (const nwd of (props.nonWorkingDays ?? [])) {
        const d = nwd.date instanceof Date ? nwd.date : new Date(nwd.date);
        if (!isNaN(d.getTime())) {
            set.add(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`);
        }
    }
    return set;
}, [props.nonWorkingDays]);

// No retorno da função:
return { ..., nonWorkingDaySet };
```

- [ ] **Step 2: Expor nonWorkingDaySet no contexto**

```typescript
// src/context/GanttContext.tsx — em GanttContextState:
nonWorkingDaySet: Set<string>;

// src/ProjectGantt.tsx — no contextValue:
nonWorkingDaySet: data.nonWorkingDaySet,
```

- [ ] **Step 3: Renderizar feriados no SVG do GanttChart**

Em `src/components/GanttChart/index.tsx`, dentro do SVG de background, após os rects de weekend:

```tsx
const { ..., nonWorkingDaySet } = useGanttContext();

{/* Holiday overlay — após os weekends */}
{viewMode === 'day' && virtualDays.map((virtualDay) => {
    const d = timeline.days[virtualDay.index];
    if (!d) return null;
    const key = `${d.date.getFullYear()}-${d.date.getMonth()}-${d.date.getDate()}`;
    if (!nonWorkingDaySet.has(key)) return null;
    return (
        <rect
            key={`hol-${virtualDay.index}`}
            x={virtualDay.start}
            y={0}
            width={virtualDay.size}
            height={contentH}
            fill="rgba(205,98,0,0.12)"
        />
    );
})}
```

- [ ] **Step 4: Tooltip no header do dia para feriados**

Em GanttChart, no header de dias (bottom row), quando o dia é feriado, adicionar `title` com o label:

```tsx
// No map de virtualDays do header, buscar o label do feriado:
const holidayLabel = (() => {
    if (!props.nonWorkingDays) return null;
    const key = `${d.date.getFullYear()}-${d.date.getMonth()}-${d.date.getDate()}`;
    if (!nonWorkingDaySet.has(key)) return null;
    const nwd = props.nonWorkingDays.find(n => {
        const nd = n.date instanceof Date ? n.date : new Date(n.date);
        return `${nd.getFullYear()}-${nd.getMonth()}-${nd.getDate()}` === key;
    });
    return nwd?.label ?? 'Holiday';
})();

// No div do dia, adicionar:
title={holidayLabel ?? undefined}
style={{
    ...,
    background: holidayLabel ? 'rgba(205,98,0,0.08)' : undefined,
}}
```

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useGanttData.ts src/context/GanttContext.tsx src/ProjectGantt.tsx src/components/GanttChart/index.tsx
git commit -m "feat: render non-working days (holidays) with orange tint in SVG grid"
```

---

### Task 3: Dark mode preset

**Files:**
- Modify: `src/utils/theme.ts`
- Modify: `src/index.ts`

- [ ] **Step 1: Adicionar darkTheme em theme.ts**

```typescript
// src/utils/theme.ts — adicionar após a função generateGanttTheme:

export const darkTheme: GanttTheme = {
    primary: '#4ade80',
    primaryContrast: '#0a0a0a',
    surface: '#1a1a2e',
    surfaceAlt: '#16213e',
    headerBg: '#0f3460',
    border: '#2d2d4a',
    borderLight: '#252545',
    textPrimary: '#e2e8f0',
    textSecondary: '#94a3b8',
    textMuted: '#475569',
    milestone: '#4ade80',
    event: '#fb923c',
    note: '#fbbf24',
    today: '#f87171',
    weekendBg: '#1e1e38',
    customVariables: {
        '--zg-group': '#4ade80',
        '--zg-group-soft': 'rgba(74,222,128,0.08)',
        '--zg-group-soft-strong': 'rgba(74,222,128,0.15)',
        '--zg-group-light': '#166534',
        '--zg-page-bg': '#0d0d1a',
        '--zg-surface-frost': 'rgba(26,26,46,0.96)',
        '--zg-ink-strong': '#f1f5f9',
        '--zg-note-default-bg': '#92400e',
        '--zg-milestone-ring': '#166534',
        '--zg-milestone-ring-soft': 'rgba(22,101,52,0.2)',
        '--zg-milestone-pill-bg': '#14532d',
        '--zg-event-soft': 'rgba(251,146,60,0.1)',
        '--zg-event-border-soft': 'rgba(251,146,60,0.3)',
        '--zg-event-pill-bg': '#7c2d12',
        '--zg-shadow-panel': '0 10px 40px rgba(0,0,0,0.5)',
        '--zg-shadow-popover': '0 8px 30px rgba(0,0,0,0.6)',
        '--zg-sticky-tape': 'rgba(255,255,255,0.15)',
    },
};
```

- [ ] **Step 2: Exportar darkTheme em index.ts**

```typescript
// src/index.ts — adicionar:
export { darkTheme } from './utils/theme';
```

- [ ] **Step 3: Commit**

```bash
git add src/utils/theme.ts src/index.ts
git commit -m "feat: add darkTheme preset export"
```

---

### Task 4: Busca por texto

**Files:**
- Modify: `src/context/GanttContext.tsx`
- Modify: `src/ProjectGantt.tsx`
- Modify: `src/hooks/useGanttData.ts`
- Modify: `src/components/GanttHeader/index.tsx`

- [ ] **Step 1: Adicionar searchQuery ao contexto**

```typescript
// src/context/GanttContext.tsx — em GanttContextState:
searchQuery: string;
setSearchQuery: (q: string) => void;
```

- [ ] **Step 2: Adicionar estado em ProjectGantt.tsx**

```typescript
const [searchQuery, setSearchQuery] = useState('');

// No contextValue:
searchQuery,
setSearchQuery,
```

- [ ] **Step 3: Filtrar displayRows por searchQuery em useGanttData**

No retorno de `useGanttData`, os `displayRows` precisam filtrar tasks cujo nome não inclui a query.

```typescript
// useGanttData recebe searchQuery como parâmetro:
// Adicionar ao tipo de parâmetros:
searchQuery?: string;

// Na computação de displayRows (onde rows são geradas), filtrar tasks:
const normalizedQuery = (searchQuery || '').toLowerCase().trim();
// Ao montar as rows, pular task rows onde:
if (normalizedQuery && !task.name.toLowerCase().includes(normalizedQuery)) continue;
// (grupos e project headers são sempre mostrados, mesmo sem matches — ou ocultados se todos os filhos forem filtrados)
```

- [ ] **Step 4: Passar searchQuery em ProjectGantt.tsx para useGanttData**

```typescript
const data = useGanttData({
    ...,
    searchQuery,
});
```

- [ ] **Step 5: Adicionar search input no GanttHeader**

```tsx
// src/components/GanttHeader/index.tsx
import { Search, X } from 'lucide-react';

const { ..., searchQuery, setSearchQuery } = useGanttContext();

// Adicionar input de busca no header, antes dos filtros de tipo:
<div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
    <Search
        size={13}
        style={{
            position: 'absolute', left: 10, color: C.textSecondary, pointerEvents: 'none',
        }}
    />
    <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder={t('gantt.search.placeholder', 'Buscar...')}
        style={{
            paddingLeft: 30, paddingRight: searchQuery ? 28 : 10,
            paddingTop: 7, paddingBottom: 7,
            border: `1.5px solid ${searchQuery ? C.group : C.borderLight}`,
            borderRadius: 8, fontSize: 12, outline: 'none',
            background: C.surface, color: C.textPrimary,
            width: 160, transition: 'border-color 0.18s, width 0.2s',
        }}
        onFocus={e => { e.currentTarget.style.width = '220px'; }}
        onBlur={e => { if (!searchQuery) e.currentTarget.style.width = '160px'; }}
    />
    {searchQuery && (
        <button
            onClick={() => setSearchQuery('')}
            style={{
                position: 'absolute', right: 6,
                background: 'none', border: 'none',
                cursor: 'pointer', color: C.textSecondary,
                display: 'grid', placeItems: 'center',
                padding: 2,
            }}
        >
            <X size={12} />
        </button>
    )}
</div>
```

- [ ] **Step 6: Adicionar Ctrl+F para focar no input**

```typescript
// Em GanttHeader ou ProjectGantt, adicionar:
useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
        const isMac = navigator.platform.toUpperCase().includes('MAC');
        if ((isMac ? e.metaKey : e.ctrlKey) && e.key === 'f') {
            e.preventDefault();
            searchInputRef.current?.focus();
        }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
}, []);
```

> **Nota:** `searchInputRef` é um `useRef<HTMLInputElement>(null)` adicionado ao input acima.

- [ ] **Step 7: Commit**

```bash
git add src/context/GanttContext.tsx src/ProjectGantt.tsx src/hooks/useGanttData.ts src/components/GanttHeader/index.tsx
git commit -m "feat: text search filter with Ctrl+F keyboard shortcut"
```

---

### Task 5: Export PNG via useGanttExport

**Files:**
- Create: `src/hooks/useGanttExport.ts`
- Modify: `src/components/GanttHeader/index.tsx`
- Modify: `src/index.ts`

- [ ] **Step 1: Instalar html-to-image**

```bash
npm install html-to-image
```

- [ ] **Step 2: Criar o hook**

```typescript
// src/hooks/useGanttExport.ts
import { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

export interface GanttExportOptions {
    filename?: string;
    scale?: number;
}

export function useGanttExport() {
    const exportRef = useRef<HTMLDivElement>(null);

    const exportPng = useCallback(async (options: GanttExportOptions = {}) => {
        const node = exportRef.current;
        if (!node) return;
        const { filename = 'gantt-chart', scale = 2 } = options;

        // Ocultar temporariamente controles que não devem aparecer na captura
        const controls = node.querySelectorAll<HTMLElement>('.zg-header-controls, [data-popup], [data-menu]');
        controls.forEach(el => { el.dataset.exportHidden = el.style.visibility; el.style.visibility = 'hidden'; });

        try {
            const dataUrl = await toPng(node, { pixelRatio: scale, cacheBust: true });
            const link = document.createElement('a');
            link.download = `${filename}.png`;
            link.href = dataUrl;
            link.click();
        } finally {
            controls.forEach(el => {
                el.style.visibility = el.dataset.exportHidden ?? '';
                delete el.dataset.exportHidden;
            });
        }
    }, []);

    return { exportRef, exportPng };
}
```

- [ ] **Step 3: Integrar no ProjectGantt.tsx**

```typescript
import { useGanttExport } from './hooks/useGanttExport';

// No corpo de ProjectGantt:
const { exportRef, exportPng } = useGanttExport();

// No contextValue:
exportPng,

// Na div raiz do Gantt, adicionar ref:
<div ref={exportRef} className="zg-root ..." style={{ ... }}>
```

- [ ] **Step 4: Adicionar ao contexto e GanttHeader**

```typescript
// src/context/GanttContext.tsx — GanttContextState:
exportPng: (options?: { filename?: string; scale?: number }) => Promise<void>;
```

```tsx
// src/components/GanttHeader/index.tsx
import { Download } from 'lucide-react';
const { ..., exportPng } = useGanttContext();

// Botão de export (após o botão "Hoje"):
<button
    onClick={() => exportPng({ filename: props.projectName || 'gantt' })}
    title={t('gantt.export.png', 'Export PNG')}
    style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '8px 12px', borderRadius: 8,
        border: `1.5px solid ${C.borderLight}`, background: C.surface,
        color: C.textPrimary, cursor: 'pointer',
        fontSize: 12, fontWeight: 600,
        transition: 'all 0.18s',
    }}
>
    <Download size={14} />
    PNG
</button>
```

- [ ] **Step 5: Exportar hook em index.ts**

```typescript
// src/index.ts:
export { useGanttExport } from './hooks/useGanttExport';
export type { GanttExportOptions } from './hooks/useGanttExport';
```

- [ ] **Step 6: Commit**

```bash
git add src/hooks/useGanttExport.ts src/ProjectGantt.tsx src/context/GanttContext.tsx src/components/GanttHeader/index.tsx src/index.ts package.json package-lock.json
git commit -m "feat: PNG export via useGanttExport hook and header button"
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
Expected: `dist/zegantt.js`, `dist/zegantt.cjs`, `dist/index.d.ts` gerados sem erros

- [ ] **Step 3: Verificar que darkTheme está no bundle**

```bash
node -e "const {darkTheme} = require('./dist/zegantt.cjs'); console.log(darkTheme?.primary)"
```
Expected: `#4ade80`

- [ ] **Step 4: Commit final**

```bash
git add -A
git commit -m "feat(batch6): global — holidays, text search, dark mode, PNG export"
```
