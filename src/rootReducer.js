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
      var newPostObj = {};
      newPostObj[id] = action.post;
      console.log(`inside add post, checking newPostObj`, newPostObj);
      // access post from action dispatch & add id
      return {
        ...state,
        blogPosts: { ...state.blogPosts, newPostObj }
      };
    }

    case EDIT_POST: {
      return state;
    }
    case DELETE_POST: {
      return state;
    }
    case ADD_COMMENT: {
      return state;
    }
    case DELETE_COMMENT: {
      return state;
    }
    default:
      return state;
  }
}

export default rootReducer;
