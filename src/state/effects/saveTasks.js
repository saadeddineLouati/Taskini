import { effect } from '../';
import { STORAGE_KEY } from '../../constant';

export const saveTasks = 'SAVE_TASKS';

effect(saveTasks, state => {
  const { taskIndex, taskOrder, tasks } = state;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ taskIndex, taskOrder, tasks }));
});
