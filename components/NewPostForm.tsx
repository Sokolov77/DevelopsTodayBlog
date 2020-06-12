import React from 'react';
import { Formik, Form, Field } from 'formik';
import { NewPostFormPropsType } from '../types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70vw;
`;

const Button = styled.button`
  background-color: #2168db;
  border: none;
  height: 30px;
  color: #ffffff;
  border-radius: 5px;
  margin-top: 5px;
`;

const NewPostForm = ({ handleSubmit }: NewPostFormPropsType) => {
  return (
    <Formik
      initialValues={{
        title: '',
        body: '',
      }}
      enableReinitialize={true}
      onSubmit={(values) => {
        handleSubmit(values);
      }}>
      {({ values }) => (
        <Form>
          <Wrapper>
            <Field
              style={{ height: '30px' }}
              type="text"
              name="title"
              placeholder="Post title"
              required
            />
            <Field
              style={{ height: '150px' }}
              as={'textarea'}
              type="text"
              name="body"
              placeholder="Post body"
              required
            />
            <Button type="submit" disabled={!values.title || !values.body}>
              Create
            </Button>
          </Wrapper>
        </Form>
      )}
    </Formik>
  );
};

export default NewPostForm;
