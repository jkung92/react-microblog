import React, { Component } from 'react';
import NavBar from './NavBar';
import Routes from './Routes';
import uuid from 'uuid';
import { withRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // posts: [],
      // comments: []
    };
    // this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  // addPost(post) {
  //   let id = uuid();
  //   let newPost = { ...post, id };
  //   this.setState(currState => ({ posts: [...currState.posts, newPost] }));
  // }

  addComment(comment, postId) {
    let commentId = uuid();
    let newComment = { ...comment, postId, commentId };
    console.log('new comment:', newComment);
    this.setState(currState => ({
      comments: [...currState.comments, newComment]
    }));
  }

  // Check w/ michael on edit and delete post after lunch
  editPost(post, id) {
    let editedPost = { ...post, id };
    // Use map to return new array
    let editedPosts = this.state.posts.map(function(p) {
      if (p.id === id) {
        p = editedPost;
      }
      return p;
    });
    this.setState({ posts: editedPosts });
  }

  deletePost(id) {
    // Use filter to return new array
    let updatedPosts = this.state.posts.filter(p => p.id !== id);
    this.setState({ posts: updatedPosts });
  }

  deleteComment(id) {
    // Use filter to return new array
    let updatedComments = this.state.comments.filter(c => c.commentId !== id);
    this.setState({ comments: updatedComments });
  }

  render() {
    const { posts, comments } = this.state;

    return (
      <div className="App container">
        <NavBar />
        <Routes
          // addPost={this.addPost}
          editPost={this.editPost}
          deletePost={this.deletePost}
          deleteComment={this.deleteComment}
          addComment={this.addComment}
          posts={posts}
          comments={comments}
        />
      </div>
    );
  }
}

export default withRouter(App);
