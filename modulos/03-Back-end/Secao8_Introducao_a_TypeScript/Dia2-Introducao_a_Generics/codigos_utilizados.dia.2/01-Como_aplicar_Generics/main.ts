import { addTask, getTasks } from './ProjectManager';
import { DesignTask } from './types/DesignTask';
import { SoftwareTask } from './types/SoftwareTask';
import { Task } from './types/Task';

const softwareTask: Task<SoftwareTask> = {
  name: 'Implementa login',
  responsible: 'Fernanda',
  progress: 0,
  data: { code: 'LOGIN', deadline: new Date('2023-06-15') },
};
addTask<SoftwareTask>('Software Project', softwareTask);

const softwareTasks = getTasks<SoftwareTask>('Software Project');
console.log(softwareTasks);


const designTask = {
  name: 'Criar tela para homepage',
  responsible: 'Paulo',
  progress: 0,
  data: { screens: 1, deadline: new Date('2023-06-15') },
};
addTask<DesignTask>('Design Project', designTask);

const designTasks = getTasks<DesignTask>('Design Project');
console.log(designTasks);

