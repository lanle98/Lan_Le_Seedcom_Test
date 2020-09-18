import React, { useState, useCallback, useEffect } from 'react';
import './index.scss';

import AudienceSet from './AudienceSet';

const AudienceSetContainer = (props) => {

  const { field } = props;

  const [audienceSet, setAudienceSet] = useState([
    { id: 1, component: AudienceSet },
  ]);
  const [audienceValues, setAudienceValues] = useState([])


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
    setAudienceValues(prev => [...prev, prev[setOrder-=1] = values])

    console.log(audienceValues)
  }

  useEffect(() => {
    field.form.values.audienceSet = audienceValues
  },[audienceValues])

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
