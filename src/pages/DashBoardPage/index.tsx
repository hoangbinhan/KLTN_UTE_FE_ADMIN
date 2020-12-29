//Libs
import React, { useEffect, useState } from 'react';
//components
import NewsFeed from './components/NewsFeed';
import RecentTransaction from './components/RecentTransactions';
import WidgetDashBoard from './components/WidgetDashBoard';
import { io } from 'socket.io-client';
import { baseUrl } from '@/configs/enviroments'
//others
import './style.scss'

const DashBoardPage = () => {
  const [dataWidget, setDataWidget] = useState()
  const [dataNewestOrder, setDataNewestOrder] = useState([] as any)
  useEffect(() => {
    const socket = io(`${baseUrl}/api/dashboard`)
    socket.on('getWidget', (data: any) => {
      setDataWidget(data)
    })
    socket.on('getNewestOrder', (data: any) => {
      setDataNewestOrder(data.data)
    })
  }, [])

  return (
    <div className='dashboard-page-wrapper'>
      <WidgetDashBoard data={dataWidget} />
      <NewsFeed />
      <RecentTransaction data={dataNewestOrder} />
    </div>
  );
};

export default DashBoardPage;
