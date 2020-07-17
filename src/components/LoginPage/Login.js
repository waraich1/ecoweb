import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

class Login extends Component {
  state = {
    res_id: []
  };

  render() {
    const responseGoogle = response => {
      this.setState({ res_id: response });
    };

    return (
      <GoogleLogin
        style={{
          borderRadius: "7px",
          border: "0.5px solid #519751",
          paddingLeft: "53px",
          paddingRight: "53px"
        }}
        clientId="170583750497-l23412rlb9a6q77knksrctcv7i5tiqe8.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        isSignedIn={true}
        onFailure={this.errorMess}
        cookiePolicy={"single_host_origin"}
      />
    );
  }
}

export default Login;
