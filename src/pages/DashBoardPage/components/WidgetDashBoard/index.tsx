//Libs
import React, { useEffect, useState } from 'react';
import { Card } from 'antd'
import {
  HeartOutlined,
  PieChartOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { io } from 'socket.io-client';
import { baseUrl } from '@/configs/enviroments'
//components
//others
import './style.scss';

const WidgetDashBoard = () => {
  const [data, setData] = useState([] as any)
  useEffect(() => {
    const socket = io(`${baseUrl}/api/dashboard`)
    socket.on('getWidget', (data: any) => {
      console.log(data);

      setData(data)
    })
  }, [])
  return (
    <div className='widget-dash-board-wrapper'>
      <Card className='card-dash-board-wrapper' hoverable>
        <div className='content'>
          <div className='info'>
            <div className='description' style={{ color: '#1e9ff2' }}>
              {data.orderComplete}
            </div>
            <div className='title'>Order Complete</div>
          </div>
          <ShoppingCartOutlined style={{ fontSize: 50, color: '#1e9ff2' }} />
        </div>
      </Card>
      <Card className='card-dash-board-wrapper' hoverable>
        <div className='content'>
          <div className='info'>
            <div className='description' style={{ color: '#ff9149' }}>
              {data.profit}
            </div>
            <div className='title'>Profit</div>
          </div>
          <PieChartOutlined style={{ fontSize: 50, color: '#ff9149' }} />
        </div>
      </Card>
      <Card className='card-dash-board-wrapper' hoverable>
        <div className='content'>
          <div className='info'>
            <div className='description' style={{ color: '#28d094' }}>
              {data.newCustomer}
            </div>
            <div className='title'>New Customers</div>
          </div>
          <UserAddOutlined style={{ fontSize: 50, color: '#28d094' }} />
        </div>
      </Card>
      <Card className='card-dash-board-wrapper' hoverable>
        <div className='content'>
          <div className='info'>
            <div className='description' style={{ color: '#1e9ff2' }}>
              {data.customerSatisfaction}
            </div>
            <div className='title'>Customer Satisfaction</div>
          </div>
          <HeartOutlined style={{ fontSize: 50, color: '#1e9ff2' }} />
        </div>
      </Card>
    </div >
  );
};

export default WidgetDashBoard;
