/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
class backdrop extends Component {
  render() {
    return this.props.show ? (
      <Backdrop className="Backdrop" onClick={this.props.clicked} />
    ) : null;
  }
}
// const backdrop = props =>
//   props.show ? <div className="Backdrop" onClick={props.clicked} /> : null;

export default backdrop;
