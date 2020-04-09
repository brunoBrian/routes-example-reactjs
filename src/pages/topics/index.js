import React from 'react';
import {useRouteMatch, useParams, Link, Switch, Route} from 'react-router-dom';
import TopicId from './topic-id';
function Topics() {
  let match = useRouteMatch();

  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <TopicId />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
      </header>
      
    </div>
  );
}

export default Topics;