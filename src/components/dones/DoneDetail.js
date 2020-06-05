import React from "react";
import { connect } from "react-redux";

const DoneDetail = ({ done }) => {
  if (!done) {
    return <div>Please select a done!</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {done.title}
        <br />
        Description: {done.description}
        <br />
        Date: {done.doneDate.format("DD/MM/YYYY")}
        <br />
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { done: state.selectedDone };
};

export default connect(mapStateToProps)(DoneDetail);
