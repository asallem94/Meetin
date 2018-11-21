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
const AuthEventCreator = ({component: Component, path, currentUser, exact}) => (
  <Route path={path} exact={exact} render={(props) => {
      return ( currentUser.organized_groups.includes(parseInt(props.match.params.groupId))  ? (
        <Component {...props}/>
      ) : (
        <h1 className="err_page">404 Page not found</h1>
      )
    )}
    }
  />
);


const mapStateToProps = state => {

  return {
    loggedIn: Boolean(state.session.currentUserId),
    currentUser: state.entities.users[state.session.currentUserId]
  }
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
export const ProtectedFromSplat = withRouter(connect(mapStateToProps, null)(PreventSplat));
export const AuthEventCreatorRoute = withRouter(connect(mapStateToProps, null)(AuthEventCreator));
