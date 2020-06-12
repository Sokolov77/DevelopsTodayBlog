import { PostInitialStateType } from './store/reducers/postsReducer';

export type StateType = {
  posts: PostInitialStateType;
};

export type Comments = {
  id: number;
  postId: number;
  body: string;
};

export type PostType = {
  id: number;
  title: string;
  body: string;
  comments?: Comments[];
};

export type AddCommentPropsType = {
  id: number;
  handleSendComment: (data: { postId: number; body: string }) => void;
};

export type CommentsListPropsType = {
  comments: Comments[];
};

export type NewPostFormPropsType = {
  handleSubmit: (data: { title: string; body: string }) => void;
};

export type PostPropsType = {
  post: PostType;
  handleSendComment: (data: { postId: number; body: string }) => void;
};

export type PostListPropsType = {
  data: PostType[];
  handleRemove: (id: number) => void;
  handleSendComment: (data: { postId: number; body: string }) => void;
};
