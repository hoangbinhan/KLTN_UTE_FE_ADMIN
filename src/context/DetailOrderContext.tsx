import React, { createContext, useState } from 'react'

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
    submitOrder: () => { }
})

interface Props {
    children: JSX.Element[] | JSX.Element;
}

export const DetailOrderProvider: React.FC<Props> = ({ children }) => {
    const [order, setOrder] = useState({})
    const provider = {
        order,
        orderChange: async (value: any) => {
            let temp = await { [Object.keys(value)[0]]: Object.values(value)[0] }
            await setOrder({ ...order, ...temp })
        },
        submitOrder: (value: any) => {
            const { productsInvoice, customerDetail, paymentDetail, totalDetail } = value
            if (!productsInvoice || !customerDetail || !paymentDetail || !totalDetail) {
                console.log('khong du du lieu');

            }
        }
    }
    return (
        <DetailOrderContext.Provider value={provider}>
            {children}
        </DetailOrderContext.Provider>
    )
}