import React from "react";
import { connect } from "react-redux";
import { selectDone, fetchDones } from "../../actions";

class DoneTable extends React.Component {
  componentDidMount() {
    this.props.fetchDones();
  }

  renderList() {
    return (
      <div>test</div>
    ); /*this.props.dones.map((done) => {
      return (
        <div className="item" key={done.id}>
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
    });*/
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { dones: Object.values(state.dones) };
};

export default connect(mapStateToProps, { selectDone, fetchDones })(DoneTable);
