import React from 'react';
import { CommentsListPropsType } from '../types';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  padding: 0;
`;

const ListItem = styled.li`
  padding: 5px 5px;
  min-height: 30px;
  list-style: none;
  border: 1px solid #bfbfbf;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  margin: 10px 0;
`;

const CommentsList = ({ comments }: CommentsListPropsType) => {
  return (
    <ListWrapper>
      Comments
      {comments.length ? (
        comments
          .reverse()
          .map((comment) => (
            <ListItem key={comment.id + 'comment'}>{comment.body}</ListItem>
          ))
      ) : (
        <ListItem>This post don't have comments</ListItem>
      )}
    </ListWrapper>
  );
};

export default CommentsList;
