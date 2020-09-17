import React, { useState, useCallback } from 'react';
import './index.scss';

import AudienceSet from './AudienceSet';

const AudienceSetContainer = () => {
  const [audienceSet, setAudienceSet] = useState([
    { id: 1, component: AudienceSet },
  ]);
  let audiences = []


  const handleAddAudienceSet = useCallback(() => {
    setAudienceSet([
      ...audienceSet,
      { id: (audienceSet.length += 1), component: AudienceSet },
    ]);
  }, [audienceSet]);

  const handleDeleteAudienceSet = useCallback((key) => {
    setAudienceSet(audienceSet.filter((item) => item.id !== key));
  }, [audienceSet]);

  const getAudience = (values, setOrder) => {
    console.log(setOrder)
    if(audiences.length < setOrder){
      audiences.push(values)
      console.log(audiences.length)
    }
    else{
      audiences[setOrder -= 1] = values
    }

    console.log(audiences)
  }

  return (
    <div className='audience-set-container'>
      {audienceSet.map((Set) => (
        <Set.component
          key={Set.id}
          index={Set.id}
          handleDeleteAudienceSet={handleDeleteAudienceSet}
          getAudience={getAudience}
        />
      ))}
      <span className='audience-set__add' onClick={handleAddAudienceSet}>
        + Add an audience set
      </span>
    </div>
  );
};

export default AudienceSetContainer;
