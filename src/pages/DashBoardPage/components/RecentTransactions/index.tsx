//libs
import React from 'react';
import { Table } from 'antd';
//others
import { columns } from '../../DataSrouce/ColumnRecentTransaction'
import { useRouter } from '@/hooks';

interface Props {
  data: any[]
}

const RecentTransaction: React.FC<Props> = ({ data }) => {
  const router = useRouter();

  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      className='recent-transaction-wrapper'
      pagination={false}
      onRow={(record, rowIndex) => {
        return {
          onClick: event => { router.push('/orders') }, // click row
        };
      }}
    />
  );
};

export default React.memo(RecentTransaction);
