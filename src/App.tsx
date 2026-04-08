import { useEffect, useState } from 'react';
import { Move, ZoomIn, PanelsTopLeft } from 'lucide-react';
import { InfiniteCanvasPage } from './pages/InfiniteCanvasPage';

type DemoRoute = 'home' | 'infinite-canvas';

function resolveRoute(pathname: string): DemoRoute {
  if (pathname.startsWith('/infinite-canvas')) return 'infinite-canvas';
  return 'home';
}

function pushRoute(nextRoute: DemoRoute) {
  const nextPath = nextRoute === 'infinite-canvas' ? '/infinite-canvas' : '/';
  window.history.pushState({ route: nextRoute }, '', nextPath);
}

function HomePage({ openInfiniteCanvas }: { openInfiniteCanvas: () => void }) {
  return (
    <main className="zg-home-shell">
      <div className="zg-home-card">
        <p className="zg-home-kicker">ZeGantt Demo</p>
        <h1>Visualizacao dedicada para projetos com muitas etapas</h1>
        <p>
          Abra uma pagina separada para explorar o Gantt em modo canvas infinito, com
          navegacao por arraste e zoom continuo.
        </p>

        <div className="zg-home-feature-grid">
          <article>
            <Move size={18} />
            <span>Pan dragavel no viewport</span>
          </article>
          <article>
            <ZoomIn size={18} />
            <span>Zoom progressivo e fit-to-screen</span>
          </article>
          <article>
            <PanelsTopLeft size={18} />
            <span>Painel lateral opcional para foco</span>
          </article>
        </div>

        <button type="button" className="zg-home-primary-btn" onClick={openInfiniteCanvas}>
          Abrir Pagina Canvas Infinito
        </button>
      </div>
    </main>
  );
}

function App() {
  const [route, setRoute] = useState<DemoRoute>(() => resolveRoute(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setRoute(resolveRoute(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const openInfiniteCanvas = () => {
    pushRoute('infinite-canvas');
    setRoute('infinite-canvas');
  };

  const goHome = () => {
    pushRoute('home');
    setRoute('home');
  };

  if (route === 'infinite-canvas') {
    return <InfiniteCanvasPage onBack={goHome} />;
  }

  return <HomePage openInfiniteCanvas={openInfiniteCanvas} />;
}

export default App;
