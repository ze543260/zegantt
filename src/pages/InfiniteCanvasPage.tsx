import { useMemo, useState } from 'react';
import { ArrowLeft, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { ProjectGantt } from '../ProjectGantt';
import { ptBR } from '../translations';
import { buildDataset } from '../stories/projectGantt.storyData';

const noop = () => {};
const noopAsync = async () => {};

interface InfiniteCanvasPageProps {
  onBack: () => void;
}

export function InfiniteCanvasPage({ onBack }: InfiniteCanvasPageProps) {
  const [hideSidebar, setHideSidebar] = useState(true);

  const dataset = useMemo(
    () =>
      buildDataset({
        projectCount: 10,
        stepsPerProject: 60,
        startOffsetPerProject: 21,
        milestoneEvery: 10,
        eventEvery: 9,
        noteEvery: 4,
      }),
    [],
  );

  return (
    <main className="zg-demo-page">
      <header className="zg-demo-topbar">
        <div className="zg-demo-topbar-left">
          <button type="button" className="zg-demo-btn" onClick={onBack}>
            <ArrowLeft size={16} />
            Voltar
          </button>
          <div>
            <h1>Canvas Infinito de Projetos</h1>
            <p>
              Arraste para navegar, use zoom no header e visualize cronogramas extensos com
              melhor contexto.
            </p>
          </div>
        </div>

        <div className="zg-demo-topbar-right">
          <button
            type="button"
            className="zg-demo-btn zg-demo-btn--strong"
            onClick={() => setHideSidebar(prev => !prev)}
          >
            {hideSidebar ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
            {hideSidebar ? 'Mostrar Lista' : 'Ocultar Lista'}
          </button>
        </div>
      </header>

      <section className="zg-demo-canvas-shell">
        <ProjectGantt
          {...dataset}
          locale="pt-BR"
          translations={ptBR}
          groupByProject
          infiniteCanvas
          initialFitToScreen
          hideSidebar={hideSidebar}
          onTaskChange={noop}
          onTaskClick={noop}
          onCreateDependency={noopAsync}
          onDeleteDependency={noopAsync}
          onDependencyError={noop}
        />
      </section>
    </main>
  );
}
