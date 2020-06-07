import React from "react";
import { Field, reduxForm } from "redux-form";

class DoneCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    //console.log(formProps);
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
      </form>
    ); //<Field name="doneDate" />
  }
}

export default reduxForm({
  form: "doneCreate",
})(DoneCreate);
