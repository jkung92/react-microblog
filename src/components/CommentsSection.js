import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentsSection extends Component {
  render() {
    console.log(`These are props inside CommentsSection`, this.props);
    return (
      <div>
        <h3>Comments: </h3>
        {this.props.post.comments.map(c => (
          <Comment
            comment={c.comment}
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
