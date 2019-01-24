import React, { Component } from 'react';
import PostDetail from '../components/PostDetail';

class PostDetailContainer extends Component {
  render() {
    return (
      <div>
        <PostDetail {...this.props} />
      </div>
    );
  }
}

// map state to props to get individual post details (object of post with comments inside)

export default PostDetailContainer;
