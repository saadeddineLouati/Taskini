import { action } from '../';
import { saveTasks } from '../effects';

export const updateTaskAction = (id, { complete, value }) => ({ tasks }) => (
  !tasks[id]
    ? null
    : {
        tasks: {
          ...tasks,
          [id]: {
            id,
            complete: complete !== undefined ? complete : tasks[id].complete,
            value: value !== undefined ? value : tasks[id].value,
          }
        }
      }
);

const effects = [saveTasks];
export const updateTask = action(updateTaskAction, effects);
