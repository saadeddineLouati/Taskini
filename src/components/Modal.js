import React from "react";
import Choreograph from "react-choreograph";

import { connect } from "../state";
import { setModal } from "../state/actions";
import { modalContent } from "./ModalContent";
import * as Styled from "../styles/Modal";

const enter = [
  { overlay: "is-active" },
  { overlay: "is-visible" },
  { window: "is-active" },
  { window: "is-visible" }
];

const exit = [
  { window: "is-visible" },
  { overlay: "is-visible" },
  { window: "is-active", delay: 400 },
  { overlay: "is-active", delay: 250 }
];

class ModalComponent extends React.PureComponent {
  render() {
    return (
      <Choreograph trigger={this.props.active} on={enter} off={exit}>
        {setRef => (
          <>
            <Styled.ModalOverlay
              ref={setRef("overlay")}
              onClick={() => setModal({ active: false })}
            />
            <Styled.ModalWindow ref={setRef("window")} width={this.props.width}>
              {modalContent[this.props.content]}
            </Styled.ModalWindow>
          </>
        )}
      </Choreograph>
    );
  }
}

export const Modal = connect(
  ModalComponent,
  state => ({
    active: state.modalActive,
    content: state.modalContent,
    width: state.modalWidth
  })
);
