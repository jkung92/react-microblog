import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostCard extends Component {
  render() {
    return (
      <Link to={`/${this.props.id}`} body={this.props.body}>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
      </Link>
    );
  }
}

export default PostCard;
