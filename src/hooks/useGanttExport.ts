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

        // Temporarily hide controls that should not appear in the capture
        const controls = node.querySelectorAll<HTMLElement>('.zg-header-controls, [data-popup], [data-menu]');
        controls.forEach(el => {
            el.dataset.exportHidden = el.style.visibility;
            el.style.visibility = 'hidden';
        });

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
