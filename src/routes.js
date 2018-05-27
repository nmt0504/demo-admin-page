import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './containers/HomePage/home';
import NotFoundPage from './containers/ErrorPage/NotFoundPage';

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
    storeList.dataSessionStore.hasLogin() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: process.env.PUBLIC_URL + '/callback'
      }}/>
    )
  )}/>
)

function mapStateToProps(state) {
  return {
  };
}

const connectedRoutes = connect(mapStateToProps)(Routes);
export { connectedRoutes as Routes };
