import React from "react";
import { TITLE } from "../constant";
import { setModal } from "../state/actions";
import { TaskListFilter } from "./TaskListFilter";

import * as Styled from "../styles";

import { Button } from "../styles/Buttons";

const openDeleteConfirmationModal = () =>
  setModal({
    active: true,
    content: "deleteTasks",
    width: 400
  });

export const TaskListHeader = () => (
  <Styled.TaskHeader>
    <Styled.TaskTitle>{TITLE}</Styled.TaskTitle>
    <Styled.TaskToolbar>
      <TaskListFilter />
      <Button
        mode="caution"
        type="button"
        onClick={openDeleteConfirmationModal}
      >
        Delete Tasks
      </Button>
    </Styled.TaskToolbar>
  </Styled.TaskHeader>
);
