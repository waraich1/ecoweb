import React from "react";
import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";
import ModalData from "./modalData";
import "./modal.css";
// TODO: Update <Search> usage after its will be implemented

const MenuExampleAttached = () => (
  <div>
    <Menu attached="top" style={{ background: "#519751" }}>
      <p className="import">Imports</p>
    </Menu>
    <ModalData />
  </div>
);

export default MenuExampleAttached;
