import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import PostForm from './PostForm';
import PostDetail from './PostDetail';

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
              <PostForm addPost={addPost} editPost={editPost} {...props} />
            )}
          />
          <Route
            exact
            path="/:postId"
            render={props => (
              <PostDetail
                editPost={editPost}
                deletePost={deletePost}
                addComment={addComment}
                deleteComment={deleteComment}
                {...props}
                posts={posts}
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
