import { action } from "../";
import { listReorder } from "../../helpers/list";
import { saveTasks } from "../effects";

const reorderTasksAction = ({ source, destination }) => ({ taskOrder }) => {
  return !destination
    ? null
    : {
        taskOrder: listReorder(taskOrder, source.index, destination.index)
      };
};

export const reorderTasks = action(reorderTasksAction, [saveTasks]);
