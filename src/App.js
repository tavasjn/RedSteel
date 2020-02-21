import React from "react";
import "./App.css";

// Dependencies Below //
import { Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

// Dependencies Above //

// Routes Below //
import HomeComponent from "./Components/HomeComponent";
// Routes Above //

function App() {
  return (
    <div>
      <HashRouter>
        <Route exact path="/" component={HomeComponent} />
      </HashRouter>
    </div>
  );
}

export default App;
