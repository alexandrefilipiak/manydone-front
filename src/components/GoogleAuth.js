import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client: auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "965464288608-eq384s4i76u0tq8kcmrsc9acrff9k75j.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
        });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
