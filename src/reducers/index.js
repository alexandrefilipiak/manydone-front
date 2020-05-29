import { combineReducers } from "redux";

export const donesReducer = () => {
  return [
    {
      id: 1,
      title: "Certification PMP",
      description:
        "Project Management Professional, above target for every domain",
      doneDate: new Date(),
    },
    {
      id: 2,
      title: "Certification PMI-ACP",
      description:
        "Project Management Institute - Agicle Certifide Professional, above target for every domain",
      doneDate: new Date(),
    },
    {
      id: 3,
      title: "Core de Force, round 1",
      description: "Fitness program",
      doneDate: new Date(),
    },
    {
      id: 4,
      title: "Core de Force, round 2",
      description: "Fitness program",
      doneDate: new Date(),
    },
  ];
};

export const selectedDoneReducer = (selectedDone = null, action) => {
  if (action.type === "SELECTED_DONE") {
    return action.payload;
  }

  return selectedDone;
};

export default combineReducers({
  dones: donesReducer,
  selectedDone: selectedDoneReducer,
});
