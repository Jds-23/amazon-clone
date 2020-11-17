import React from "react";
import './App.css';
import Header from "./Component/Header";
import Home from "./Component/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Component/Checkout";


function App() {
  return (
      <Router>
          <div className="app">
              <Header/>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/checkout" component={Checkout}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
