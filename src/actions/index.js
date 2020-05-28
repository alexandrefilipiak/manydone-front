// Action creator
const selectDone = (done) => {
  //Return an action
  return {
    type: "DONE_SELECTED",
    payload: done,
  };
};

export default selectDone;
