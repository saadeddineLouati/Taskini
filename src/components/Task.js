import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { updateTask } from "../state/actions";
import * as Styled from "../styles";
import { TaskInput } from "./TaskInput";

const handleListItemFocus = id => () => {
  document.getElementById(id).focus();
};

const toggleComplete = (id, complete) => () => {
  updateTask(id, { complete });
};

const updateValue = id => value => updateTask(id, { value });

export const Task = ({ complete, id, index, value }) => (
  <Draggable draggableId={id} index={index}>
    {(provided, { isDragging }) => (
      <Styled.TaskListItem
        isDragging={isDragging}
        ref={provided.innerRef}
        tabIndex="0"
        onFocus={handleListItemFocus(id)}
        {...provided.draggableProps}
      >
        <Styled.TaskItemDragHandle
          isDragging={isDragging}
          data-drag-handle
          {...provided.dragHandleProps}
        />
        <Styled.TaskItemCompleteButton
          complete={complete}
          onClick={toggleComplete(id, !complete)}
          tabIndex="-1"
        />
        <TaskInput
          id={id}
          complete={complete}
          value={value}
          onChange={updateValue(id)}
        />
      </Styled.TaskListItem>
    )}
  </Draggable>
);
