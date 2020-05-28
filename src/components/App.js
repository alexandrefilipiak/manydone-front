import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Welcome from "./components/Welcome.jsx";
import DoneQuickView from "./components/DoneQuickView.jsx";
import Header from "./components/Header.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/done-quick-view" component={DoneQuickView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
