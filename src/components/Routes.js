import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import NewPostFormContainer from '../containers/NewPostFormContainer';
import PostDetailContainer from '../containers/PostDetailContainer';

class Routes extends Component {
  render() {
    const {
      posts,
      addPost,
      editPost,
      deletePost,
      addComment,
      deleteComment,
      comments
    } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home posts={posts} />} />
          <Route
            exact
            path="/new"
            render={props => (
              <NewPostFormContainer
                // addPost={addPost}
                editPost={editPost}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/:postId"
            render={props => (
              <PostDetailContainer
                // addComment={addComment}
                // deleteComment={deleteComment}
                {...props}
                // posts={posts}
                comments={comments}
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
