import type {
  GanttDependency,
  GanttEvent,
  GanttMilestone,
  GanttNote,
  GanttStep,
} from '../types';

export interface StoryDataset {
  steps: GanttStep[];
  milestones: GanttMilestone[];
  events: GanttEvent[];
  notes: GanttNote[];
  dependencies: GanttDependency[];
}

interface DatasetOptions {
  projectCount: number;
  stepsPerProject: number;
  startOffsetPerProject?: number;
  milestoneEvery?: number;
  eventEvery?: number;
  noteEvery?: number;
}

const NOTE_COLORS = ['#FEF08A', '#BBF7D0', '#BFDBFE', '#FBCFE8', '#E9D5FF', '#FED7AA'];

const DAY_MS = 86_400_000;

function addDays(base: Date, days: number): Date {
  return new Date(base.getTime() + days * DAY_MS);
}

function projectName(index: number): string {
  const names = [
    'North Tower',
    'South Tower',
    'Main Plaza',
    'Logistics Hub',
    'Residential Block',
    'Energy Center',
    'Parking Building',
    'Riverfront Deck',
  ];

  return names[index - 1] ?? `Project ${index}`;
}

export function buildDataset(options: DatasetOptions): StoryDataset {
  const {
    projectCount,
    stepsPerProject,
    startOffsetPerProject = 18,
    milestoneEvery = 6,
    eventEvery = 8,
    noteEvery = 3,
  } = options;

  const steps: GanttStep[] = [];
  const milestones: GanttMilestone[] = [];
  const events: GanttEvent[] = [];
  const notes: GanttNote[] = [];
  const dependencies: GanttDependency[] = [];

  const baseline = new Date(2026, 0, 5);
  let dependencyCounter = 1;
  let noteCounter = 1;

  for (let project = 1; project <= projectCount; project += 1) {
    const pId = `p-${project}`;
    const pTitle = projectName(project);

    for (let idx = 0; idx < stepsPerProject; idx += 1) {
      const stepNum = idx + 1;
      const stepId = `s-${project}-${stepNum}`;

      const start = addDays(baseline, (project - 1) * startOffsetPerProject + idx * 3);
      const durationDays = 2 + (idx % 6);
      const finish = addDays(start, durationDays);
      const plannedStart = addDays(start, -1);
      const plannedFinish = addDays(finish, -1);
      const progress = Math.min(100, Math.max(0, idx * 5 + project * 4));

      steps.push({
        id: stepId,
        name: `${pTitle} - Step ${stepNum}`,
        startDate: start,
        finishDate: finish,
        previsionStartDate: plannedStart,
        previsionFinishDate: plannedFinish,
        conclusionPercent: progress,
        projectId: pId,
        projectTitle: pTitle,
      });

      if (idx > 0) {
        dependencies.push({
          id: `d-${dependencyCounter}`,
          predecessorId: `s-${project}-${idx}`,
          predecessorType: 'STEP',
          successorId: stepId,
          successorType: 'STEP',
          type: 'FS',
          lag: idx % 5 === 0 ? 1 : 0,
        });
        dependencyCounter += 1;
      }

      if (stepNum % milestoneEvery === 0) {
        const milestoneId = `m-${project}-${stepNum / milestoneEvery}`;
        milestones.push({
          id: milestoneId,
          name: `${pTitle} - Milestone ${stepNum / milestoneEvery}`,
          date: addDays(finish, 1),
          finished: progress >= 95,
          projectId: pId,
          projectTitle: pTitle,
        });

        dependencies.push({
          id: `d-${dependencyCounter}`,
          predecessorId: stepId,
          predecessorType: 'STEP',
          successorId: milestoneId,
          successorType: 'MILESTONE',
          type: 'FS',
          lag: 0,
        });
        dependencyCounter += 1;
      }

      if (stepNum % eventEvery === 0) {
        events.push({
          id: `e-${project}-${stepNum / eventEvery}`,
          title: `${pTitle} - Site Event ${stepNum / eventEvery}`,
          date: addDays(finish, 2),
          finished: progress >= 80,
          projectId: pId,
          projectTitle: pTitle,
        });
      }

      if (stepNum % noteEvery === 0) {
        const color = NOTE_COLORS[(noteCounter - 1) % NOTE_COLORS.length];
        notes.push({
          id: `n-${noteCounter}`,
          title: `Field Note ${noteCounter}`,
          description: `Validation note for ${pTitle} - Step ${stepNum}.`,
          author: project % 2 === 0 ? 'Site Team' : 'Planning Office',
          targetId: stepId,
          date: addDays(start, 1),
          color,
          filesCount: noteCounter % 4,
          projectId: pId,
          projectTitle: pTitle,
        });
        noteCounter += 1;
      }
    }
  }

  for (let project = 2; project <= projectCount; project += 1) {
    dependencies.push({
      id: `d-${dependencyCounter}`,
      predecessorId: `s-${project - 1}-${stepsPerProject}`,
      predecessorType: 'STEP',
      successorId: `s-${project}-1`,
      successorType: 'STEP',
      type: 'FS',
      lag: 2,
    });
    dependencyCounter += 1;
  }

  return { steps, milestones, events, notes, dependencies };
}

export const compactDataset = buildDataset({
  projectCount: 2,
  stepsPerProject: 10,
  startOffsetPerProject: 16,
  milestoneEvery: 5,
  eventEvery: 5,
  noteEvery: 2,
});

export const mediumDataset = buildDataset({
  projectCount: 4,
  stepsPerProject: 22,
  startOffsetPerProject: 18,
  milestoneEvery: 6,
  eventEvery: 7,
  noteEvery: 3,
});

export const largeDataset = buildDataset({
  projectCount: 8,
  stepsPerProject: 45,
  startOffsetPerProject: 20,
  milestoneEvery: 9,
  eventEvery: 10,
  noteEvery: 4,
});
