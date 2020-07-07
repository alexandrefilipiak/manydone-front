import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchDone } from "../../actions";
import { connect } from "react-redux";

class DoneDelete extends React.Component {
  componentDidMount() {
    this.props.fetchDone(this.props.match.params.id);
  }

  render() {
    const actions = (
      <>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </>
    );
    return (
      <Modal
        onDismiss={() => history.push("/done-table-view")}
        title="Delete Done"
        content={`Are you sure you want to delete the done item with title: ${
          this.props.done ? this.props.done.title : ""
        }?`}
        actions={actions}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    done: state.dones[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchDone })(DoneDelete);
