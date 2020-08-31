import styled, { css } from "styled-components";
import { colors } from "./";
import { buttonStyles } from "./Buttons";

const isComplete = (completed, notComplete) => ({ complete }) =>
  complete ? completed : notComplete;

const dragHandleCircle = css`
  border: 1px solid ${colors.gray10};
  border-radius: 0.2rem;
  content: "";
  display: block;
  left: 0.3rem;
  position: absolute;
  height: 0.3rem;
  width: 0.3rem;
`;

export const TaskHeader = styled.div`
  margin: 8rem auto 1rem;
  max-width: 60rem;
`;

export const TaskToolbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TaskTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
`;

export const TaskDeleteButton = styled.button`
  background: transparent;
  border: 1px solid ${colors.red70};
  border-radius: 1rem;
  color: ${colors.red70};
  font-size: 1.2rem;
  outline: none;
  opacity: 0.5;
  padding: 0.2rem 0.6rem;
  transition: background 0.15s ease-in-out, opacity 0.15s ease-in-out;

  :hover,
  :focus {
    background: ${colors.red10};
    opacity: 1;
  }
`;

export const TaskFilterLink = styled.span`
  a {
    ${buttonStyles}
    margin-right: 1rem;
    text-decoration: none;
  }
`;

export const TaskWrapper = styled.ul`
  background: ${colors.white};
  border: 1px solid ${colors.gray10};
  border-radius: 0.3rem;
  list-style: none;
  margin: 0 auto;
  max-width: 60rem;
  padding: 0;
  width: 100%;
`;

export const TaskListItem = styled.li`
  align-items: center;
  background: ${colors.offwhite};
  height: 4rem;
  outline: none;
  position: relative;

  :hover {
    background: ${colors.white};

    [data-drag-handle] {
      display: block;
    }
  }

  :not(:first-child) {
    border-top: 1px solid ${colors.gray10};
  }

  ${p =>
    p.isDragging &&
    css`
      border: 1px solid ${colors.gray10};
    `}
`;

export const TaskItemDragHandle = styled.div`
  display: ${p => (p.isDragging ? "block" : "none")};
  height: 2rem;
  left: 0.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  z-index: 2;

  :before {
    ${dragHandleCircle}
    top: 0.3rem
  }

  :after {
    ${dragHandleCircle}
    bottom: 0.3rem;
  }
`;

export const TaskItemInput = styled.input`
  background: transparent;
  border: 0;
  color: ${colors.gray70};
  cursor: default;
  font-size: 1.4rem;
  height: 100%;
  opacity: ${isComplete("0.3", "1")};
  outline: none;
  padding-left: 5rem;
  width: 100%;

  :hover,
  :active,
  :focus {
    background: ${colors.white};
    color: ${colors.gray90};
  }

  :active,
  :focus {
    cursor: text;
  }
`;

export const TaskItemCompleteButton = styled.button`
  background: ${isComplete(colors.green, "transparent")};
  border: 1px solid ${isComplete(colors.green, colors.gray20)};
  border-radius: 50%;
  cursor: pointer;
  height: 2.25rem;
  left: 2rem;
  opacity: ${isComplete("0.5", "1")};
  outline: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2.25rem;
  z-index: 1;

  :hover {
    border-color: ${isComplete(colors.green, colors.gray40)};
    opacity: 1;
  }

  :before {
    content: "";
    border-bottom: 1px solid ${isComplete(colors.white, colors.gray40)};
    border-right: 1px solid ${isComplete(colors.white, colors.gray40)};
    display: block;
    height: 1rem;
    left: 0.82rem;
    position: absolute;
    top: 0.4rem;
    transform: rotate(38deg);
    width: 0.4rem;
  }

  :hover:before {
    border-color: ${isComplete(colors.white, colors.gray40)};
  }
`;
