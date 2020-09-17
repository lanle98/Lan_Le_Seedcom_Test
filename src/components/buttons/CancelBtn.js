import React, { useState } from 'react';
import './index.scss'

const CancelBtn = (props) => {

    const { name, onClick } = props;

    return (
      <button type='button' className='btn cancel-btn' onClick={onClick}>
        {name}
      </button>
    );
}

export default CancelBtn