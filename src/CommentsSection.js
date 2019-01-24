import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentsSection extends Component {
  render() {
    return (
      <div>
        <h3>Comments: </h3>
        {this.props.comments.map(c => (
          <Comment
            comment={c}
            key={c.commentId}
            deleteComment={this.props.deleteComment}
          />
        ))}

        <CommentForm
          post={this.props.post}
          addComment={this.props.addComment}
        />
      </div>
    );
  }
}

export default CommentsSection;
