import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PostForm from './PostForm';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { editView: false };
  }

  handleEdit = () => {
    this.setState({ editView: true });
  };

  remove = () => {
    const id = this.props.match.params.postId;
    this.props.deletePost(id);
  };

  render() {
    // get the id of the and find the post in the posts array
    const id = this.props.match.params.postId;
    let post = this.props.posts.find(p => p.id === id);
    if (!post) return <Redirect to="/" />;

    return (
      <div>
        {this.state.editView ? (
          <PostForm post={post} editPost={this.props.editPost} />
        ) : (
          <div>
            <span>
              <h4 style={{ display: 'inline-block justify-content-center' }}>
                {post.title}
              </h4>
              <i
                className="far fa-trash-alt float-right m-1"
                style={{ color: 'green' }}
                onClick={this.remove}
              />
              <i
                className="fas fa-edit float-right m-1"
                style={{ color: 'dodgerblue' }}
                onClick={this.handleEdit}
              />
            </span>
            <p>{post.description}</p>
            <p>{post.body}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Post;
