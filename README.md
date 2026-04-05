# ZeGantt

ZeGantt is a React Gantt chart library focused on construction and project planning workflows.

## Highlights

- Virtualized rows and day-columns for large datasets (thousands of tasks)
- Drag, resize and dependency creation with mouse and touch support
- Keyboard navigation and accessibility attributes for enterprise use
- Theme tokens via CSS variables
- i18n with robust English fallback
- ESM + CJS builds with TypeScript declarations

## Install

```bash
npm install zegantt
```

### Required peer dependencies

```bash
npm install react react-dom lucide-react
```

## Minimal usage

```tsx
import { ProjectGantt, ptBR, type GanttStep } from 'zegantt';
import 'zegantt/style.css';

const steps: GanttStep[] = [
  {
    id: 's1',
    name: 'Foundation',
    startDate: '2026-01-10',
    finishDate: '2026-01-20',
    conclusionPercent: 45,
    projectId: 'p1',
    projectTitle: 'Residential Tower',
  },
];

export function Example() {
  return (
    <ProjectGantt
      steps={steps}
      locale="pt-BR"
      translations={ptBR}
      groupByProject
      onTaskChange={(task) => console.log('Task updated', task)}
    />
  );
}
```

## Data contracts

### Steps

```ts
interface GanttStep {
  id: string;
  name: string;
  startDate?: Date | string;
  finishDate?: Date | string;
  previsionStartDate?: Date | string;
  previsionFinishDate?: Date | string;
  conclusionPercent?: number | string;
  projectId?: string;
  projectTitle?: string;
}
```

### Milestones

```ts
interface GanttMilestone {
  id: string;
  name: string;
  date?: Date | string;
  finished?: boolean;
  projectId?: string;
  projectTitle?: string;
}
```

### Events

```ts
interface GanttEvent {
  id: string;
  title: string;
  date?: Date | string;
  finished?: boolean;
  projectId?: string;
  projectTitle?: string;
}
```

### Notes

```ts
interface GanttNote {
  id: string;
  title: string;
  targetId?: string;
  predecessorId?: string;
  description?: string;
  author?: string;
  date?: Date | string;
  color?: string;
  filesCount?: number;
  projectId?: string;
  projectTitle?: string;
}
```

### Dependencies

```ts
type PredecessorType = 'STEP' | 'MILESTONE';
type DependencyType = 'FS' | 'SS' | 'FF' | 'SF';

interface GanttDependency {
  id: string;
  predecessorId: string;
  predecessorType: PredecessorType;
  successorId: string;
  successorType: PredecessorType;
  type: DependencyType;
  lag: number;
}
```

## Main props

```ts
interface ProjectGanttProps {
  steps: GanttStep[];
  milestones?: GanttMilestone[];
  events?: GanttEvent[];
  notes?: GanttNote[];
  dependencies?: GanttDependency[];

  loading?: boolean;
  locale?: string;
  groupByProject?: boolean;
  translations?: Record<string, string> | ((key: string, fallback?: string) => string);

  onTaskChange?: (task: GanttTask) => void;
  onTaskClick?: (task: GanttTask) => void;
  onCreateDependency?: (params: CreateDependencyParams) => Promise<void>;
  onDeleteDependency?: (dependencyId: string) => Promise<void>;
  onDependencyError?: (error: DependencyValidationError) => void;

  onAddNewStage?: (date?: Date, projectId?: string) => void;
  onAddMilestone?: (date?: Date, projectId?: string) => void;
  onAddEvent?: (date?: Date, projectId?: string) => void;
  onAddNote?: (date?: Date, projectId?: string) => void;
}
```

## Dependency cycle protection

ZeGantt blocks creation of circular dependencies (for example A -> B -> C -> A).

- If `onDependencyError` is provided, it receives a `CYCLIC_DEPENDENCY` error payload.
- If not provided, ZeGantt shows a default alert message.

## Accessibility and keyboard

- Interactive rows include semantic roles and keyboard handling
- Row navigation with arrow keys
- `Enter` opens task details (when callback exists)
- Focus-visible ring is provided by default CSS

## Mobile and touch

The library supports touch interactions for:

- Bar dragging
- Bar resizing
- Dependency connection handles
- Timeline panning

## Theming

ZeGantt exposes CSS variables that can be overridden globally or in a wrapper:

```css
.my-gantt-theme {
  --zg-surface: #ffffff;
  --zg-surface-alt: #f4f7f6;
  --zg-header-bg: #e9efec;
  --zg-border: #c9d2ce;
  --zg-border-light: #dbe3df;
  --zg-primary-color: #0f3d2f;
  --zg-note-color: #ffd44d;
  --zg-shadow-panel: 0 10px 30px rgba(0, 0, 0, 0.08);
}
```

Apply theme:

```tsx
<div className="my-gantt-theme">
  <ProjectGantt steps={steps} />
</div>
```

## i18n

- Use `locale` (BCP 47, ex: `en-US`, `pt-BR`) to format dates and month labels.
- Provide `translations` as object or function.
- Missing keys fall back to English automatically.

Built-in helper export:

```ts
import { ptBR } from 'zegantt';
```

## Testing

Included scripts:

```bash
npm run test
npm run test:watch
```

Current suite includes:

- Unit tests for `utils/date.ts`, `utils/timeline.ts`, `utils/criticalPath.ts`, `utils/dependencies.ts`
- Component tests for context menu and task bar rendering behavior

## Build and publish

Build outputs:

- ESM: `dist/zegantt.js`
- CJS: `dist/zegantt.cjs`
- Types: `dist/index.d.ts`
- Styles: `dist/zegantt.css`

Before publishing:

1. Run `npm run test`
2. Run `npm run build`
3. Verify `peerDependencies` resolution in consuming projects

## Storybook recommendation

For consumer-facing documentation, Storybook is strongly recommended to demonstrate:

- Large dataset performance scenarios
- Interaction flows (drag, resize, dependency creation)
- Theme variants
- Locale variants
