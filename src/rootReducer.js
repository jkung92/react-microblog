import {
  ADD_COMMENT,
  ADD_POST,
  DELETE_COMMENT,
  DELETE_POST,
  EDIT_POST,
  LOAD_POSTS
} from './actionTypes';
import uuid from 'uuid';

const INITIAL_STATE = { blogPosts: {} };
// { blogPosts: {
//    postId:
//     { title: '', description: '', votes: '', id: '',
//       comments:
//        [{commentId: '', text: ''}]
//     }
//  }

function deepCopy(obj) {
  const str = JSON.stringify(obj);
  const copy = JSON.parse(str);
  return copy;
}

function rootReducer(state = INITIAL_STATE, action) {
  console.log('reducer ran; state & action:', state, action);

  switch (action.type) {
    case LOAD_POSTS: {
      console.log();
      return { ...state, blogPosts: action.blogPosts };
    }

    case ADD_POST: {
      //  create id, create newPost obj structure from payload
      let id = uuid();
      return {
        ...state,
        blogPosts: { ...state.blogPosts, [id]: action.post }
      };
    }

    case EDIT_POST: {
      // find post by id, update [id] value to action.post
      let newState = { ...state };
      // Make a copy of state, with this copy, change the copy and return it
      let newBlogPosts = { ...state.blogPosts };
      newState.blogPosts = newBlogPosts;
      newState.blogPosts[action.id] = action.post;
      return newState;
    }
    case DELETE_POST: {
      // find post by id, update [id] value to action.post
      let newState = { ...state };
      let newBlogPosts = { ...state.blogPosts };
      newState.blogPosts = newBlogPosts;
      delete newState.blogPosts[action.id];
      return newState;
    }
    case ADD_COMMENT: {
      let commentId = uuid();
      // MODIFIED comment structure:
      let newComment = { commentId: commentId, text: action.comment.comment };
      const copy = deepCopy(state);
      copy.blogPosts[action.postId].comments.push(newComment);
      return copy;
    }
    case DELETE_COMMENT: {
      let copy = deepCopy(state);
      let targetComments = copy.blogPosts[action.postId].comments.filter(
        function(c) {
          return c.commentId !== action.commentId;
        }
      );
      copy.blogPosts[action.postId].comments = targetComments;
      return copy;
    }
    default:
      return state;
  }
}

export default rootReducer;
