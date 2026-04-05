import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProjectGantt, enUS, ptBR } from '../index';
import type { ProjectGanttProps } from '../types';
import { compactDataset, largeDataset, mediumDataset } from './projectGantt.storyData';
import './projectGantt.stories.css';

const noop = () => {};
const noopAsync = async () => {};

const baseArgs: ProjectGanttProps = {
  ...mediumDataset,
  locale: 'pt-BR',
  translations: ptBR,
  groupByProject: true,
  onTaskChange: noop,
  onTaskClick: noop,
  onAddNewStage: noop,
  onViewStage: noop,
  onEditStage: noop,
  onDeleteStage: noop,
  onCreateDependency: noopAsync,
  onDeleteDependency: noopAsync,
  onDependencyError: noop,
  onAddMilestone: noop,
  onAddEvent: noop,
  onAddNote: noop,
  onSaveNote: noopAsync,
};

const meta: Meta<typeof ProjectGantt> = {
  title: 'ProjectGantt/Scenarios',
  component: ProjectGantt,
  args: baseArgs,
  argTypes: {
    steps: { control: false },
    milestones: { control: false },
    events: { control: false },
    notes: { control: false },
    dependencies: { control: false },
    onTaskChange: { control: false },
    onTaskClick: { control: false },
    onAddNewStage: { control: false },
    onViewStage: { control: false },
    onEditStage: { control: false },
    onDeleteStage: { control: false },
    onCreateDependency: { control: false },
    onDeleteDependency: { control: false },
    onDependencyError: { control: false },
    onAddMilestone: { control: false },
    onAddEvent: { control: false },
    onAddNote: { control: false },
    onSaveNote: { control: false },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Storybook inicial do ZeGantt com foco em cenarios reais: volume alto, variacoes de idioma e variacoes de tema via CSS variables.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

function renderInShell(args: ProjectGanttProps, shellClass?: string) {
  return (
    <div className={`zg-story-shell ${shellClass ?? ''}`.trim()}>
      <ProjectGantt {...args} />
    </div>
  );
}

export const Baseline: Story = {
  name: 'Baseline (PT-BR)',
  render: args => renderInShell(args),
};

export const VolumeLarge: Story = {
  name: 'Volume alto (360 etapas)',
  args: {
    ...baseArgs,
    ...largeDataset,
    locale: 'en-US',
    translations: enUS,
  },
  render: args => renderInShell(args),
  parameters: {
    docs: {
      description: {
        story:
          'Dataset volumoso para validar scroll, agrupamento e responsividade de interacoes com muitos itens.',
      },
    },
  },
};

export const LocaleEnglish: Story = {
  name: 'Idioma EN-US',
  args: {
    ...baseArgs,
    ...compactDataset,
    locale: 'en-US',
    translations: enUS,
  },
  render: args => renderInShell(args),
};

export const LocalePortuguese: Story = {
  name: 'Idioma PT-BR',
  args: {
    ...baseArgs,
    ...compactDataset,
    locale: 'pt-BR',
    translations: ptBR,
  },
  render: args => renderInShell(args),
};

export const ThemeOcean: Story = {
  name: 'Tema Ocean',
  args: {
    ...baseArgs,
    ...mediumDataset,
    locale: 'en-US',
    translations: enUS,
  },
  render: args => renderInShell(args, 'zg-theme-ocean'),
};

export const ThemeTerra: Story = {
  name: 'Tema Terra',
  args: {
    ...baseArgs,
    ...mediumDataset,
    locale: 'pt-BR',
    translations: ptBR,
  },
  render: args => renderInShell(args, 'zg-theme-terra'),
};
