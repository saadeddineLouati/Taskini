import React from "react";
import { addTask, removeTask, updateTask } from "../state/actions";
import { TaskItemInput } from "../styles";

export class TaskInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.value,
      shiftDown: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.onChangeTimer = null;
  }

  handleChange(e) {
    clearTimeout(this.onChangeTimer);
    const inputValue = e.target.value;

    if (this.state.inputValue !== inputValue) {
      this.setState({ inputValue });
      this.onChangeTimer = setTimeout(() => {
        console.log(inputValue);
        this.props.onChange(inputValue);
      }, 400);
    }
  }

  handleKeyDown(e) {
    const { complete, id } = this.props;
    const { shiftDown } = this.state;
    const { keyCode, target } = e;
    const { selectionStart, value } = target;
    const cursorAtBeginning = selectionStart === 0;
    const prevItem = target.parentNode.previousSibling;
    const nextItem = target.parentNode.nextSibling;

    if (keyCode === 38 && prevItem) {
      // Up
      e.preventDefault();
      prevItem.querySelector("input").focus();
    }

    if (keyCode === 40 && nextItem) {
      // Down
      e.preventDefault();
      nextItem.querySelector("input").focus();
    }

    if (keyCode === 16) {
      // Shift
      this.setState({ shiftDown: true });
    }

    if (keyCode === 13) {
      // Enter
      if (shiftDown) {
        updateTask(id, { complete: !complete });
      } else {
        addTask(id, cursorAtBeginning);
      }
    }

    if (keyCode === 8 && !value) {
      // Backspace
      e.preventDefault();
      removeTask(id);
    }
  }

  handleKeyUp(e) {
    const { keyCode } = e;
    if (keyCode === 16) {
      // Shift
      this.setState({ shiftDown: false });
    }
  }

  render() {
    const { complete, id } = this.props;
    return (
      <TaskItemInput
        complete={complete}
        id={id}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        tabIndex="-1"
        type="text"
        value={this.state.inputValue}
      />
    );
  }
}
