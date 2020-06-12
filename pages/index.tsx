import React from 'react';
import { GetServerSideProps } from 'next';
import { useDispatch } from 'react-redux';
import { wrapper } from '../store/store';
import { useSelector } from 'react-redux';

import {
  getAllPosts,
  removePost,
  createComment,
} from '../store/actions/postsActions';
import PostsList from '../components/PostsList';
import { StateType } from '../types';

const Index = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: StateType) => state.posts.posts);

  const handleRemove = (id: number) => {
    if (id) {
      dispatch(removePost(id));
    }
  };

  const handleSendComment = (data: { postId: number; body: string }) => {
    dispatch(createComment(data));
  };

  return (
    <PostsList
      data={posts}
      handleRemove={handleRemove}
      handleSendComment={handleSendComment}
    />
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch(getAllPosts());
  }
);

export default Index;
