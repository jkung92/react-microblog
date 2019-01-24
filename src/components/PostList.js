import React, { Component } from 'react';
import PostCard from './PostCard';

class PostList extends Component {
  render() {
    const { blogPosts } = this.props;
    return (
      <div className="d-flex d-inline-block justify-content-center">
        {Object.keys(blogPosts).map(id => (
          <PostCard
            id={id}
            title={blogPosts[id].title}
            description={blogPosts[id].description}
            body={blogPosts[id].body}
            key={id}
          />
        ))}
      </div>
    );
  }
}

export default PostList;
