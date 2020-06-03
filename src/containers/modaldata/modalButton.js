import React, { Component } from "react";
import Modal from "./modal";
import Aux from "../../aux/Aux";
import ModalData from "./modalData";
import { Button } from "semantic-ui-react";
import Navbar from "./navbar";

class ModalButton extends Component {
  state = {
    show: false
  };
  render() {
    let modal = null;
    if (this.state.show) {
      modal = (
        <Modal
          show={this.state.show}
          clicked={() => this.setState({ show: false })}
        >
          <Navbar />
        </Modal>
      );
    }
    return (
      <Aux>
        <Button onClick={() => this.setState({ show: true })} />
        {modal}
      </Aux>
    );
  }
}

export default ModalButton;
