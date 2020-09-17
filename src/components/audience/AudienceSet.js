import React, { useState } from 'react';
import { Modal } from 'antd';
import './index.scss';

// btns
import AddBtn from '../buttons/AddBtn';
import TrashBtn from '../buttons/TrashBtn';

// components
import AudienceTag from './AudienceTag';
import modal from '../modal';
import AudienceAdd from './AudienceAdd';

const AudienceSet = (props) => {
  const [audience, setAudience] = useState([]);
  const { handleDeleteAudienceSet, index } = props;

  const handleAddAudience = (values) => {
    if (values.type || values.operator || values.value){
      setAudience([
        ...audience,
        { id: (audience.length += 1), component: AudienceTag, values: values },
      ]);
      Modal.destroyAll()
    }
  };

  const toggleModalAddAudience = () => {
    modal({
      title: 'Add audience',
      component: AudienceAdd,
      handleClickConfirm: handleAddAudience,
      handleClickCancel: () => Modal.destroyAll(),
    });
  };

  const handleRemoveAudience = (key) => {
    setAudience(audience.filter((item) => item.id !== key));
  };

  return (
    <div className='audience-set'>
      {audience && audience.map((Audience) => (
        <Audience.component
          key={Audience.id}
          index={Audience.id}
          handleRemoveAudience={handleRemoveAudience}
          audienceType={Audience.values.type}
          audienceOperator={Audience.values.operator}
          audienceValue={Audience.values.value}
        />
      ))}

      <AddBtn index={index} handleClickAddBtn={toggleModalAddAudience} />
      <TrashBtn index={index} handleClickTrashBtn={handleDeleteAudienceSet} />
    </div>
  );
};

export default AudienceSet;
