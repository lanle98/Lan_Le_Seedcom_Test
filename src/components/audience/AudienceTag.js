import React, { useState } from 'react';
import classnames from 'classnames';

// btns
import RemoveBtn from '../buttons/RemoveBtn';

const AudienceItem = (props) => {
  const {
    handleRemoveAudience,
    index,
    audienceType,
    audienceOperator,
    audienceValue,
  } = props;

  const [name, setName] = useState(`${audienceType} ${audienceOperator} ${audienceValue}`)

  const generateClassnames = () => {

    let color = ''
    let firstLetter = name.split('')[0]
    
    switch (firstLetter.toLowerCase()) {
        case 'h':
            return 'yellow'
        case 'l':
            return 'purple'
        case 'v':
            return 'red'
        default:
            return 'blue'
    }

  }

  return (
    <div className={classnames('audience-item', generateClassnames())}>
      <RemoveBtn index={index} handleClickRemoveBtn={handleRemoveAudience} />
       {name}
    </div>
  );
};

export default AudienceItem;
