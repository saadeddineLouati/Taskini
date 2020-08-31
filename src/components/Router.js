import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class RouteDispatch extends React.Component {
  componentDidMount() {
    this.props.setRoute(this.props.route);
  }
  componentDidUpdate() {
    this.props.setRoute(this.props.route);
  }
  render() {
    return this.props.children;
  }
}

export const Router = ({ children, setRoute }) => (
  <BrowserRouter>
    <Route
      render={({ location }) => (
        <RouteDispatch setRoute={setRoute} route={location.pathname}>
          {children}
        </RouteDispatch>
      )}
    />
  </BrowserRouter>
);
