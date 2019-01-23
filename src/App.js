import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import uuid from 'uuid';
import { withRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  addPost(post) {
    let id = uuid();
    let newPost = { ...post, id };
    this.setState(currState => ({ posts: [...currState.posts, newPost] }));
  }

  // Check w/ michael on edit and delete post after lunch
  editPost(post, id) {
    let editedPost = { ...post, id };
    let targetIdx = this.state.posts.indexOf(id);
    this.setState(currState =>
      currState.posts.splice(targetIdx, 1, editedPost)
    );
  }

  deletePost(id) {
    let targetIdx = this.state.posts.indexOf(id);
    this.setState(currState => currState.posts.splice(targetIdx, 1));
  }

  render() {
    const posts = this.state.posts;
    return (
      <div className="App">
        <NavBar />
        <Routes
          addPost={this.addPost}
          editPost={this.editPost}
          deletePost={this.deletePost}
          posts={posts}
        />
      </div>
    );
  }
}

export default withRouter(App);
