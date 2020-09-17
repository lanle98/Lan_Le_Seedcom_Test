import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import './index.scss';

// components
import SubmitBtn from '../../components/buttons/SubmitBtn'
import AudienceSetContainer from '../../components/audience/AudienceSetContainer'

const Dashboard = (props) => {

  const handleClickNextBtn = () => {
    console.log('clicked')
  }

  return (
    <div className='form form-audience'>
      <h2 className='form-title'>What’s your audience segment?</h2>
      <Formik
        initialValues={{ name: '', location: '', description: '' }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className='form-audience-inputs'>
          <div className='input-field'>
            <label htmlFor='name'>Name</label>
            <Field type='text' name='name' />
          </div>

          <div className='input-field'>
            <label htmlFor='location'>Location</label>
            <Field as='select' name='location'>
              <option value='red'>Red</option>
              <option value='green'>Green</option>
              <option value='blue'>Blue</option>
            </Field>
          </div>

          <div className='input-field'>
            <label htmlFor='description'>Description</label>
            <Field as='textarea' type='text' name='description' />
          </div>
         

          <div className='input-field'>
            <label htmlFor='description'>Existing Customer Segmentation base on:</label>
            <AudienceSetContainer />
          </div>

          <SubmitBtn name='Next' />
        </Form>
      </Formik>
    </div>
  );
};

export default Dashboard;
