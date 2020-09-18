import React from 'react';
import { Formik, Field, Form } from 'formik';
import './index.scss';

// components
import SubmitBtn from '../buttons/SubmitBtn';
import CancelBtn from '../buttons/CancelBtn';

const select = [
  {
    value: 'LTV',
    name: 'LTV',
  },
  {
    value: 'HTV',
    name: 'HTV',
  },
  {
    value: 'VTV',
    name: 'VTV',
  },
];

const value = [
  {
    value: 1,
    name: '1',
  },
  {
    value: 2,
    name: '2',
  },
  {
    value: 3,
    name: '3',
  },
];

const operator = [
  {
    value: 'less',
    name: 'less than',
  },
  {
    value: 'more',
    name: 'more than',
  },
  {
    value: 'equal',
    name: 'equal to',
  },
];

const AudienceAdd = (props) => {
  const { handleClickConfirm, handleClickCancel } = props;
  return (
    <div className='audience-add'>
      <Formik
        initialValues={{ type: '', operator: '', value: '' }}
        onSubmit={(values) => handleClickConfirm(values)}
      >
        <Form>
          <div className='audience-add-selects'>
            <Field as='select' name='type'>
              <option value=''>Type</option>
              {select.map((item) => (
                <option key={item.value} value={item.value}>{item.name}</option>
              ))}
            </Field>
            <Field as='select' name='operator'>
              <option value=''>Operator</option>
              {operator.map((item) => (
                <option key={item.value} value={item.value}>{item.name}</option>
              ))}
            </Field>
            <Field as='select' name='value'>
              <option value=''>Value</option>
              {value.map((item) => (
                <option key={item.value} value={item.value}>{item.name}</option>
              ))}
            </Field>
          </div>
          <div className='audience-add-btns'>
            <CancelBtn name='Cancel' onClick={handleClickCancel} />
            <SubmitBtn name='Create' />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AudienceAdd;
