# Batch 1 — Timeline & Header Controls

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adicionar botão "Ir para Hoje", números de semana ISO no header, e view mode "Semana" ao ZeGantt.

**Architecture:** Três features independentes que tocam GanttHeader, utils/timeline.ts, utils/date.ts e utils/constants.ts. ViewMode expande de `'day' | 'month'` para `'day' | 'week' | 'month'`.

**Tech Stack:** React 18, TypeScript, Vite, Vitest, lucide-react

---

## Files

- Modify: `src/types/internal.ts` — adicionar `'week'` ao ViewMode
- Modify: `src/utils/constants.ts` — adicionar `DAY_W_WEEK`
- Modify: `src/utils/date.ts` — adicionar `getWeekNumber(d: Date): number`
- Modify: `src/utils/timeline.ts` — suporte a viewMode `'week'`
- Modify: `src/utils/date.test.ts` — testes de getWeekNumber
- Modify: `src/utils/timeline.test.ts` — testes de week view
- Modify: `src/components/GanttHeader/index.tsx` — botão Hoje + semana button + week-number badge
- Modify: `src/components/GanttChart/index.tsx` — week header rendering
- Modify: `src/types.ts` — adicionar `showWeekNumbers?: boolean` em ProjectGanttProps
- Modify: `src/ProjectGantt.tsx` — `scrollToToday` + ViewMode 'week' → dayWidth

---

### Task 1: Adicionar `getWeekNumber` em date.ts

**Files:**
- Modify: `src/utils/date.ts`
- Modify: `src/utils/date.test.ts`

- [ ] **Step 1: Escrever o teste**

```typescript
// src/utils/date.test.ts — adicionar ao bloco de tests existente:
import { getWeekNumber } from './date';

describe('getWeekNumber', () => {
  it('returns 1 for first week of 2026', () => {
    expect(getWeekNumber(new Date(2026, 0, 5))).toBe(2); // Jan 5 = W02
  });
  it('returns 1 for Jan 1 2026 (Thursday)', () => {
    expect(getWeekNumber(new Date(2026, 0, 1))).toBe(1);
  });
  it('returns 53 for Dec 31 2020 (Thursday)', () => {
    expect(getWeekNumber(new Date(2020, 11, 31))).toBe(53);
  });
  it('returns week on monday boundary', () => {
    expect(getWeekNumber(new Date(2026, 0, 12))).toBe(3); // Jan 12 = Monday of W03
  });
});
```

- [ ] **Step 2: Rodar para confirmar que falha**

```bash
npm run test -- date
```
Expected: FAIL — `getWeekNumber` not exported

- [ ] **Step 3: Implementar em date.ts**

Adicionar ao final de `src/utils/date.ts`:

```typescript
/** ISO 8601 week number (1–53) */
export const getWeekNumber = (d: Date): number => {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
};
```

- [ ] **Step 4: Rodar para confirmar que passa**

```bash
npm run test -- date
```
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/utils/date.ts src/utils/date.test.ts
git commit -m "feat: add getWeekNumber ISO 8601 util"
```

---

### Task 2: Adicionar ViewMode 'week' e constante DAY_W_WEEK

**Files:**
- Modify: `src/types/internal.ts`
- Modify: `src/utils/constants.ts`
- Modify: `src/ProjectGantt.tsx`

- [ ] **Step 1: Atualizar ViewMode em internal.ts**

```typescript
// src/types/internal.ts linha 27 — trocar:
export type ViewMode = 'day' | 'month';
// por:
export type ViewMode = 'day' | 'week' | 'month';
```

- [ ] **Step 2: Adicionar constante em constants.ts**

```typescript
// src/utils/constants.ts — após DAY_W_YEAR:
export const DAY_W_WEEK = 18; // px per day in week view (~90 day span visible)
```

- [ ] **Step 3: Atualizar setViewMode em ProjectGantt.tsx**

Localizar `setViewMode` (linha ~109) e trocar:
```typescript
// ANTES:
if (!isInfiniteCanvas) {
    setDayWidth(nextMode === 'day' ? DAY_W_MONTH : DAY_W_YEAR);
}
// DEPOIS:
if (!isInfiniteCanvas) {
    const widthMap: Record<ViewMode, number> = {
        day: DAY_W_MONTH,
        week: DAY_W_WEEK,
        month: DAY_W_YEAR,
    };
    setDayWidth(widthMap[nextMode]);
}
```

Adicionar import de `DAY_W_WEEK` na linha 10:
```typescript
import { C, DAY_W_MONTH, DAY_W_WEEK, DAY_W_YEAR } from './utils/constants';
```

- [ ] **Step 4: Verificar build sem erros**

```bash
npm run build 2>&1 | head -30
```
Expected: sem erros de TypeScript em ViewMode

- [ ] **Step 5: Commit**

```bash
git add src/types/internal.ts src/utils/constants.ts src/ProjectGantt.tsx
git commit -m "feat: add 'week' ViewMode and DAY_W_WEEK constant"
```

---

### Task 3: Suporte a week view em timeline.ts

**Files:**
- Modify: `src/utils/timeline.ts`
- Modify: `src/utils/timeline.test.ts`

- [ ] **Step 1: Ler o arquivo atual de timeline.ts**

```bash
# Leia src/utils/timeline.ts para entender buildTimeline
```

- [ ] **Step 2: Escrever teste para week view**

```typescript
// src/utils/timeline.test.ts — adicionar:
import { buildTimeline } from './timeline';

