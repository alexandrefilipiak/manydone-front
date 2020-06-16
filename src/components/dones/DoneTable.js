import React from "react";
import { connect } from "react-redux";
import { selectDone, fetchDones } from "../../actions";

class DoneTable extends React.Component {
  componentDidMount() {
    this.props.fetchDones();
  }

  renderList() {
    console.log(this.props.dones);
    return this.props.dones.map((done) => {
      return (
        <div className="item" key={done.id}>
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
  return { dones: Object.values(state.dones) };
};

export default connect(mapStateToProps, { selectDone, fetchDones })(DoneTable);
