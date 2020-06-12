import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import NewPostForm from '../../components/NewPostForm';
import { createPost } from '../../store/actions/postsActions';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const NewPost = () => {
  const dispatch = useDispatch();

  const handleSumbit = (data: { title: string; body: string }) => {
    dispatch(createPost(data));
  };

  return (
    <Wrapper>
      <NewPostForm handleSubmit={handleSumbit} />
    </Wrapper>
  );
};

export default NewPost;
