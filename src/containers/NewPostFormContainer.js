import React, { Component } from 'react';
import PostForm from '../components/PostForm';
import { addPost } from '../actionCreator';
import { connect } from 'react-redux';

class NewPostFormContainer extends Component {
  render() {
    return <PostForm {...this.props} />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: post => dispatch(addPost(post))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(NewPostFormContainer);
