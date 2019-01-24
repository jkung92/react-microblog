import {
  ADD_COMMENT,
  ADD_POST,
  DELETE_COMMENT,
  DELETE_POST,
  EDIT_POST
} from './actionTypes';

const INITIAL_STATE = { blogPosts: {}, blogComments: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST: {
      return state;
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
