import axios from 'axios';
import {
  ADD_COMMENT,
  ADD_POST,
  DELETE_COMMENT,
  DELETE_POST,
  EDIT_POST,
  LOAD_POSTS,
  LOAD_POST_DETAILS
} from './actionTypes';

const BASE_URL = 'http://localhost:5000/api';

// Blog post actions
export function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id
  };
}

export function editPost(post, id) {
  return {
    type: EDIT_POST,
    post,
    id
  };
}

// utilizing THUNK for API request to get POSTS
export function getPostsFromApi() {
  return async function(dispatch) {
    // result.data is an array that needs to be converted into an object of post ids with post objects
    const result = await axios.get(`${BASE_URL}/posts`);
    const blogPosts = result.data.reduce((obj, currPost) => {
      obj[currPost.id] = currPost;
      return obj;
    }, {});
    dispatch(gotPosts(blogPosts));
  };
}

function gotPosts(blogPosts) {
  return { type: LOAD_POSTS, blogPosts };
}

// utilizing THUNK for API request to get POSTS
export function getPostDetailsFromApi(postId) {
  return async function(dispatch) {
    // result.data is an array that needs to be converted into an object of post ids with post objects
    const result = await axios.get(`${BASE_URL}/posts/${postId}`);
    dispatch(gotPostDetails(result.data));
  };
}

function gotPostDetails(currPost) {
  return { type: LOAD_POST_DETAILS, currPost };
}

// Blog COMMENT actions
export function addComment(comment, postId) {
  return {
    type: ADD_COMMENT,
    comment,
    postId
  };
}
export function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    postId,
    commentId
  };
}
