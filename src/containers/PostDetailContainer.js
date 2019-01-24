import React, { Component } from 'react';
import PostDetail from '../components/PostDetail';
import { connect } from 'react-redux';
import { addPost } from '../actionCreators';

class PostDetailContainer extends Component {
  render() {
    return (
      <div>
        <PostDetail {...this.props} />
      </div>
    );
  }
}

// dispatch add new post

function mapDispatchToProps(dispatch, ownProps) {
  // ownProps will look like {post : {title, desc, body}}
  return {
    addPost: ownProps => dispatch(addPost(ownProps.post))
  };
}

// map state to props to get individual post details (object of post with comments inside)
function mapStateToProps(state) {
  return {
    blogPosts: state.blogPosts
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailContainer);
