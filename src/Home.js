import React, { Component } from 'react';
import PostList from './PostList';

class Home extends Component {
  render() {
    return (
      <div>
        <p>
          Welcome to Microblog, our innovative site for communicating on the
          information superhighway.
        </p>
        <PostList posts={this.props.posts} />
      </div>
    );
  }
}

export default Home;
