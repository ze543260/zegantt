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
