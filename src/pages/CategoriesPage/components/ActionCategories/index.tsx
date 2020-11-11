import React from 'react'
//components
import ModalCategories from '../ModalCategories';
import ButtonDelete from '../ButtonDelete'
// import ModalCategoryChildren from '../ModalCategoryChildren'
//others
import './style.scss'

const ActionCategories = ({ record }: any) => {
    return (
        <div className='action-categories-wrapper'>
            <ModalCategories name='Edit' record={record} />
            {/* <ModalCategoryChildren name='Add Children' categoryId={record._id} /> */}
            <ButtonDelete categoryId={record._id} />
        </div>
    )
}

export default ActionCategories
