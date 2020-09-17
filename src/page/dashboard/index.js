import React from 'react';
import { Formik, Field, Form } from 'formik';
import './index.scss';

// components
import SubmitBtn from '../../components/buttons/SubmitBtn';
import AudienceSetContainer from '../../components/audience/AudienceSetContainer';

let city_names = [
  'Atlanta',
  'Atlantic City',
  'Augusta',
  'Aurora',
  'Austin',
  'Bakersfield',
  'Baltimore',
  'Barnstable',
  'Baton Rouge',
  'Beaumont',
  'Bel Air',
  'Bellevue',
  'Berkeley',
  'Bethlehem',
  'Billings',
  'Birmingham',
  'Bloomington',
  'Boise',
  'Boise City',
  'Bonita Springs',
  'Boston',
  'Boulder',
  'Bradenton',
  'Bremerton',
];

const Dashboard = (props) => {
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
            <Field required type='text' name='name' />
          </div>

          <div className='input-field'>
            <label htmlFor='location'>Location</label>
            <Field as='select' name='location'>
              <option value=''></option>
              {city_names.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Field>
          </div>

          <div className='input-field'>
            <label htmlFor='description'>Description</label>
            <Field as='textarea' type='text' name='description' />
          </div>

          <div className='input-field'>
            <label htmlFor='description'>
              Existing Customer Segmentation base on:
            </label>
            <Field name='audience-set'>{(field) => <AudienceSetContainer field={field}/>}</Field>
          </div>

          <SubmitBtn name='Next' />
        </Form>
      </Formik>
    </div>
  );
};

export default Dashboard;
