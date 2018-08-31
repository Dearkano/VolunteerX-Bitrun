import { TabBar } from 'antd-mobile';
import * as React from 'react';
import { withRouter, Route } from 'react-router-dom';
import Volunteer from '../containers/volunteer';
import Information from '../containers/information';
import Charity from '../containers/charity';
import NavBar from './navbar';
import Detail from '../containers/detail';
import IssueVpj from '../containers/issueVpj';
import IssueCpj from '../containers/issueCpj';
class preTabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: true,
        };
    }


    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>

                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >

                    <TabBar.Item
                        title="公益"
                        key="charity"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={1}
                        onPress={() => {
                            this.props.history.push('/charity');
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                        <NavBar />
                        <Route exact path='/' component={Charity} />
                        <Route path='/charity' component={Charity} />
                        <Route path='/detail/1/:projectId' component={Detail} />
                        <Route path='/issueVpj' component={IssueVpj} />
                        <Route path='/issueCpj' component={IssueCpj} />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="志愿者"
                        key="volunteer"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.props.history.push('/volunteer');
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        <NavBar />
                        <Route path='/volunteer' component={Volunteer} />
                        <Route path='/detail/2/:projectId' component={Detail} />
                        <Route path='/issueVpj' component={IssueVpj} />
                        <Route path='/issueCpj' component={IssueCpj} />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="我的"
                        key="information"
                        dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.props.history.push('/information');
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        <NavBar />
                        <Route path='/detail/:mode/:projectId' component={Detail} />
                        <Route path='/information' component={Information} />
                        <Route path='/issueVpj' component={IssueVpj} />
                        <Route path='/issueCpj' component={IssueCpj} />
                    </TabBar.Item>
            
                </TabBar>
            </div>
        );
    }
} 
export default withRouter(preTabBar);