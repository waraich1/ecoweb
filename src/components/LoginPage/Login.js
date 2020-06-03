import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

class Login extends Component {
  render() {
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
        onSuccess={this.responseGoogle}
        onFailure={this.errorMess}
        cookiePolicy={"single_host_origin"}
      />
    );
  }
}

export default Login;
