import React, { Component } from 'react';
import PostList from './PostList';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page with all blog posts</h1>
        <PostList posts={this.props.posts} />
      </div>
    );
  }
}

export default Home;
