import React from "react";
import { Menu } from "semantic-ui-react";
import styled from "styled-components";
import ModalData from "./ModalData";
import "semantic-ui-css/semantic.min.css";

// TODO: Update <Search> usage fter its will be implemented

const Imports = styled.div`
  position: absolute;
  width: 69px;
  height: 35px;
  left: 12px;
  top: 14px;

  font-family: "Jost", sans-serif;
  font-size: 22px;
  line-height: 28px;

  color: #ffffff;
`;
const Cont = styled.div`
  padding-top: 0px;
`;

const Searchdiv = styled.div`
  right: 63px;
  top: 8px;
  position: fixed;
`;
const Dropdiv = styled.div`
  right: 277px;
  top: 6.5px;
  position: fixed;
`;

const NavBar = () => (
  <Cont>
    <Menu
      attached="top"
      style={{ background: "#519751", minHeight: "3.857143em" }}
    >
      <Searchdiv>
        <Search />
      </Searchdiv>
      <Dropdiv>
        <Drop />
      </Dropdiv>
      <Imports>Import</Imports>
    </Menu>
    <ModalData />
  </Cont>
);

export default NavBar;
