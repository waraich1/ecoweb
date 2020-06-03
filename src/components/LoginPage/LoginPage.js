import React from "react";
import LoginModal from "./LoginModal";
import styled from "styled-components";
import img from "../../images/background.png";

const loginpage = () => {
  const LoginPage = styled.div`
    background-image: url(${img});
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    background-size: cover;
    background-position: center;
  `;
  return (
    <LoginPage>
      <LoginModal />
    </LoginPage>
  );
};

export default loginpage;
