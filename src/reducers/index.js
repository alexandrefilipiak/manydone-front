import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import fetchDones from "./fetchDones.js";
import googleAuthReducer from "./googleAuthReducer.js";
import doneReducer from "./doneReducer.js";

/*export const donesReducer = () => {
  return [
    {
      id: 1,
      title: "Certification PMP",
      description:
        "Project Management Professional, above target for every domain",
      doneDate: moment("25/12/2019", "DD-MM-YYYY"),
    },
    {
      id: 2,
      title: "Certification PMI-ACP",
      description:
        "Project Management Institute - Agicle Certifide Professional, above target for every domain",
      doneDate: moment("25/12/2019", "DD-MM-YYYY"),
    },
    {
      id: 3,
      title: "Core de Force, round 1",
      description: "Fitness program",
      doneDate: moment("25/12/2019", "DD-MM-YYYY"),
    },
    {
      id: 4,
      title: "Core de Force, round 2",
      description: "Fitness program",
      doneDate: moment("25/12/2019", "DD-MM-YYYY"),
    },
  ];
};*/

export const selectedDoneReducer = (selectedDone = null, action) => {
  if (action.type === "DONE_SELECTED") {
    return action.payload;
  }

  return selectedDone;
};

export default combineReducers({
  dones: doneReducer,
  selectedDone: selectedDoneReducer,
  donesAPI: fetchDones,
  auth: googleAuthReducer,
  form: formReducer,
});
