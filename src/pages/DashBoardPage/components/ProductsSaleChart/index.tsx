//libs
import React, { useEffect, useState } from 'react';
import { Line } from '@ant-design/charts';
import axios from 'axios'
import { baseUrl } from '@/configs/enviroments'
//others
import './style.scss'

const ProductsSaleChart = () => {
  const [dataChart, setDataChart] = useState([] as any[])
  useEffect(() => {
    axios.get(`${baseUrl}/api/dashboard/get-chart`).then((res: any) => {
      setDataChart(res.data.data)
    }).catch((err: any) => console.log(err.message))
  }, [])
  const config = {
    data: dataChart,
    xField: 'month',
    yField: 'profit',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };
  return <div className='product-sale-chart-wrapper'><Line {...config} /></div>
};

export default ProductsSaleChart;
