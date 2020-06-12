import {
  GET_ALL_POST_FAILURE,
  GET_ALL_POST_SUCCESS,
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  GET_POST_FAILURE,
  GET_POST_SUCCESS,
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
} from '../actionTypes';
import Router from 'next/router';
import { ThunkDispatch } from 'redux-thunk';

import {
  getAllPostsRequest,
  createPostRequest,
  removePostRequest,
  getPostRequest,
  createCommentRequest,
} from '../../http';

import { PostType } from '../../types';

const actions = {
  getAllPostsSuccess: (data: PostType[]) =>
    ({
      type: GET_ALL_POST_SUCCESS,
      payload: data,
    } as const),

  getAllPostsFailure: (err) =>
    ({
      type: GET_ALL_POST_FAILURE,
      payload: err,
    } as const),

  createPostRequest: () =>
    ({
      type: CREATE_POST_REQUEST,
    } as const),

  createPostSuccess: () =>
    ({
      type: CREATE_POST_SUCCESS,
    } as const),

  createPostFailure: (err) =>
    ({
      type: CREATE_POST_FAILURE,
      payload: err,
    } as const),

  removePostRequest: () =>
    ({
      type: REMOVE_POST_REQUEST,
    } as const),

  removePostSuccess: (id: number) =>
    ({
      type: REMOVE_POST_SUCCESS,
      payload: id,
    } as const),

  removePostFailure: (err) =>
    ({
      type: REMOVE_POST_FAILURE,
      payload: err,
    } as const),

  getPostSuccess: (post: PostType) =>
    ({
      type: GET_POST_SUCCESS,
      payload: post,
    } as const),

  getPostFailure: (err) =>
    ({
      type: GET_POST_FAILURE,
      payload: err,
    } as const),

  createCommentRequest: () =>
    ({
      type: CREATE_COMMENT_REQUEST,
    } as const),

  createCommentSuccess: (data: { postId: number; body: string }) =>
    ({
      type: CREATE_COMMENT_SUCCESS,
      payload: data,
    } as const),

  createCommentFailure: (err) =>
    ({
      type: CREATE_COMMENT_FAILURE,
      payload: err,
    } as const),
};

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type PostsActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export const getAllPosts = () => (
  dispatch: ThunkDispatch<{}, {}, PostsActionTypes>
) => {
  return getAllPostsRequest()
    .then((res: PostType[]) => dispatch(actions.getAllPostsSuccess(res)))
    .catch((err) => dispatch(actions.getAllPostsFailure(err)));
};

export const createPost = (data: { title: string; body: string }) => (
  dispatch: ThunkDispatch<{}, {}, PostsActionTypes>
) => {
  dispatch(actions.createPostRequest());
  createPostRequest(data)
    .then(() => {
      dispatch(actions.createPostSuccess());
      Router.push('/');
    })
    .catch((err) => dispatch(actions.createPostFailure(err)));
};

export const removePost = (id: number) => (
  dispatch: ThunkDispatch<{}, {}, PostsActionTypes>
) => {
  dispatch(actions.createPostRequest());
  removePostRequest(id)
    .then(() => dispatch(actions.removePostSuccess(id)))
    .catch((err) => dispatch(actions.removePostFailure(err)));
};

export const getPost = (id: string) => (
  dispatch: ThunkDispatch<{}, {}, PostsActionTypes>
) => {
  return getPostRequest(id)
    .then((res: PostType) => dispatch(actions.getPostSuccess(res)))
    .catch((err) => dispatch(actions.getPostFailure(err)));
};

export const createComment = (data: { postId: number; body: string }) => (
  dispatch: ThunkDispatch<{}, {}, PostsActionTypes>
) => {
  dispatch(actions.createCommentRequest());
  createCommentRequest(data)
    .then(() => dispatch(actions.createPostSuccess()))
    .catch((err) => dispatch(actions.createCommentFailure(err)));
};
