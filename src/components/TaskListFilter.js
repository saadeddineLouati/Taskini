import React from "react";
import { Link } from "react-router-dom";

import { connect } from "../state";
import { FILTERS } from "../constant";
import { TaskFilterLink } from "../styles";

class TaskListFilterComponent extends React.PureComponent {
  render() {
    return (
      <div>
        {Object.keys(FILTERS).map(path => (
          <TaskFilterLink key={path} active={path === this.props.route}>
            <Link to={path}>{FILTERS[path].text}</Link>
          </TaskFilterLink>
        ))}
      </div>
    );
  }
}

export const TaskListFilter = connect(
  TaskListFilterComponent,
  ({ route }) => ({ route })
);
