import React from "react";
import { removeAllTasks, setModal } from "../state/actions";
import { Button } from "../styles/Buttons";
import * as Type from "../styles/Typography";

const DeleteTasksModal = () => (
  <div>
    <Type.P>You want to remove everything? They're not coming back.</Type.P>
    <div style={{ textAlign: "right" }}>
      <Button margin="0 1rem 0 0" onClick={() => setModal({ active: false })}>
        Cancel
      </Button>
      <Button
        mode="caution"
        onClick={() => {
          removeAllTasks();
          setModal({ active: false });
        }}
      >
        Delete
      </Button>
    </div>
  </div>
);

export const modalContent = {
  deleteTasks: <DeleteTasksModal />
};
