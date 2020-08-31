import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { Provider } from "../state";
import { reorderTasks, setRoute } from "../state/actions";
import { GlobalStyle } from "../styles";

import { Modal } from "./Modal";
import { Router } from "./Router";
import { TaskListHeader } from "./TaskListHeader";
import { TaskList } from "./TaskList";

export const App = () => (
  <Provider>
    <div style={{
      textAlign: 'center',
      background: 'linear-gradient(45deg, #F27121, #E94057,#8A2387)',
      color: 'white'
    }}>
      <h1>Taskini <sub><small style={{ color: "gray" }}>By Saadeddine LOUATI</small></sub></h1>
    </div>
    <GlobalStyle />
    <Modal />
    <Router setRoute={setRoute}>
      <TaskListHeader />
      <DragDropContext onDragEnd={reorderTasks}>
        <TaskList />
      </DragDropContext>
    </Router>
  </Provider>
);
