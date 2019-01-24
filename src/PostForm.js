import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.post) {
      this.setState({
        title: this.props.post.title,
        description: this.props.post.description,
        body: this.props.post.body
      });
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.post
      ? this.props.editPost(this.state, this.props.post.id)
      : this.props.addPost(this.state);

    this.setState({ title: '', description: '', body: '' });
    this.props.history.push('/');
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div>
        <h3> New Post </h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title"> Title </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="title"
              value={this.state.title}
              className="form-control"
              id="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              onChange={this.handleChange}
              name="description"
              value={this.state.description}
              type="text"
              className="form-control"
              id="description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              onChange={this.handleChange}
              type="textarea"
              name="body"
              value={this.state.body}
              className="form-control"
              id="body"
              rows="4"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <Link to="/">
            <button type="button" className="btn btn-danger">
              Go Back
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(PostForm);