describe('buildTimeline week view', () => {
  it('produces ~90 day span for week view', () => {
    const start = new Date(2026, 0, 1);
    const tl = buildTimeline([], [], [], [], 'week', 18, 'en');
    expect(tl.days.length).toBeGreaterThan(60);
    expect(tl.days.length).toBeLessThan(120);
  });
  it('uses DAY_W_WEEK as dayWidth', () => {
    const tl = buildTimeline([], [], [], [], 'week', 18, 'en');
    expect(tl.dayWidth).toBe(18);
  });
});
```

- [ ] **Step 3: Rodar para confirmar falha ou comportamento atual**

```bash
npm run test -- timeline
```

- [ ] **Step 4: Atualizar buildTimeline para suportar 'week'**

Em `src/utils/timeline.ts`, localizar a função `buildTimeline`. Onde o span de dias é calculado (baseado em viewMode), adicionar tratamento para `'week'`:

```typescript
// Localizar a lógica que define o range de datas (padding antes/depois).
// O padrão para 'day' usa ~1 mês de padding e para 'month' usa ~6 meses.
// Para 'week', usar 45 dias de padding (3 semanas antes e 6 semanas depois):

const spanPaddingBefore = viewMode === 'month' ? 180 : viewMode === 'week' ? 45 : 30;
const spanPaddingAfter  = viewMode === 'month' ? 180 : viewMode === 'week' ? 45 : 30;
```

> **Nota:** Leia o arquivo real de timeline.ts e adapte a lógica de padding existente. Não sobrescreva lógica de meses/anos — apenas adicione o caso `'week'` nos ternários onde viewMode é verificado.

- [ ] **Step 5: Rodar testes**

```bash
npm run test -- timeline
```
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/utils/timeline.ts src/utils/timeline.test.ts
git commit -m "feat: timeline supports week view mode"
```

---

### Task 4: Adicionar prop showWeekNumbers e botão Hoje em types.ts

**Files:**
- Modify: `src/types.ts`

- [ ] **Step 1: Adicionar props ao final da interface ProjectGanttProps**

```typescript
// src/types.ts — dentro de ProjectGanttProps, antes do último `}`
/** When true, shows ISO week numbers in day/week view header */
showWeekNumbers?: boolean;
```

- [ ] **Step 2: Commit**

```bash
git add src/types.ts
git commit -m "feat: add showWeekNumbers prop to ProjectGanttProps"
```

---

### Task 5: Atualizar GanttHeader com botão Hoje e segmented 'Semana'

**Files:**
- Modify: `src/components/GanttHeader/index.tsx`

- [ ] **Step 1: Adicionar `scrollToToday` ao contexto em ProjectGantt.tsx**

No `contextValue` (linha ~687 de ProjectGantt.tsx), adicionar:

```typescript
// No contextValue useMemo:
scrollToToday: () => {
    const rb = scroll.rightBodyRef.current;
    const th = scroll.timeHeaderRef.current;
    if (!rb || data.timeline.todayIndex < 0) return;
    const targetScrollLeft = Math.max(0, data.timeline.todayIndex * data.timeline.dayWidth - rb.clientWidth / 2);
    rb.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
    if (th) th.scrollLeft = targetScrollLeft;
},
isTodayVisible: false, // calculado abaixo
```

Calcular `isTodayVisible` como:
```typescript
// Antes do contextValue:
const isTodayVisible = useMemo(() => {
    return data.timeline.todayIndex >= 0;
}, [data.timeline.todayIndex]);
```

