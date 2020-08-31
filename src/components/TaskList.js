import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { connect } from "../state";
import { fetchTasks } from "../state/actions";
import { FILTERS } from "../constant";
import { TaskWrapper } from "../styles";

import { Task } from "./Task";

class TaskListComponent extends React.PureComponent {
  componentDidMount() {
    fetchTasks();
  }

  render() {
    const { tasks } = this.props;

    return !tasks.length ? null : (
      <Droppable droppableId="task-list">
        {({ innerRef, placeholder }) => (
          <TaskWrapper ref={innerRef}>
            {tasks.map((task, index) => (
              <Task key={task.id} index={index} {...task} />
            ))}
            {placeholder}
          </TaskWrapper>
        )}
      </Droppable>
    );
  }
}

const props = state => ({
  tasksLoaded: state.tasksLoaded,
  tasks: !state.route
    ? []
    : state.taskOrder
        .filter(FILTERS[state.route].select(state.tasks))
        .map(id => ({ ...state.tasks[id] }))
});

export const TaskList = connect(
  TaskListComponent,
  props
);
