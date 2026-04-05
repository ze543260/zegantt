/** Portuguese (Brazil) translation strings for ZeGantt */
export const ptBR: Record<string, string> = {
    // GanttHeader
    'planning.gantt': 'PLANEJAMENTO DA OBRA',
    'charts.gantt.month': 'Mês',
    'charts.gantt.year': 'Ano',
    'charts.gantt.stepName': 'NOME DA ETAPA',
    'charts.gantt.start': 'INÍCIO',
    'charts.gantt.end': 'FIM',
    'charts.gantt.newAction': 'Nova Ação',
    'charts.gantt.progress': 'Progresso',
    'gantt.filter.steps': 'Etapas',
    'gantt.filter.milestones': 'Marcos',
    'gantt.filter.events': 'Eventos',
    'gantt.filter.notes': 'Notas',
    'gantt.newAction.step': 'Etapa',
    'gantt.newAction.milestone': 'Marco',
    'gantt.newAction.event': 'Evento',
    'gantt.newAction.note': 'Nota',

    // GanttGrid group labels
    'gantt.group.step': 'Etapas',
    'gantt.group.milestone': 'Marcos',
    'gantt.group.event': 'Eventos',
    'gantt.group.note': 'Notas',

    // GanttChart tooltips
    'gantt.tooltip.planned': 'Previsto',
    'gantt.tooltip.actual': 'Real',
    'gantt.tooltip.plannedInUse': 'Previsto (em uso)',
    'gantt.tooltip.start': 'Início',
    'gantt.tooltip.end': 'Fim',
    'gantt.tooltip.duration': 'Duração',
    'gantt.tooltip.progress': 'Progresso',
    'gantt.tooltip.date': 'Data',
    'gantt.tooltip.attachments': 'Anexos',

    // GanttChart popup actions
    'gantt.popup.viewDetails': 'Ver detalhes',
    'gantt.popup.edit': 'Editar',
    'gantt.popup.delete': 'Excluir',
    'gantt.popup.relations': 'Relações',
    'gantt.chart.addOn': 'Adicionar em',

    // GanttChart dependency type labels (popup)
    'gantt.depType.fs': 'Início após Fim',
    'gantt.depType.ss': 'Inícios simultâneos',
    'gantt.depType.ff': 'Fins simultâneos',
    'gantt.depType.sf': 'Fim após Início',

    // Dependency modal
    'gantt.depModal.title': 'Tipo de Relação',
    'gantt.depModal.subtitle': 'Escolha como as duas tarefas se relacionam',
    'gantt.depModal.fs': 'Início após Fim',
    'gantt.depModal.fsDesc': 'B começa quando A termina',
    'gantt.depModal.ss': 'Inícios simultâneos',
    'gantt.depModal.ssDesc': 'A e B começam juntos',
    'gantt.depModal.ff': 'Fins simultâneos',
    'gantt.depModal.ffDesc': 'A e B terminam juntos',
    'gantt.depModal.sf': 'Fim após Início',
    'gantt.depModal.sfDesc': 'B termina quando A começa',
    'gantt.depModal.lagLabel': 'Atraso (Lag) em dias',
    'gantt.depModal.cancel': 'Cancelar',
    'gantt.depModal.create': 'Criar Dependência',
    'gantt.depModal.saving': 'Salvando...',

    // NoteModal
    'noteModal.titlePlaceholder': 'Título da nota...',
    'noteModal.contentPlaceholder': 'Escreva sua nota aqui...',
    'noteModal.attachFiles': 'Anexar arquivos',
    'noteModal.removeFile': 'Remover',
    'noteModal.dependency': 'Dependência',
    'noteModal.none': 'Nenhuma',
    'noteModal.milestones': 'Marcos',
    'noteModal.cancel': 'Cancelar',
    'noteModal.create': 'Criar Nota',
    'noteModal.errorEmpty': 'Informe o título ou conteúdo da nota.',
    'noteModal.errorSave': 'Erro ao criar nota.',
    'noteModal.untitled': 'Sem título',
};

