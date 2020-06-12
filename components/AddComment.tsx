import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';

import { AddCommentPropsType } from '../types';

const Button = styled.button`
  background-color: #2168db;
  border: none;
  width: 100px;
  height: 30px;
  color: #ffffff;
  border-radius: 5px;
  margin-left: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: end;
`;

const AddComment = ({ id, handleSendComment }: AddCommentPropsType) => {
  return (
    <Formik
      initialValues={{
        body: '',
      }}
      enableReinitialize={true}
      onSubmit={(values, { resetForm }) => {
        try {
          handleSendComment({ postId: id, body: values.body });
          resetForm({});
        } catch (e) {
          new Error(e);
        }
      }}>
      {({ values }) => (
        <Form>
          <Wrapper>
            <Field
              style={{ width: '80%', height: '100px' }}
              as="textarea"
              type="text"
              name="body"
              placeholder="Leave your comment"
            />
            <Button type="submit" disabled={!values.body}>
              Send
            </Button>
          </Wrapper>
        </Form>
      )}
    </Formik>
  );
};

export default AddComment;
