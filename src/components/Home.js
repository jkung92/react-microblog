import React, { Component } from 'react';
import PostListContainer from '../containers/PostListContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <p>
          Welcome to Microblog, our innovative site for communicating on the
          information superhighway.
        </p>
        <PostListContainer posts={this.props.posts} />
      </div>
    );
  }
}

export default Home;
