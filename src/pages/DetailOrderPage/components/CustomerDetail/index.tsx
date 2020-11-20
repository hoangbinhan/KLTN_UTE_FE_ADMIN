//libs
import React, { useContext, useEffect, useState } from 'react'
import { Form, Input, AutoComplete } from 'antd';
import { useDispatch } from 'react-redux'
//actions
import { fetchDataCustomers } from '@/actions/Customers/FetchDataCustomers'
//context
import { DetailOrderContext } from '@/context/DetailOrderContext'
//hooks
import { useRouter, useTypedSelector } from '@/hooks'
//others
import './style.scss'
import { layoutForm } from '@/constants/layout'


const { TextArea } = Input;

interface Props {
    record?: any,
}

const CustomerDetail: React.FC<Props> = () => {
    const param = useRouter().query.id 
    const [isDisable, setIsDisable] = useState(false)
    const [options, setOptions] = useState<{ value: string }[]>([]);
    const { order, orderChange } = useContext(DetailOrderContext)
    const { listCustomers } = useTypedSelector(
        (state) => state.Customers.FetchDataCustomers)
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const handleOnChange = async () => {
        let value = await form.getFieldsValue()
        if (orderChange) {
            orderChange({ customerDetail: value })
        }
    }
    const onSelectPhoneNumber = (data: any) => {
        let result = [...listCustomers].filter((item: any) => item.phoneNumber === data)
        form.setFieldsValue(result[0])
        if (orderChange) {
            orderChange({ customerDetail: result[0] })
        }
    }
    const onSearchPhoneNumber = (searchText: string) => {
        if (!searchText) {
            setOptions([])
        } else {
            let temp = [...listCustomers].filter((item: any) => item.phoneNumber.includes(searchText))
            let result = []
            for (let i = 0; i < temp.length; i++) {
                result.push({ value: temp[i].phoneNumber })
            }
            setOptions(result)
        }
    }
    useEffect(() => {
        if(!order.customerDetail){
            dispatch(fetchDataCustomers())
        }else{
            form.setFieldsValue(order.customerDetail)
        }
        if(param){
            setIsDisable(true)
        }
    }, [dispatch, order.customerDetail, form, param])
    return (
        //TODO: set context here
        <Form form={form} {...layoutForm} onChange={handleOnChange} >
            <Form.Item label='Phone Number' name='phoneNumber'>
                <AutoComplete
                    options={options}
                    onSelect={onSelectPhoneNumber}
                    onSearch={onSearchPhoneNumber}
                    placeholder='Input the phone number...'
                    disabled={isDisable}
                />
            </Form.Item>
            <Form.Item label='First Name' name='firstName'>
                <Input placeholder='input the first name...' disabled={isDisable}/>
            </Form.Item>
            <Form.Item label='Last Name' name='lastName'>
                <Input placeholder='input the last name...' disabled={isDisable}/>
            </Form.Item>
            <Form.Item label='Email' name='email'>
                <Input placeholder='input the email...' disabled={isDisable}/>
            </Form.Item>
            <Form.Item label='Address' name='address'>
                <TextArea rows={4} placeholder='input the address..' disabled={isDisable}/>
            </Form.Item>
        </Form>
    )
}


export default CustomerDetail
