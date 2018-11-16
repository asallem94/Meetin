import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './app'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// import {fetchInterests} from './actions/meetin_actions'

const Main = ({store}) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
  )
};

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.fetchInterests = fetchInterests;
  // window.logout = logout;
  // window.signup = signup;
  const root = document.getElementById("root");
  ReactDOM.render(<Main store={store} />, root);
})
