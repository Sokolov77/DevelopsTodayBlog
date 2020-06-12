import axios from 'axios';

export const getAllPostsRequest = () => {
  return new Promise((resolve, reject) => {
    resolve(
      axios
        .get('https://simple-blog-api.crew.red/posts')
        .then((res) => res.data)
    );
    reject(new Error('Some things going wrong!'));
  });
};

export const createPostRequest = (data: { title: string; body: string }) => {
  return new Promise((resolve, rejects) => {
    resolve(
      axios
        .post('https://simple-blog-api.crew.red/posts', data)
        .then((res) => res.data)
    );
    rejects(new Error('Some things going wrong!'));
  });
};

export const removePostRequest = (id: number) => {
  return new Promise((resolve, rejects) => {
    resolve(axios.delete(`https://simple-blog-api.crew.red/posts/${id}`));
    rejects(new Error('Some things going wrong!'));
  });
};

export const getPostRequest = (id: string) => {
  return new Promise((resolve, rejects) => {
    resolve(
      axios
        .get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
        .then((res) => res.data)
    );
    rejects(new Error('Some things going wrong!'));
  });
};

export const createCommentRequest = (data: {
  postId: number;
  body: string;
}) => {
  return new Promise((resolve, rejects) => {
    resolve(axios.post('https://simple-blog-api.crew.red/comments', data));
    rejects(new Error('Some things going wrong!'));
  });
};
