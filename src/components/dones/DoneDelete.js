import React from "react";
import Modal from "../Modal";

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
        redirectPath="/"
        title="Delete Done"
        content="Are you sure you want to delete this done?"
        actions={actions}
      />
    </div>
  );
};

export default DoneDelete;
