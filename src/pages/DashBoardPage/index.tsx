//Libs
import React from 'react';
//components
import NewsFeed from './components/NewsFeed';
import RecentTransaction from './components/RecentTransactions';
import WidgetDashBoard from './components/WidgetDashBoard';

//others
import './style.scss'

const DashBoardPage = () => {
  return (
    <div className='dashboard-page-wrapper'>
      <WidgetDashBoard />
      <NewsFeed />
      <RecentTransaction />
    </div>
  );
};

export default DashBoardPage;
