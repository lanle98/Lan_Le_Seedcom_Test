import React from 'react';
import './index.scss'

const SubmitBtn = (props) => {

    const { name } = props;

    return (
      <button type='submit' className='btn submit-btn'>
        {name}
      </button>
    );
}

export default SubmitBtn