import { action } from "..";
import { listInsert } from "../../helpers/list";
import { STORAGE_KEY } from "../../constant";
import * as effects from "../effects";

export const addTaskAction = (insertId, insertBefore) => state => {
  const { taskIndex, taskOrder, tasks } = state;
  const nextIndex = taskIndex + 1;
  const newTask = { id: nextIndex, complete: false, value: "" };
  const insertionIndex = taskOrder.indexOf(insertId);
  const insertion = insertBefore ? insertionIndex : insertionIndex + 1;

  return {
    taskIndex: nextIndex,
    taskOrder: listInsert(taskOrder, insertion, nextIndex),
    tasks: { ...tasks, [nextIndex]: newTask }
  };
};

export const addTask = action(addTaskAction, [
  effects.focusTaskInput,
  effects.saveTasks
]);

const fetchTasksAction = () => state => {
  if (state.tasksLoaded) {
    return null;
  }

  const taskState = localStorage.getItem(STORAGE_KEY);

  return {
    ...(taskState ? JSON.parse(taskState) : {}),
    tasksLoaded: true
  };
};

export const fetchTasks = action(fetchTasksAction, [effects.addFirstTask]);

/*



*/
