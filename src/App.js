import React from "react";
import "./App.css";

// Dependencies Below //
import { Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// Dependencies Above //

// Routes Below //
import HomeComponent from "./Components/HomeComponent";
// Routes Above //

function App() {
  return (
    <div>
      <Provider store={store}>
        <HashRouter>
          <Route exact path="/" component={HomeComponent} />
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
