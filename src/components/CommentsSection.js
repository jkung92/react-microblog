import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentsSection extends Component {
  render() {
    const comments = this.props.comments;

    return (
      <div>
        <h3>Comments: </h3>
        {comments.map(c => (
          <Comment
            comment={c.text}
            key={c.commentId}
            commentId={c.commentId}
            postId={this.props.postId}
            deleteComment={this.props.deleteComment}
          />
        ))}

        <CommentForm
          post={this.props.post}
          postId={this.props.postId}
          addComment={this.props.addComment}
        />
      </div>
    );
  }
}

export default CommentsSection;
