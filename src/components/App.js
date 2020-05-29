import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Welcome from "./Welcome.jsx";
import DoneQuickView from "./DoneQuickView.jsx";
import DoneTableView from "./DoneTableView.js";
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
