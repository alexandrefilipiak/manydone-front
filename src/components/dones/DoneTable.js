import React from "react";
import { connect } from "react-redux";
import { selectDone, fetchDones } from "../../actions";
import { Link } from "react-router-dom";

class DoneTable extends React.Component {
  componentDidMount() {
    this.props.fetchDones();
  }

  renderEditAndDeleteButton(done) {
    const id = done.id;
    if (done.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/dones/edit/${id}`} className="ui button primary">
            EDIT
          </Link>
          ><button className="ui button negative">DELETE</button>
        </div>
      );
    }
  }

  renderList() {
    console.log(this.props.dones);
    return this.props.dones.map((done) => {
      return (
        <div className="item" key={done.id}>
          <div className="content">{this.renderEditAndDeleteButton(done)}</div>
          <i className="large middle aligned icon camera " />
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectDone(done)}
            >
              Select
            </button>
          </div>
          <div className="content">{done.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui celled list">{this.renderList()}</div>; //divided list
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    dones: Object.values(state.dones),
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { selectDone, fetchDones })(DoneTable);
