import { action } from '../';
import { saveTasks, addFirstTask } from '../effects';

export const removeAllTasksAction = () => ({
  taskIndex: 0,
  taskOrder: [],
  tasks: {},
});

const effects = [saveTasks, addFirstTask];
export const removeAllTasks = action(removeAllTasksAction, effects);
