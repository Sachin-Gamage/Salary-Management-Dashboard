import React from 'react';
import { Layout } from 'antd';
import AppTable from '../components/table/table';


const { Content } = Layout;
class AppContainer extends React.Component {

    render(): React.ReactNode {
        return (
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
            >
                <AppTable/>
            </Content>
        )
    }
}

export default AppContainer;
