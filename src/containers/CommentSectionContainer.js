import React, { Component } from 'react';
import CommentsSection from '../components/CommentsSection';
import { connect } from 'react-redux';
import { addComment, deleteComment } from '../actionCreator';

class CommentsSectionContainer extends Component {
  render() {
    return (
      <div>
        <CommentsSection
          postId={this.props.id}
          post={this.props.post}
          {...this.props}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    blogPosts: state.blogPosts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: (comment, postId) => dispatch(addComment(comment, postId)),
    deleteComment: (postId, commentId) =>
      dispatch(deleteComment(postId, commentId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsSectionContainer);
