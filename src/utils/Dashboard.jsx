import React from 'react';
import { Menu } from 'antd';

export const renderListSubMenu = (listSub) => {
  return listSub.map((item) => {
    return <Menu.Item key={item.id}>{item.contentMenu}</Menu.Item>;
  });
};
