import { effect } from "../";
import { addTask } from "../actions";

export const addFirstTask = "ADD_FIRST_TASK";

effect(addFirstTask, ({ taskOrder }) => {
  if (!taskOrder.length) {
    addTask(0);
  }
});
