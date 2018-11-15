import React from 'react'
import { withRouter, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => {
      return ( loggedIn ? (
        <Redirect to="/" />
      ) : (
        <Component {...props}/>
      )
    )}
    }
  />
);
const Protected = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => {
      return ( loggedIn ? (
        <Component {...props}/>
      ) : (
        <Redirect to="/login" />
      )
    )}
    }
  />
);
const PreventSplat = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => {
      return ( loggedIn ? (
        <Redirect to="/find" />
      ) : (
        <Component {...props}/>
      )
    )}
    }
  />
);


const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUserId)}
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
export const ProtectedFromSplat = withRouter(connect(mapStateToProps, null)(PreventSplat));
