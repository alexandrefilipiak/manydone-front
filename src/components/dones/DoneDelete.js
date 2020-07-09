import React from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import history from "../../history";
import { fetchDone, deleteDone } from "../../actions";
import { connect } from "react-redux";

class DoneDelete extends React.Component {
  componentDidMount() {
    this.props.fetchDone(this.props.match.params.id);
  }

  render() {
    const { id } = this.props.match.params;
    const actions = (
      <>
        <button
          onClick={() => this.props.deleteDone(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/done-table-view" className="ui button">
          Cancel
        </Link>
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

export default connect(mapStateToProps, { fetchDone, deleteDone })(DoneDelete);
