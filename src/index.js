import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProvider} from "./Context/StateProvider";
import reducer, {initialState} from "./reducer"
import MyFooter from "./Component/Footer";

ReactDOM.render(
  <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
          <App />
          <MyFooter/>
      </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

