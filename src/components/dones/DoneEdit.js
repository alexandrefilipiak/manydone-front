// generated with template rcredux
import React from "react";
import { connect } from "react-redux";

const DoneEdit = (props) => {
  console.log(props);
  return <div>DoneEdit</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { done: state.dones[ownProps.match.params.id] };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DoneEdit);
