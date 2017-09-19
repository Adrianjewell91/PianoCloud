import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from "./store/store";
import Root from "./components/root";


import * as Actions from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {

  let store;

  if (window.currentUser) {
    const preLoadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preLoadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.Actions = Actions;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
  
});
