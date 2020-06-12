import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import AddComment from './AddComment';
import { PostPropsType } from '../types';

const PostWrapper = styled.div`
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  width: 70%;
  background-color: #f7f7f7;
  padding: 5px 10px;
`;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const Button = styled.button`
  border: none;
  width: 100px;
  height: 30px;
  color: #ffffff;
  border-radius: 5px;
`;

const Post = ({ post, handleSendComment }: PostPropsType) => {
  return (
    <ListItem>
      <PostWrapper>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <AddComment id={post.id} handleSendComment={handleSendComment} />
        <div>
          <Button
            style={{ backgroundColor: '#f5404f', marginRight: '5px' }}
            data-id={post.id}>
            Remove
          </Button>
          <Link href="/posts/[postId]" as={`posts/${post.id}`}>
            <Button style={{ backgroundColor: '#9d47bf' }}>Details</Button>
          </Link>
        </div>
      </PostWrapper>
    </ListItem>
  );
};

export default Post;
