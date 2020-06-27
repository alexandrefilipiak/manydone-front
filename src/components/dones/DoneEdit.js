// generated with template rcredux
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchDone, editDone } from "../../actions/index";
import DoneForm from "./DoneForm";

class DoneEdit extends React.Component {
  componentDidMount() {
    this.props.fetchDone(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log("test");
    this.props.editDone(this.props.match.params.id, formValues);
  };

  render() {
    console.log(this.props);
    console.log("here is this.props.done");
    console.log(this.props.done);
    if (!this.props.done) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Done</h3>
        <DoneForm
          initialValues={_.pick(
            this.props.done,
            "title",
            "description",
            "doneDate"
          )}
          onSubmit={this.onSubmit}
        ></DoneForm>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { done: state.dones[ownProps.match.params.id] };
};

const mapDispatchToProps = {
  fetchDone,
  editDone,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoneEdit);
