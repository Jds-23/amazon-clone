import React, {useEffect} from "react";
import './App.css';
import Header from "./Component/Header";
import Home from "./Component/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Component/Checkout";
import Login from "./Component/Login";
import {auth} from "./firebase";
import {useStateValue} from "./Context/StateProvider";
import Payment from "./Component/Payment";
import Orders from "./Component/Orders";


function App() {
    const [{},dispatch]=useStateValue();

    useEffect(()=>{
        auth.onAuthStateChanged(authUser=>{
            console.log("The user >>>> ",authUser);
            if (authUser){
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            }else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    },[])
  return (
      <Router>
          <div className="app">
              <Switch>
                  <Route exact path="/" >
                      <Header/>
                      <Home/>
                  </Route>
                  <Route exact path="/checkout" >
                      <Header/>
                      <Checkout/>
                  </Route>
                  <Route exact path="/login" >
                      <Login/>
                  </Route>
                  <Route exact path="/payment" >
                      <Header/>
                      <Payment/>
                  </Route>
                  <Route exact path="/orders" >
                      <Header/>
                      <Orders/>
                  </Route>

              </Switch>
          </div>
      </Router>
  );
}

export default App;
