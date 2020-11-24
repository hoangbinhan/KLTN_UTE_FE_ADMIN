import React from 'react'
//components
import ModalCustomers from '../ModalCustomers';
import ButtonDelete from '../ButtonDelete'
//others
import './style.scss'

const ActionCustomer = ({ record }: any) => {
    return (
        <div className='action-customer-wrapper'>
            <ModalCustomers name='Edit' record={record} />
            {/* <ModalCategoryChildren name='Add Children' categoryId={record._id} /> */}
            <ButtonDelete customerId={record._id} />
        </div>
    )
}

export default ActionCustomer
