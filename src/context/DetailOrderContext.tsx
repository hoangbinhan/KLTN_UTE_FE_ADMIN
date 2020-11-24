//libs
import React, { createContext, useState } from 'react'
import { useDispatch } from 'react-redux';
import { message } from 'antd';
//actions
import { addNewOrder } from '@/actions/Order/AddNewOrder'
import { useRouter } from '@/hooks';

type ContextProps = {
    order: any,
    orderChange: Function,
    submitOrder: (value: any) => void
}

export const DetailOrderContext = createContext<Partial<ContextProps>>({
    order: {
        productsInvoice: [],
        customerDetail: {},
        paymentDetail: {},
        total: {}
    },
    orderChange: () => { },
    submitOrder: () => { },
})

interface Props {
    children: JSX.Element[] | JSX.Element;
}

export const DetailOrderProvider: React.FC<Props> = ({ children }) => {
    const [order, setOrder] = useState({})
    const dispatch = useDispatch()
    const router = useRouter()
    const provider = {
        order,
        orderChange: async (value: any) => {
            if (value.orderID) {
                await setOrder({ ...order, ...value })
            }
            else {
                let temp = await { [Object.keys(value)[0]]: Object.values(value)[0] }
                await setOrder({ ...order, ...temp })
            }
        },
        submitOrder: (value: any) => {
            const { productsInvoice, customerDetail, paymentDetail, totalDetail } = value
            if (!productsInvoice || !customerDetail || !paymentDetail || !totalDetail) {
                message.warning('Please fill full data!')
            } else {
                dispatch(addNewOrder({
                    data: value,
                    cbSuccess: () => {
                        router.push('/orders')
                        message.success('Successful')
                    }
                }))
            }
        }
    }
    return (
        <DetailOrderContext.Provider value={provider}>
            {children}
        </DetailOrderContext.Provider>
    )
}