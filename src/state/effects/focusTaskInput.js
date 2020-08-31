import { effect } from '../';

export const focusTaskInput = 'FOCUS_TASK_INPUT';

effect(focusTaskInput, ({ taskIndex, taskOrder }, prevState) => {
  let input = null;

  // If task removed
  if (prevState.taskOrder.length > taskOrder.length) {
    const removedID = prevState.taskOrder.filter(id => !taskOrder.includes(id))[0];
    const prevID = prevState.taskOrder[prevState.taskOrder.indexOf(removedID) - 1];

    if (prevState.taskOrder.indexOf(removedID) === 0) {
      input = document.getElementById(taskOrder[0]);
    } else {
      input = document.getElementById(prevID);
    }
  }

  // If task added
  if (prevState.taskOrder.length < taskOrder.length) {
    input = document.getElementById(taskIndex);
  }

  if (input) {
    input.focus();
  }
});
