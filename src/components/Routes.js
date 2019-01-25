import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import NewPostFormContainer from '../containers/NewPostFormContainer';
import PostDetailContainer from '../containers/PostDetailContainer';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/new"
            render={props => <NewPostFormContainer {...props} />}
          />
          <Route
            exact
            path="/:postId"
            render={props => <PostDetailContainer {...props} />}
          />
          <Route render={() => <Home />} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
