import { ActivityIndicator, TabBar } from 'antd-mobile';
import * as React from 'react';
import { withRouter, Route } from 'react-router-dom';
import Volunteer from '../containers/volunteer';
import Information from '../containers/information';
import Charity from '../containers/charity';
import NavBar from './navbar';
import Detail from '../containers/detail';
import ProDetail from '../containers/proDetail';
import IssueVpj from '../containers/issueVpj';
import IssueCpj from '../containers/issueCpj';
import Register from '../containers/register';
import Donation from '../containers/donation';
import Manage from '../containers/manage';
import nervos from '../nervos';
import { transaction, simpleStoreContract } from '../simpleStore'
class preTabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: true,
            showToast:false
        };
    }

    async componentDidMount(){
        this.setState({showToast:true})
        localStorage.removeItem("userId");
        if(!localStorage.getItem("userId")){
         
            const userId = await simpleStoreContract.methods
            .getUserId()
            .call({
              from:window.neuron.getAccount(),
            });
      
            if(userId<=0){
                this.props.history.push('/register');
            }
        }
        this.setState({showToast:false});
    }
    render() {
        const content =  <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>

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
                    background: 'url(/images/s1.svg) center center /  21px 21px no-repeat'
                }}
                />
                }
                selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(/images/s11.svg) center center /  21px 21px no-repeat'
                }}
                />
                }
                selected={this.state.selectedTab === 'blueTab'}
          
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
                <Route path='/detail/2/:projectId' component={Detail} />
                <Route path='/detail/1/:projectId' component={ProDetail} />
                <Route path='/issueVpj' component={IssueVpj} />
                <Route path='/issueCpj' component={IssueCpj} />
                <Route path='/register' component={Register} />
                <Route path='/donation' component={Donation} />
                <Route path='/manage' component={Manage} />
            </TabBar.Item>
            <TabBar.Item
                icon={
                    <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(/images/s2.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                }
                selectedIcon={
                    <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(/images/s22.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                }
                title="志愿者"
                key="volunteer"
 
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
                <Route path='/detail/1/:projectId' component={ProDetail} />
                <Route path='/issueVpj' component={IssueVpj} />
                <Route path='/issueCpj' component={IssueCpj} />
                <Route path='/register' component={Register} />
                <Route path='/donation' component={Donation} />
                <Route path='/manage' component={Manage} />
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
                <Route path='/register' component={Register} />
                <Route path='/detail/2/:projectId' component={Detail} />
                <Route path='/detail/1/:projectId' component={ProDetail} />
                <Route path='/donation' component={Donation} />
                <Route path='/manage' component={Manage} />
            </TabBar.Item>
    
        </TabBar>
    </div>;

    const toast = <ActivityIndicator
    toast
    text="Loading..."
    animating={this.state.animating}
  />;
  const visible = this.state.showToast?toast:content;
        return (
           <div>{visible}</div>
        );
    }
} 
export default withRouter(preTabBar);