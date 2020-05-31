import React from "react";
import DoneDetail from "./DoneDetail.js";
import DoneTable from "./DoneTable.js";

class DoneTableView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="ui container grid">
          <div className="ui row">
            <div className="column height wide">
              <DoneTable />
            </div>
            <div className="column height wide">
              <DoneDetail />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DoneTableView;
