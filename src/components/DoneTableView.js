import React from "react";
import { connect } from "react-redux";

class DoneTableView extends React.Component {
  render() {
    return <div>Dones</div>;
  }
}

const mapStateToProps = (state) => {
  console.log("here is the state:" + JSON.stringify(state));

  return state;
};

export default connect(mapStateToProps)(DoneTableView);
