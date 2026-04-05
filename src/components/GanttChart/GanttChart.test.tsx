import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ProjectGantt } from '../../ProjectGantt';
import { GanttTaskBar } from '../GanttTaskBar';
import { GanttProvider } from '../../context/GanttContext';
import { fmtDateShort } from '../../utils/date';
import { computeTimeline, dateToX } from '../../utils/timeline';
import type { InternalTask } from '../../types/internal';

describe('ProjectGantt component behavior', () => {
  const stepDateStart = new Date(2026, 0, 10);
  const stepDateEnd = new Date(2026, 0, 15);

  const baseProps = {
    locale: 'en-US',
    steps: [
      {
        id: 's1',
        name: 'Foundation',
        startDate: stepDateStart,
        finishDate: stepDateEnd,
        conclusionPercent: 35,
      },
    ],
  };

  it('renders gantt bar with provided dates', async () => {
    const task: InternalTask = {
      id: 's1',
      name: 'Foundation',
      start: stepDateStart,
      end: stepDateEnd,
      progress: 35,
      originalType: 'step',
      deps: [],
      previsionStart: stepDateStart,
      previsionEnd: stepDateEnd,
    };

    const timeline = computeTimeline([task], 'day', 'en-US');
    const x = dateToX(task.start, timeline);
    const w = Math.max(dateToX(task.end, timeline) - x, timeline.dayWidth);

    render(
      <GanttProvider
        value={{
          timeline,
          viewMode: 'day',
          props: { steps: [], locale: 'en-US' },
        } as any}
      >
        <div style={{ position: 'relative', width: timeline.totalWidth, height: 100 }}>
          <GanttTaskBar
            task={task}
            x={x}
            y={0}
            w={w}
            progW={(w * task.progress) / 100}
            isHov={false}
            isDrag={false}
            isResize={false}
            isCritical={false}
            isDelayed={false}
            isConnectTarget={false}
            showDots={false}
            isBarDimmed={false}
            isBarHighlighted={false}
            commonEvents={{}}
            handleResizeMouseDown={vi.fn()}
            handleResizeTouchStart={vi.fn()}
            handleConnectDotMouseDown={vi.fn()}
            handleConnectDotTouchStart={vi.fn()}
          />
        </div>
      </GanttProvider>,
    );

    await waitFor(() => {
      expect(screen.getByLabelText('Task bar Foundation')).toBeInTheDocument();
    });
    expect(screen.getByText('35%')).toBeInTheDocument();
    expect(screen.getByTitle(`Previsto: ${fmtDateShort(stepDateStart, 'en-US')} → ${fmtDateShort(stepDateEnd, 'en-US')}`)).toBeInTheDocument();
  });

  it('opens chart context menu on right click', () => {
    const { container } = render(<ProjectGantt {...baseProps} onAddNewStage={vi.fn()} />);

    const scrollAreas = container.querySelectorAll('.zg-no-scrollbar');
    const chartScrollable = scrollAreas.item(1) as HTMLElement;

    fireEvent.contextMenu(chartScrollable, { clientX: 180, clientY: 200 });
    expect(screen.getByText(/Add on/i)).toBeInTheDocument();
  });
});
