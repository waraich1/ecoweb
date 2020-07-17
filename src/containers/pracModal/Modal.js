/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import Backdrop from './Backdrop';

const Modals = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 0;
  left: 10.5%;
  top: 13.5%;
  box-sizing: border-box;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  max-height: calc(100vh - 210px);
  overflow-y: auto;
  border-radius: 10px;
  @media (min-width: 600px) {
    width: 1134px;
    left: calc(50% - 1000npx);
  }
`;

class Modal extends Component {
  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.clicked} />
        <Modals
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </Modals>
      </>
    );
  }
}

export default Modal;
