import React, { Component } from 'react';
import PostDetail from '../components/PostDetail';
import { connect } from 'react-redux';
import { editPost, deletePost } from '../actionCreator';

class PostDetailContainer extends Component {
  render() {
    return (
      <div>
        <PostDetail {...this.props} />
      </div>
    );
  }
}

// dispatch add new post

// map state to props to get individual post details (object of post with comments inside)
function mapStateToProps(state) {
  return {
    blogPosts: state.blogPosts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editPost: (post, id) => dispatch(editPost(post, id)),
    deletePost: id => dispatch(deletePost(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailContainer);
