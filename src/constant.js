export const FILTERS = {
  "/": {
    text: "All Tasks",
    select: tasks => id => tasks[id]
  },
  "/complete": {
    text: "Complete",
    select: tasks => id => tasks[id].complete
  },
  "/incomplete": {
    text: "Incomplete",
    select: tasks => id => !tasks[id].complete
  }
};

export const STORAGE_KEY = "stored-task-state";

export const TITLE = "Tasks";
