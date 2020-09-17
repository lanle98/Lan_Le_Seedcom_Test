import React, { useState } from 'react';
import './index.scss'

const SubmitBtn = (props) => {

    const { name, onClick } = props;

    return (
      <button type='submit' className='btn submit-btn'>
        {name}
      </button>
    );
}

export default SubmitBtn