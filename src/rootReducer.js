import {
  ADD_COMMENT,
  ADD_POST,
  DELETE_COMMENT,
  DELETE_POST,
  EDIT_POST
} from './actionTypes';
import uuid from 'uuid';

const INITIAL_STATE = { blogPosts: {} };
// { blogPosts: {
//    postId:
//     { title: '', description: '', body: '',
//       comments:
//        {commentId: comment}
//     }
//  }

function rootReducer(state = INITIAL_STATE, action) {
  console.log('reducer ran; state & action:', state, action);

  switch (action.type) {
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
      let newState = { ...state };
      // Make a copy of state, with this copy, change the copy and return it
      let newBlogPosts = { ...state.blogPosts };
      let newPost = { ...state.blogPosts.postId };
      // Copy of state.blogPosts
      // create a comments key inside of
      newState.blogPosts = newBlogPosts;

      newState.blogPosts[action.id] = action.post;
      return newState;
    }
    case DELETE_COMMENT: {
      return state;
    }
    default:
      return state;
  }
}

export default rootReducer;
