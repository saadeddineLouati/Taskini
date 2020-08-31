import { action } from '../';
import { focusTaskInput, saveTasks } from '../effects';
import { listRemove } from '../../helpers/list';

export const removeTaskAction = id => ({ taskOrder, tasks}) => (
  taskOrder.length === 1 ? null : {
    taskOrder: listRemove(taskOrder, taskOrder.indexOf(id)),
    tasks: Object.keys(tasks).reduce((acc, taskID) => {
      if (taskID !== id.toString()) {
        acc[taskID] = tasks[taskID];
      }
      return acc;
    }, {})
  }
);

const effects = [saveTasks, focusTaskInput];
export const removeTask = action(removeTaskAction, effects);
