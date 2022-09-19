import React, { useState } from 'react';
import { Table } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';


interface IAppTableProps {
    collapsed: boolean;
}

interface ITableData {
    key: number,
    name: string,
    age: number,
    address: string
}

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        width: 150,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        width: 150,
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const data: ITableData[] = [];

for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}


const AppTable: React.FC = () => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={{
                pageSize: 50,
            }}
            scroll={{
                y: 500,
            }}
            
        />
    );

}

export default AppTable