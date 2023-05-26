import { Project } from './types/Project';
import { Task } from './types/Task';

const projects: Project[] = [
  {
    name: 'Software Project',
    tasks: [],
  },
  {
    name: 'Design Project',
    tasks: [],
  },
];

function addTask(projectName: string, task: Task) {
  const specificProject = projects.find((project) => project.name === projectName);
  if (specificProject) {
    specificProject.tasks.push(task);
  }
}

function getTasks(projectName: string): Task[] {
  const specificProject = projects.find((project) => project.name === projectName);
  if (specificProject) {
    return specificProject.tasks;
  }
  return [];
}

export { addTask, getTasks };
