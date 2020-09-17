import React, { Fragment } from 'react';
import './index.scss';

const TrashBtn = (props) => {
  const { handleClickTrashBtn, index } = props;

  return (
    <Fragment>
      {index && index === 1 ? (
        <div className='btn trash-btn disabled'>
          <img src='/images/icons/trash-disabled.svg' alt='trash-disabled-icon' />
        </div>
      ) : (
        <div className='btn trash-btn' onClick={() => handleClickTrashBtn(index)}>
          <img src='/images/icons/trash.svg' alt='trash-icon' />
        </div>
      )}
    </Fragment>
  );
};

export default TrashBtn;
