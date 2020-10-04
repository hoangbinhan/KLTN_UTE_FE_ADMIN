//Libs
import React from 'react';
import {
  HeartOutlined,
  PieChartOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

//components
import CardDashBoard from '../CardDashBoard';
//others
import './style.scss';

const data = [
  {
    title: 'Products Sold',
    description: '580',
    icon: <ShoppingCartOutlined style={{ fontSize: 50, color: '#1e9ff2' }} />,
    color: '#1e9ff2',
  },
  {
    title: 'Profit',
    description: '748',
    icon: <PieChartOutlined style={{ fontSize: 50, color: '#ff9149' }} />,
    color: '#ff9149',
  },
  {
    title: 'New Customers',
    description: '150',
    icon: <UserAddOutlined style={{ fontSize: 50, color: '#28d094' }} />,
    color: '#28d094',
  },
  {
    title: 'Customer Satisfaction',
    description: '99.89 %',
    icon: <HeartOutlined style={{ fontSize: 50, color: '#1e9ff2' }} />,
    color: '#1e9ff2',
  },
];

const WidgetDashBoard = () => {
  return (
    <div className='widget-dash-board-wrapper'>
      {data.map((item: any, index: number) => {
        const { title, description, icon, color } = item;
        return (
          <CardDashBoard
            key={index}
            title={title}
            description={description}
            icon={icon}
            color={color}
          />
        );
      })}
    </div>
  );
};

export default WidgetDashBoard;
