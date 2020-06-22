import Axios from "axios";

export default (done) => async (dispatch) => {
  await Axios.post("/dones", done);
  dispatch({
    type: "CREATE_DONE",
    payload: done,
  });
};
