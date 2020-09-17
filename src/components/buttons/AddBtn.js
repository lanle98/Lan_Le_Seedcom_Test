import React from 'react'

const AddBtn = (props) => {
    const { handleClickAddBtn, index } = props

    return(
        <div className="btn add-btn" onClick={() => handleClickAddBtn(index)}>
            <img src='/images/icons/add.svg' alt='add-icon'/>
        </div>
    )
}

export default AddBtn