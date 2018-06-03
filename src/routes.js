import React from 'react';
import { Router, Route, Switch, Redirect, HashRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from "./_helpers";

// Pages
import Nav from './components/common/Nav';
import HomePage from './containers/HomePage/home';
import NotFoundPage from './containers/ErrorPage/NotFoundPage';
import LoginPage from './containers/Authen/LoginPage'

class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
	      <HashRouter>
		      <Switch>
			      <Route exact path="/login" component={LoginPage}/>
			      {/*<Route component={NotFoundPage} />*/}
			      <Nav>
				      <Route exact path="/" render={() => <Redirect to="/home"/> }/>
				      <AuthenticatedRoute exact path="/" component={HomePage}/>
			      </Nav>
		      </Switch>
	      </HashRouter>
      </Router>
    );
  }
}

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    false ? (
      <Component {...props}/>
    ) : (
	    <Redirect to="/login"/>
    )
  )}/>
);

function mapStateToProps(state) {
  return {
  };
}

const connectedRoutes = connect(mapStateToProps)(Routes);
export { connectedRoutes as Routes };
