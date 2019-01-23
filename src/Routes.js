import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import PostForm from './PostForm';
import Post from './Post';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home posts={this.props.posts} />}
          />
          <Route
            exact
            path="/new"
            render={props => (
              <PostForm
                addPost={this.props.addPost}
                editPost={this.props.editPost}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/:postId"
            render={props => (
              <Post
                editPost={this.props.editPost}
                deletePost={this.props.deletePost}
                {...props}
                posts={this.props.posts}
              />
            )}
          />
          <Route render={() => <Home />} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
