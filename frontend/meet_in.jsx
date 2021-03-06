import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './app'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// action cable additions
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './constants/main';


// import * as actions from './actions/membership_actions';
// window.actions = actions;

const Main = ({store}) => {
  return (
    <Provider store={store}>
      <ActionCableProvider url={API_WS_ROOT}>
        <HashRouter>
          <App/>
        </HashRouter>
      </ActionCableProvider>
    </Provider>
  )
};

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {[window.currentUser.user.id]: window.currentUser.user} ,
        groups: window.currentUser.groups
      },
      session: { currentUserId: window.currentUser.user.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById("root");
  ReactDOM.render(<Main store={store} />, root);
})
