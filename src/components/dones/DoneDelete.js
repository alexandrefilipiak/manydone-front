import React from "react";
import Modal from "../Modal";
import history from "../../history";

const DoneDelete = () => {
  const actions = (
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  );

  return (
    <div>
      StreamDelete
      <Modal
        onDismiss={() => history.push("/done-table-view")}
        title="Delete Done"
        content="Are you sure you want to delete this done?"
        actions={actions}
      />
    </div>
  );
};

export default DoneDelete;
