import React, { Component } from 'react';
import PostDetail from '../components/PostDetail';
import { connect } from 'react-redux';
import {
  editPost,
  deletePostFromApi,
  getPostDetailsFromApi,
  deletePost
} from '../actionCreator';

class PostDetailContainer extends Component {
  componentDidMount() {
    this.props.getPostDetailsFromApi(this.props.match.params.postId);
    // this.props.deletePostFromApi(this.props.match.params.postId);
  }

  // updates/deletes a post from database

  render() {
    return (
      <div>
        <PostDetail {...this.props} />
      </div>
    );
  }
}

// dispatch add new post

// map state to props to get individual post details (object of post with comments inside)
function mapStateToProps(state) {
  return {
    blogPosts: state.blogPosts,
    currPost: state.currPost
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editPost: (post, id) => dispatch(editPost(post, id)),
    getPostDetailsFromApi: id => dispatch(getPostDetailsFromApi(id)),
    deletePostFromApi: id => dispatch(deletePostFromApi(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailContainer);
