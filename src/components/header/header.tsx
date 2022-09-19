import React from 'react';
import { Layout } from 'antd';
import {MenuFoldOutlined,MenuUnfoldOutlined} from '@ant-design/icons';
import './header.css';

const { Header } = Layout;

interface IAppHeaderProps {
    collapsed: boolean;
    handleCollapse: () => void;
}

const AppHeader: React.FC<IAppHeaderProps> = ({ collapsed, handleCollapse }: IAppHeaderProps) => {
    return (
        <Header className="header appHeader" >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => handleCollapse(),
            })}
        </Header>
    )
}

export default AppHeader;