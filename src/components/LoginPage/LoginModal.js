import React from "react";
import Login from "./Login";
import styled from "styled-components";

const loginmodal = () => {
  const LoginModal = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 449px;
    background-color: white;
    border: 1px solid white;
    height: 410px;
    transform: translate(-50%, -50%);
    border-radius: 14px;
  `;
  const Title = styled.p`
    position: absolute;
    top: -4%;
    font-family: "Jost", sans-serif;
    font-style: normal;
    font-weight: 1;
    font-size: 80px;
    line-height: 116px;
    color: #519751;
    left: 17%;
  `;
  const Subtitle = styled.p`
    position: absolute;
    left: 27%;
    top: 34%;
    font-family: "Jost", sans-serif;
    font-style: normal;
    font-weight: 1;
    font-size: 24px;
    line-height: 35px;
  `;
  const Sign = styled.p`
    position: absolute;
    left: 37%;
    top: 48%;
    font-size: 19px;
    font-family: "Jost", sans-serif;
  `;
  const Button = styled.div`
    position: absolute;
    left: 47%;
    top: 69%;
    height: 14%;
    transform: translate(-50%, -50%);
  `;
  return (
    <LoginModal>
      <div>
        <Title>Bamboo</Title>
        <Subtitle>By Magarvey Labs</Subtitle>
        <Sign>Sign in with</Sign>
      </div>
      <Button>
        <Login />
      </Button>
    </LoginModal>
  );
};

export default loginmodal;
