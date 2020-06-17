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

export const createDone = (formValues) => async (dispatch, getState) => {
  console.log("actionCreator reate done called");
  const { userId } = getState().auth;
  const response = await dones.post("/dones", { ...formValues, userId });
  console.log("actionCreator reate done called2");
  //Return an action
  dispatch({
    type: CREATE_DONE,
    payload: response.data,
  });
};

export const fetchDones = () => async (dispatch) => {
  const response = await dones.get("/dones");
  dispatch({
    type: FETCH_DONES,
    payload: response.data,
  });
};

export const fetchDone = (id) => async (dispatch) => {
  const response = await dones.get(`/dones/${id}`);

  dispatch({
    type: FETCH_DONE,
    payload: response.data,
  });
};

export const editDone = (id, formValues) => async (dispatch) => {
  const response = dones.put(`/dones/${id}`, formValues);

  dispatch({
    type: EDIT_DONE,
    payload: response.data,
  });
};

export const deleteDone = (id) => async (dispatch) => {
  await dones.delete(`/dones/${id}`);

  dispatch({
    type: DELETE_DONE,
    payload: id,
  });
};
