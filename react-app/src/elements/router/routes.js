import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Main from '../../elements/layouts/Main';
import  Home from '../../elements/pages/Home';
import  About from '../../elements/pages/About';

const AppRoute = ({ page: Page, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
      <Layout>
        <Page {...props} />
      </Layout>
    )} />
  )

const createRoutes = () =>  (
    <Router>
        <Switch>
            <AppRoute exact path="/about" layout={Main} page={About} />
            <AppRoute exact path="/" layout={Main} page={Home} />
        </Switch>
    </Router>
);

export default createRoutes;