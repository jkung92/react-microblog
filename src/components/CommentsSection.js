import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentsSection extends Component {
  render() {
    console.log(`These are props inside CommentsSection`, this.props);
    const comments = this.props.blogPosts[this.props.postId].comments;
    return (
      <div>
        <h3>Comments: </h3>
        {comments.map(c => (
          <Comment
            comment={c.comment}
            key={Object.keys(c)[0]}
            commentId={Object.keys(c)[0]}
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
