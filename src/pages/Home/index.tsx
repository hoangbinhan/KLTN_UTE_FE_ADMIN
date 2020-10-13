//libs
import React from 'react';
import { Redirect } from 'react-router-dom';
//others
import CONSTANTS from '@/constants';

const Home = () => {
  return <Redirect to={CONSTANTS.ROUTERS.DASHBOARD} />;
};

export default Home;
