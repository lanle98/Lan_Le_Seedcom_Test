import React, { useState } from 'react';
import './index.scss';

import AudienceSet from './AudienceSet';

const AudienceSetContainer = () => {
  const [audienceSet, setAudienceSet] = useState([
    { id: 1, component: AudienceSet },
  ]);

  const handleAddAudienceSet = () => {
    setAudienceSet([
      ...audienceSet,
      { id: (audienceSet.length += 1), component: AudienceSet },
    ]);
  };

  const handleAddAudience = () => {
    console.log('addd');
  };

  const handleDeleteAudienceSet = (key) => {
    setAudienceSet(audienceSet.filter(item => item.id !== key));
  };

  return (
    <div className='audience-set-container'>
      {audienceSet.map((Set) => (
        <Set.component
          key={Set.id}
          index={Set.id}
          handleAddAudience={handleAddAudience}
          handleDeleteAudienceSet={handleDeleteAudienceSet}
        />
      ))}
      <span className='audience-set__add' onClick={handleAddAudienceSet}>
        + Add an audience set
      </span>
    </div>
  );
};

export default AudienceSetContainer;
