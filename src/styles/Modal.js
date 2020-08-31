import styled from "styled-components";
import { colors } from "./";

export const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.65);
  height: 100vh;
  left: 0;
  right: 0;
  transition: opacity 0.35s ease-in-out;
  opacity: 0;
  position: fixed;
  top: -999rem;
  z-index: 10;

  &.is-active {
    top: 0;
  }
  &.is-visible {
    opacity: 1;
  }
`;

export const ModalWindow = styled.div`
  background: ${colors.white};
  border-radius: 0.2rem;
  height: 0;
  left: 50%;
  opacity: 0;
  padding: 2rem;
  position: absolute;
  top: calc(40% + 1rem);
  transform: translate(-50%, -50%);
  transition: opacity 0.35s ease-in-out, top 0.25s ease-in-out;
  width: ${p => p.width}px;
  z-index: 20;

  &.is-active {
    height: auto;
  }

  &.is-visible {
    opacity: 1;
    top: 40%;
  }
`;
