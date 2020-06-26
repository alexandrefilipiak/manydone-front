// generated with template rcredux
import React from "react";
import { connect } from "react-redux";
import { fetchDone } from "../../actions/index";

class DoneEdit extends React.Component {
  componentDidMount() {
    this.props.fetchDone(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    if (!this.props.done) {
      return <div>Loading...</div>;
    }

    return <div>{this.props.done.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { done: state.dones[ownProps.match.params.id] };
};

const mapDispatchToProps = {
  fetchDone,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoneEdit);
