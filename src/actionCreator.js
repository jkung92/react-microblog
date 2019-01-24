import {
  ADD_COMMENT,
  ADD_POST,
  DELETE_COMMENT,
  DELETE_POST,
  EDIT_COMMENT,
  EDIT_POST
} from './actionTypes';

// Blog post actions
export function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

export function deletePost(post) {
  return {
    type: DELETE_POST,
    post
  };
}

export function editPost(post) {
  return {
    type: EDIT_POST,
    post
  };
}

// Blog COMMENT actions
export function addComment(post) {
  return {
    type: ADD_COMMENT,
    post
  };
}
export function deleteComment(post) {
  return {
    type: DELETE_COMMENT,
    post
  };
}
