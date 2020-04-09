import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Home from '../pages/home';
import Topics from '../pages/topics';
import Form from '../pages/form';
import UrlParam from '../pages/url-param';
import RedirectAuth from '../pages/redirect-auth';
import NoMatch404 from '../pages/noMatch';
import RecursivePath404 from '../pages/recursivePath';
import Subroutes from '../pages/subRoutes';
import QueryString from '../pages/queryString';

export default function App() {
  return (
    <Router>
      <div>
        <header className='header'>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <Link to="">Url Params</Link>
              </li>
              <li>
                <Link to="/redirectauth">Redirect Auth</Link>
              </li>
              <li>
                <Link to="/nomatch">404</Link>
              </li>
              <li>
                <Link to="/recursivepath/0">Recursive Path</Link>
              </li>
              <li>
                <Link to="/subroutes">Sub Routes</Link>
              </li>
              <li>
                <Link to="/querystring">Query String</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/urlparams">
            <UrlParam />
          </Route>
          <Route path="/redirectauth">
            <RedirectAuth />
          </Route>
          <Route path="/nomatch">
            <NoMatch404 />
          </Route>
          <Route path="/recursivepath/:id">
            <RecursivePath404 />
          </Route>
          <Route path="/subroutes">
            <Subroutes />
          </Route>
          <Route path="/querystring">
            <QueryString />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}