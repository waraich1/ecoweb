import React, { Component } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import Tablejs from "./containers/fakeData";
import ModalData from "./containers/modaldata/modalData";
import ModalButton from "./containers/modaldata/modalButton";
import Navbar from "./containers/modaldata/navbar";
class App extends Component {
  render() {
    // const style = {backgroundImage: 'url(./components/loginpage/background.png)'}

    return (
      <div>
        {/* <LoginPage /> */}
        {/* <ModalData /> */}
        <Tablejs />
        {/* <ModalButton /> */}
      </div>
    );
  }
}

export default App;
