import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import Welcome from "./Welcome.jsx";
import DoneQuickView from "./dones/DoneQuickView.jsx";
import DoneTableView from "./dones/DoneTableView.js";
import DoneCreate from "./dones/DoneCreate.js";
import DoneEdit from "./dones/DoneEdit.js";
import Header from "./Header.jsx";
import history from "../history";

function App() {
  return (
    <div className="App">
      <Header />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/done-quick-view" component={DoneQuickView} />
          <Route path="/done-table-view" component={DoneTableView} />
          <Route path="/done-create" component={DoneCreate} />
          <Route path="/dones/edit/:id" component={DoneEdit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