/** English translation strings for ZeGantt */
export const enUS: Record<string, string> = {
    // GanttHeader
    'planning.gantt': 'PROJECT PLANNING',
    'charts.gantt.month': 'Month',
    'charts.gantt.year': 'Year',
    'charts.gantt.stepName': 'STEP NAME',
    'charts.gantt.start': 'START',
    'charts.gantt.end': 'END',
    'charts.gantt.newAction': 'New Action',
    'charts.gantt.progress': 'Progress',
    'gantt.filter.steps': 'Steps',
    'gantt.filter.milestones': 'Milestones',
    'gantt.filter.events': 'Events',
    'gantt.filter.notes': 'Notes',
    'gantt.newAction.step': 'Step',
    'gantt.newAction.milestone': 'Milestone',
    'gantt.newAction.event': 'Event',
    'gantt.newAction.note': 'Note',

    // GanttGrid group labels
    'gantt.group.step': 'Steps',
    'gantt.group.milestone': 'Milestones',
    'gantt.group.event': 'Events',
    'gantt.group.note': 'Notes',

    // GanttChart tooltips
    'gantt.tooltip.planned': 'Planned',
    'gantt.tooltip.actual': 'Actual',
    'gantt.tooltip.plannedInUse': 'Planned (in use)',
    'gantt.tooltip.start': 'Start',
    'gantt.tooltip.end': 'End',
    'gantt.tooltip.duration': 'Duration',
    'gantt.tooltip.progress': 'Progress',
    'gantt.tooltip.date': 'Date',
    'gantt.tooltip.attachments': 'Attachments',

    // GanttChart popup actions
    'gantt.popup.viewDetails': 'View details',
    'gantt.popup.edit': 'Edit',
    'gantt.popup.delete': 'Delete',
    'gantt.popup.relations': 'Relations',
    'gantt.chart.addOn': 'Add on',

    // GanttChart dependency type labels
    'gantt.depType.fs': 'Finish to Start',
    'gantt.depType.ss': 'Start to Start',
    'gantt.depType.ff': 'Finish to Finish',
    'gantt.depType.sf': 'Start to Finish',

    // Dependency modal
    'gantt.depModal.title': 'Relation Type',
    'gantt.depModal.subtitle': 'Choose how the two tasks relate',
    'gantt.depModal.fs': 'Finish to Start',
    'gantt.depModal.fsDesc': 'B starts when A finishes',
    'gantt.depModal.ss': 'Start to Start',
    'gantt.depModal.ssDesc': 'A and B start together',
    'gantt.depModal.ff': 'Finish to Finish',
    'gantt.depModal.ffDesc': 'A and B finish together',
    'gantt.depModal.sf': 'Start to Finish',
    'gantt.depModal.sfDesc': 'B finishes when A starts',
    'gantt.depModal.lagLabel': 'Lag (days)',
    'gantt.depModal.cancel': 'Cancel',
    'gantt.depModal.create': 'Create Dependency',
    'gantt.depModal.saving': 'Saving...',

    // NoteModal
    'noteModal.titlePlaceholder': 'Note title...',
    'noteModal.contentPlaceholder': 'Write your note here...',
    'noteModal.attachFiles': 'Attach files',
    'noteModal.removeFile': 'Remove',
    'noteModal.dependency': 'Dependency',
    'noteModal.none': 'None',
    'noteModal.milestones': 'Milestones',
    'noteModal.cancel': 'Cancel',
    'noteModal.create': 'Create Note',
    'noteModal.errorEmpty': 'Please provide a title or content for the note.',
    'noteModal.errorSave': 'Error creating note.',
    'noteModal.untitled': 'Untitled',

    // Pinboard
    'pinboard.description': 'Board with notes and files linked to this task.',
    'pinboard.empty': 'No linked notes',
    'pinboard.newBtn': 'New note for this task',

    // Dependency business rules
    'gantt.error.circularDependency': 'Circular dependency is not allowed.',
};

export function resolveTranslation(
    translations: Record<string, string> | ((key: string, fallback?: string) => string) | undefined,
    key: string,
    fallback?: string,
): string {
    const englishFallback = enUS[key] || fallback || key;

    if (!translations) return englishFallback;
    if (typeof translations === 'function') {
        const translated = translations(key, englishFallback);
        return translated || englishFallback;
    }

    return translations[key] || englishFallback;
}
