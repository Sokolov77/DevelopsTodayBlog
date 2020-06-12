import {
  GET_ALL_POST_FAILURE,
  GET_ALL_POST_SUCCESS,
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  GET_POST_FAILURE,
  GET_POST_SUCCESS,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_FAILURE,
} from '../actionTypes';
import { PostsActionTypes } from '../actions/postsActions';
import { removePostFromArray } from './utils';

const initialState = {
  posts: [],
  currentPost: { id: null as number, title: '', body: '', comments: [] },
  loading: false,
  error: null,
};

export type PostInitialStateType = typeof initialState;

const postsReducer = (
  state: PostInitialStateType = initialState,
  action: PostsActionTypes
) => {
  switch (action.type) {
    case GET_ALL_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload.reverse(),
      };
    case GET_ALL_POST_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case REMOVE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: removePostFromArray(state.posts, action.payload),
      };
    case REMOVE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        currentPost: action.payload,
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case CREATE_COMMENT_REQUEST:
      return {
        ...state,
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
      };
    case CREATE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payloadK
      };
    default:
      return state;
  }
};

export default postsReducer;
