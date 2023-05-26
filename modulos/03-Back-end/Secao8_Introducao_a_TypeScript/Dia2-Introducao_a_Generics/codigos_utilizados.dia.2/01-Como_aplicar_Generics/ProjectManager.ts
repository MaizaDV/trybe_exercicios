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

function addTask<T>(projectName: string, task: Task<T>) {
  const specificProject = projects.find((project) => project.name === projectName);
  if (specificProject) {
    specificProject.tasks.push(task);
  }
}

function getTasks<T>(projectName: string): Task<T>[] {
  const specificProject = projects.find((project) => project.name === projectName);
  if (specificProject) {
    return specificProject.tasks;
  }
  return [];
}

export { addTask, getTasks };
