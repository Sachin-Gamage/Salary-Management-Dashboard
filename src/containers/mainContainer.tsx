import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../components/header/header';
import AppSideBar from '../components/sideBar/sideBar';
import AppContainer from './appContainer';

interface IMainContainerStates {
    sideBarCollapsed: boolean
}
class MainContainer extends React.Component<{}, IMainContainerStates>{

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            sideBarCollapsed: false
        }
    }

    private onHandleSideBarCollapse = () => {
        debugger
        this.setState({
            sideBarCollapsed: !this.state.sideBarCollapsed
        })
    }

    render(): React.ReactNode {
        return (
            <Layout style={{height:'100vh'}}>
                <AppSideBar collapsed={this.state.sideBarCollapsed}/>

                <Layout className="site-layout">
                    <AppHeader collapsed={this.state.sideBarCollapsed} handleCollapse={this.onHandleSideBarCollapse}></AppHeader>
                    <AppContainer />
                </Layout>
            </Layout>
        )
    }
}

export default MainContainer;
