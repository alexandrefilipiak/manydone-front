import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={() => history.push("/done-table-view")}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Delete Done</div>
        <div className="content">
          Are you sure you want to delete this done?
        </div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
