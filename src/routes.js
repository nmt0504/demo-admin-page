import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './containers/HomePage/home';
import NotFoundPage from './containers/ErrorPage/NotFoundPage';
import LoginPage from './containers/Authen/LoginPage'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <AuthenticatedRoute exact path="/" component={HomePage}/>
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    false ? (
      <Component {...props}/>
    ) : (
      <LoginPage/>
    )
  )}/>
);

function mapStateToProps(state) {
  return {
  };
}

const connectedRoutes = connect(mapStateToProps)(Routes);
export { connectedRoutes as Routes };
