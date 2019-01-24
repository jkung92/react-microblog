import React, { Component } from 'react';
import CommentsSection from '../components/CommentsSection';
import { connect } from 'react-redux';
import { addComment } from '../actionCreator';

class CommentsSectionContainer extends Component {
  render() {
    return (
      <div>
        <CommentsSection post={this.props.post} {...this.props} />
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
    addComment: comment => dispatch(addComment(comment))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsSectionContainer);
