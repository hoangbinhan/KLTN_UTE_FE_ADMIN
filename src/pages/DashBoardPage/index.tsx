//Libs
import React from 'react';

//components
import NewsFeed from './components/NewsFeed';
import RecentTransaction from './components/RecentTransactions';
import WidgetDashBoard from './components/WidgetDashBoard';

const DashBoardPage = () => {
  return (
    <>
      <WidgetDashBoard />
      <NewsFeed />
      <RecentTransaction />
    </>
  );
};

export default DashBoardPage;
