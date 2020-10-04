//Libs
import React from 'react';
import { Card } from 'antd';

//others
import './style.scss';
import { CARD_DASH_BOARD } from '../../../../types/pages/DashBoardPage';

const CardDashBoard: React.FC<CARD_DASH_BOARD> = (props) => {
  const { title, description, icon, color } = props;
  return (
    <Card className='card-dash-board-wrapper' hoverable>
      <div className='content'>
        <div className='info'>
          <div className='description' style={{ color: color }}>
            {description}
          </div>
          <div className='title'>{title}</div>
        </div>
        {icon}
      </div>
    </Card>
  );
};

export default CardDashBoard;
