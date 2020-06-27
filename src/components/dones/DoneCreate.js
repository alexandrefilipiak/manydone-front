import React from "react";
import { connect } from "react-redux";
import { createDone } from "../../actions";
import DoneForm from "./DoneForm.js";

class DoneCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createDone(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Done</h3>
        <DoneForm onSubmit={this.onSubmit}></DoneForm>
      </div>
    );
  }
}

export default connect(null, { createDone })(DoneCreate);
