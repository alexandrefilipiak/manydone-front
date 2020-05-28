// Action creator
export const selectDone = (done) => {
  //Return an action
  return {
    type: "DONE_SELECTED",
    payload: done,
  };
};
