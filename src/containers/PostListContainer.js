import React, { Component } from 'react';
import PostList from '../components/PostList';

//

class PostListContainer extends Component {
  render() {
    return (
      <div className="d-flex d-inline-block justify-content-center">
        <PostList {...this.props} />
      </div>
    );
  }
}

// map state to props here to get post list info

export default PostListContainer;
