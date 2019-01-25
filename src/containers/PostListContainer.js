import React, { Component } from 'react';
import PostList from '../components/PostList';
import { connect } from 'react-redux';
import { getPostsFromApi } from '../actionCreator';

//

class PostListContainer extends Component {
  componentDidMount() {
    this.props.getPostsFromApi();
  }
  render() {
    return (
      <div className="d-flex d-inline-block justify-content-center">
        <PostList {...this.props} />
      </div>
    );
  }
}

// map state to props here to get post list info
function mapStateToProps(state) {
  return {
    blogPosts: state.blogPosts
  };
}

export default connect(
  mapStateToProps,
  { getPostsFromApi }
)(PostListContainer);
