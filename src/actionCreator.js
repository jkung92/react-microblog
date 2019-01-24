import {
  ADD_COMMENT,
  ADD_POST,
  DELETE_COMMENT,
  DELETE_POST,
  EDIT_COMMENT,
  EDIT_POST
} from './actionTypes';

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: post
  };
}

export function addComment(post) {
  return {
    type: ADD_COMMENT,
    payload: post
  };
}
export function deleteComment(post) {
  return {
    type: DELETE_COMMENT,
    payload: post
  };
}
export function deletePost(post) {
  return {
    type: DELETE_POST,
    payload: post
  };
}
export function editPost(post) {
  return {
    type: EDIT_POST,
    payload: post
  };
}
