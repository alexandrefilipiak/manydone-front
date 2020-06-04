import { SIGN_IN, SIGN_OUT } from "./types.js";
// Action creators
export const selectDone = (doneId) => {
  //Return an action
  return {
    type: "DONE_SELECTED",
    payload: doneId,
  };
};
export const signIn = (userId) => {
  //Return an action
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  //Return an action
  return {
    type: SIGN_OUT,
  };
};
