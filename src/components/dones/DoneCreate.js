import React from "react";
import { Field, reduxForm } from "redux-form";

class DoneCreate extends React.Component {
  renderInput({ input }) {
    return <input {...input} />;
  }

  render() {
    //console.log(formProps);
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    ); //<Field name="doneDate" />
  }
}

export default reduxForm({
  form: "doneCreate",
})(DoneCreate);
