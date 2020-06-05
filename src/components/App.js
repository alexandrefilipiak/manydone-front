import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Welcome from "./Welcome.jsx";
import DoneQuickView from "./dones/DoneQuickView.jsx";
import DoneTableView from "./dones/DoneTableView.js";
import DoneCreate from "./dones/DoneCreate.js";
import Header from "./Header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/done-quick-view" component={DoneQuickView} />
          <Route path="/done-table-view" component={DoneTableView} />
          <Route path="/done-create" component={DoneCreate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
