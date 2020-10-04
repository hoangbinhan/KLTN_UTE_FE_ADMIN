//libs
import React from 'react';

//components
import NewOrders from '../NewOrders';
import ProductsSaleChart from '../ProductsSaleChart';
import './style.scss';

const NewsFeed = () => {
  return (
    <div className='news-feed-wrapper'>
      <ProductsSaleChart />
      <NewOrders />
    </div>
  );
};

export default NewsFeed;
