import { action } from '../';
import { addFirstTask } from '../effects';
import { STORAGE_KEY } from '../../constant';

export const fetchTasksAction = () => state => {
  if (state.tasksLoaded) {
    return null;
  }

  const taskState = localStorage.getItem(STORAGE_KEY);

  return {
    ...(taskState ? JSON.parse(taskState) : {}),
    tasksLoaded: true,
  }
}

const effects = [addFirstTask];
export const fetchTasks = action(fetchTasksAction, effects);
