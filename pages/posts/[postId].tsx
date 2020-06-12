import React from 'react';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';

import { wrapper } from '../../store/store';
import { getPost } from '../../store/actions/postsActions';
import { useSelector } from 'react-redux';
import CommentsList from '../../components/CommentsList';
import { StateType, PostType } from '../../types';

const PostWrapper = styled.div`
  border: 1px solid #e3e3e3;
  margin: 0 auto;
  border-radius: 5px;
  width: 70%;
  background-color: #f7f7f7;
  padding: 5px 10px;
`;

const Post = () => {
  const post: PostType = useSelector(
    (state: StateType) => state.posts.currentPost
  );

  return (
    <PostWrapper>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <hr />
      <CommentsList comments={post.comments} />
    </PostWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const { postId } = context.query;
    await context.store.dispatch(getPost(postId as string));
  }
);

export default Post;
