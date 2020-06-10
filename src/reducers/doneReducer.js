import _ from "lodash";

import {
  CREATE_DONE,
  FETCH_DONES,
  FETCH_DONE,
  DELETE_DONE,
  EDIT_DONE,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_DONES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_DONE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_DONE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_DONE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_DONE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
