import React from 'react';

import Post from './Post';
import { PostListPropsType } from '../types';

const PostsList = ({
  data,
  handleRemove,
  handleSendComment,
}: PostListPropsType) => {
  return (
    <div>
      <ul onClick={(e:any) => handleRemove(+e.target.dataset.id)}>
        {data.length ? (
          data.map((post) => {
            return (
              <Post
                post={post}
                handleSendComment={handleSendComment}
                key={post.id + post.title}
              />
            );
          })
        ) : (
          <li>Post list is empty</li>
        )}
      </ul>
    </div>
  );
};

export default PostsList;
