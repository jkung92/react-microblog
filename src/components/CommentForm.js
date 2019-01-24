import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(`THIS IS THE POST PROP IN HANDLE SUBMIT`, this.props.post);
    // take in this.props.id (post id)
    // call function on App to add new comment to array
    this.props.addComment(this.state, this.props.postId);
    // this.props.addComment(this.state, this.props.post.id);
    // take this.state.comment as the comment value

    this.setState({ comment: '' });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="comment" />
            <input
              onChange={this.handleChange}
              type="text"
              name="comment"
              value={this.state.comment}
              className="form-control"
              id="comment"
              placeholder="New Comment"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
