import React from 'react'
//components
import ShippingMethodsModal from '../ShippingMethodsModal';
import ButtonDelete from '../ButtonDelete'
// import ModalCategoryChildren from '../ModalCategoryChildren'
//others
import './style.scss'

const ActionShippingMethod = ({ record }: any) => {
    return (
        <div className='action-categories-wrapper'>
            <ShippingMethodsModal name='Edit' record={record} />
            {/* <ModalCategoryChildren name='Add Children' categoryId={record._id} /> */}
            <ButtonDelete shippingMethodId={record._id} />
        </div>
    )
}

export default ActionShippingMethod
