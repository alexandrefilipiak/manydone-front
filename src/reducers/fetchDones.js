import Axios from "axios";

export default () => async (dispatch) => {
  const dones = await Axios.get("/dones");

  dispatch({
    type: "FETCH_DONES",
    payload: dones,
  });
};