Adicionar ao `GanttContextState` em `src/context/GanttContext.tsx`:
```typescript
scrollToToday: () => void;
isTodayVisible: boolean;
```

- [ ] **Step 2: Atualizar GanttHeader para usar scrollToToday e novo ViewMode**

```typescript
// src/components/GanttHeader/index.tsx
// Adicionar ao destructuring do useGanttContext:
const { ..., scrollToToday, isTodayVisible } = useGanttContext();

// Botão "Hoje" — adicionar antes do botão "+":
{isTodayVisible && !isInfiniteCanvas && (
    <button
        onClick={scrollToToday}
        style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '8px 14px', borderRadius: 8,
            border: `1.5px solid ${C.group}`, background: 'transparent',
            color: C.group, cursor: 'pointer',
            fontSize: 12, fontWeight: 700,
            transition: 'all 0.18s',
        }}
        title={t('gantt.viewport.today', 'Scroll to today')}
    >
        📍 {t('gantt.viewport.today', 'Hoje')}
    </button>
)}

// Segmented control — trocar o array ['day', 'month'] por:
{(['day', 'week', 'month'] as ViewMode[]).map(m => (
    <button
        key={m}
        className={`zg-segment-btn ${viewMode === m ? 'is-active' : 'is-inactive'}`}
        onClick={() => setViewMode(m)}
        style={{
            padding: '6px 16px', fontSize: 12, fontWeight: 600, borderRadius: 6,
            transition: 'all 0.2s', border: 'none', cursor: 'pointer',
            ...(viewMode === m
                ? { background: C.surface, color: C.group, boxShadow: C.shadowTiny }
                : { background: 'transparent', color: C.textSecondary }),
        }}
    >
        {m === 'day' ? t('charts.gantt.month', 'Mês')
            : m === 'week' ? t('charts.gantt.week', 'Semana')
            : t('charts.gantt.year', 'Ano')}
    </button>
))}
```

- [ ] **Step 3: Rodar build**

```bash
npm run build 2>&1 | head -40
```
Expected: sem erros de tipo

- [ ] **Step 4: Commit**

```bash
git add src/components/GanttHeader/index.tsx src/context/GanttContext.tsx src/ProjectGantt.tsx
git commit -m "feat: add Today button and Week view mode to header"
```

---

### Task 6: Renderizar números de semana no header do chart

**Files:**
- Modify: `src/components/GanttChart/index.tsx`

- [ ] **Step 1: Importar getWeekNumber e adicionar lógica de week numbers no header**

Em `src/components/GanttChart/index.tsx`, no bloco "Bottom row (Days/Months)", adicionar para day/week views:

```typescript
import { fmtDateShort, addDays, getWeekNumber } from '../../utils/date';

// Dentro do virtualDays.map para day view (e week view):
// Detectar se o dia é segunda-feira:
const isMonday = d.date.getDay() === 1;
const weekNum = isMonday && props.showWeekNumbers
    ? getWeekNumber(d.date)
    : null;

// No JSX do dia, adicionar acima do número:
{weekNum !== null && (
    <span style={{
        fontSize: 8, fontWeight: 800, color: C.group,
        background: 'rgba(26,60,48,0.1)',
        borderRadius: 3, padding: '0 3px',
        marginBottom: 1, letterSpacing: '0.02em',
    }}>
        W{String(weekNum).padStart(2, '0')}
    </span>
)}
```

- [ ] **Step 2: Aplicar mesma lógica para week viewMode no header**

No bloco do header, certificar que o `viewMode === 'day'` check também inclui `viewMode === 'week'`:

```typescript
// Trocar:
{viewMode === 'day' && (
// por:
{(viewMode === 'day' || viewMode === 'week') && (
```

- [ ] **Step 3: Rodar build**

```bash
npm run build 2>&1 | head -30
```

- [ ] **Step 4: Commit**

```bash
git add src/components/GanttChart/index.tsx
git commit -m "feat: show ISO week numbers in day/week view header"
```

---

### Task 7: Teste de integração e verificação final

- [ ] **Step 1: Rodar todos os testes**

```bash
npm run test
```
Expected: todos passando

- [ ] **Step 2: Build final**

```bash
npm run build
```
Expected: sem erros

- [ ] **Step 3: Commit final**

```bash
git add -A
git commit -m "feat(batch1): timeline — Today button, week numbers, Week view mode"
```
