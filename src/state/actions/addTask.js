import { action } from "..";
import { listInsert } from "../../helpers/list";
import { focusTaskInput, saveTasks } from "../effects";

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

const effects = [focusTaskInput, saveTasks];

export const addTask = action(addTaskAction, effects);
