import { addTask, getTasks } from './ProjectManager';

const softwareTask = {
  name: 'Implementa login',
  responsible: 'Fernanda',
  progress: 0,
  data: { code: 'LOGIN', deadline: new Date('2023-06-15') },
};
addTask('Software Project', softwareTask);

const softwareTasks = getTasks('Software Project');
console.log(softwareTasks);


const designTask = {
  name: 'Criar tela para homepage',
  responsible: 'Paulo',
  progress: 0,
  data: { screens: 1, deadline: new Date('2023-06-15') },
};
addTask('Design Project', designTask);

const designTasks = getTasks('Design Project');
console.log(designTasks);

