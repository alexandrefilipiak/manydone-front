// Action creator
export const selectDone = (doneId) => {
  //Return an action
  return {
    type: "DONE_SELECTED",
    payload: doneId,
  };
};
