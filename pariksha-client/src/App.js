import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";

function App() {
  return (
    <div>
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Register" component={Register}/>
          </Switch>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
