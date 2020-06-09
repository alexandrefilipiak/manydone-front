import Axios from "axios";

export default (done) => async (dispatch) => {
  await Axios.post("/dones");

  dispatch({
    type: "CREATE_DONE",
    payload: done,
  });
};
