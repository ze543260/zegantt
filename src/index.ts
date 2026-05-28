import './zegantt.css';

export * from './types';
export { ProjectGantt } from './ProjectGantt';
export { generateGanttTheme, darkTheme } from './utils/theme';
export type { GanttTheme } from './utils/theme';
export { useGanttExport } from './hooks/useGanttExport';
export type { GanttExportOptions } from './hooks/useGanttExport';
export { NoteModal } from './components/Modals/NoteModal';
export type { NoteModalProps } from './components/Modals/NoteModal';
export { ptBR, enUS } from './translations';
