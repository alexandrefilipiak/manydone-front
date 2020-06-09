import dones from "../apis/dones.js";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_DONE,
  FETCH_DONES,
  FETCH_DONE,
  DELETE_DONE,
  EDIT_DONE,
} from "./types.js";
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

export const createDone = (formValues) => async (dispatch) => {
  const response = await dones.post("/dones", formValues);
  //Return an action
  dispatch({
    type: CREATE_DONE,
    payload: response.data,
  });
};
