import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import './index.scss';

// components
import SubmitBtn from '../buttons/SubmitBtn';
import CancelBtn from '../buttons/CancelBtn';

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
              <option value='LTV'>LTV</option>
              <option value='HTV'>HTV</option>
              <option value='VTV'>VTV</option>
            </Field>
            <Field as='select' name='operator'>
              <option value=''>Operator</option>
              <option value='less'>less than</option>
              <option value='more'>more than</option>
              <option value='equal'>equal to</option>
            </Field>
            <Field as='select' name='value'>
              <option value=''>Value</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
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
