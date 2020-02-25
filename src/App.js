import React from "react";
import "./App.css";

// Dependencies Below //
import { Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// Dependencies Above //

// Routes Below //
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import ShirtsComponent from './Components/ShirtsComponent/ShirtsComponent';
import HoodiesComponent from './Components/HoodiesComponent/HoodiesComponent';
import HatsComponent from './Components/HatsComponent/HatsComponent';
// Routes Above //

function App() {
  return (
    <div>
      <Provider store={store}>
        <HashRouter>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/shirts" component={ShirtsComponent} />
          <Route path="/hoodies" component={HoodiesComponent} />
          <Route path="/hats" component={HatsComponent} />
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
