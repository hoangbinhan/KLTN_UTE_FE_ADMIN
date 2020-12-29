//libs
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios'
import { baseUrl } from '@/configs/enviroments'
//others
import './style.scss'

const columns = [
  {
    title: 'STT',
    dataIndex: 'key'
  },
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Total',
    dataIndex: 'total'
  },
]

const NewOrders = () => {
  const [data, setData] = useState([] as any)
  useEffect(() => {
    axios.get(`${baseUrl}/api/dashboard/get-gold-customer`).then((res: any) => {
      setData(res.data.data)
    }).catch((err: any) => console.log(err.message))
  }, [])


  return (
    <div className='new-orders-wrapper'>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default NewOrders;
