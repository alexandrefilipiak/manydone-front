import React from "react";
import { Field, reduxForm } from "redux-form";

class DoneCreate extends React.Component {
  render() {
    console.log(this.props);
    return <div>create a done</div>;
  }
}

export default reduxForm({
  form: "doneCreate",
})(DoneCreate);
