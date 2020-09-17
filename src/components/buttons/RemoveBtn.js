import React, { Fragment } from 'react';
import './index.scss';

const RemoveBtn = (props) => {
  const { handleClickRemoveBtn, index } = props;

  return (
    <div className='btn remove-btn' onClick={() => handleClickRemoveBtn(index)}>
      x
    </div>
  );
};

export default RemoveBtn;
