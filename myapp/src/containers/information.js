import * as React from 'react';

import { ActivityIndicator,Card, WingBlank, WhiteSpace,Button } from 'antd-mobile';
import ListView from '../components/listview';
import nervos from '../nervos';
import { simpleStoreContract } from '../simpleStore'
import {BigNumber} from 'bignumber.js';
export default class extends React.Component {
    constructor(props){
        super(props);
        this.state={showGoingEvent:false,showFinishedEvent:false,showUnfinishedEvent:false,
        userInfo:{_name:"",identity:0},token:0,address:"",unfinishedItemsInfo:[],finishedItemsInfo:[],
    showToast:false};
    }
    async componentDidMount(){
        this.setState({showToast:true});
        const addr = window.neuron.getAccount();
         const userId = await simpleStoreContract.methods
        .getUserId()
        .call({
          from:addr,
        });
        localStorage.setItem("userId",userId);
       const userInfo=await simpleStoreContract.methods
        .getUserById(userId)
        .call({
          from:addr,
        });
    
        let token = await simpleStoreContract.methods
        .balanceOf(addr)
        .call({
          from:addr,
        });

        token = BigNumber(token).shiftedBy(-18).toString();
        const itemIds = userInfo._itemIds;
      
        //获取用户item ids
        const unfinishedItemsInfo = [];
        const finishedItemsInfo=[];
        for(let i in itemIds){
            let item = await simpleStoreContract.methods
            .getWelfareItemById(itemIds[i])
            .call({
              from:addr,
            });

     
            let status = await simpleStoreContract.methods
            .getUserJoinItemStatus(userId,itemIds[i])
            .call({
              from:addr,
            });
            item.id=itemIds[i];
            item.participants=item._userIds.length;
            item.imgUrl=`/images/volunteer${i%5+1}.png`;
            if(status)
            unfinishedItemsInfo.push(item);
            else
            finishedItemsInfo.push(item);
           
        }
       

        this.setState({userId:userId,userInfo:userInfo,address:addr,token:token,finishedItemsInfo:finishedItemsInfo,unfinishedItemsInfo:unfinishedItemsInfo,showToast:false});
    }
    onClickGoingEvent(){
        this.setState({showGoingEvent:this.state.showGoingEvent?false:true});
    }
    onClickFinishedEvent(){
        this.setState({showFinishedEvent:this.state.showFinishedEvent?false:true});
    }
    onClickUnfinishedEvent(){
        this.setState({showUnfinishedEvent:this.state.showUnfinishedEvent?false:true});
    }
    render() {
        const _identity = this.state.userInfo._identity==0?"志愿者":"公益组织";
        console.log(this.state);
        const content= <div>
        <WingBlank size="lg">
            <WhiteSpace size="lg" />
            <Card>
                <Card.Header
                    title={this.state.userInfo._name}
                    thumb="/images/avatar.png"
                    extra={<span style={{fontSize:"12px"}}>{_identity} #{this.state.userId}</span>}
                />  
                <Card.Body>
                    <div className="list-information">
                    <Button  type="warning" size='big' style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100px",fontSize:"12px",marginBottom:"20px"}}>{this.state.address}</Button>
                    <Button  type="primary" size='big' style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100px",textSize:"100px"}}>VCToken: {this.state.token}</Button>
                    </div>
                </Card.Body>
             
            </Card>
            <WhiteSpace size="lg" />
        </WingBlank>
      
        <Button type="default" onClick={this.onClickGoingEvent.bind(this)}>获得奖励的活动({this.state.unfinishedItemsInfo.length})</Button>
        {this.state.showGoingEvent?<ListView data={this.state.unfinishedItemsInfo} />:null}
        <Button type="default" onClick={this.onClickFinishedEvent.bind(this)} style={{marginTop:"15px"}}>未获得奖励的活动({this.state.finishedItemsInfo.length})</Button>
        {this.state.showFinishedEvent?<ListView data={this.state.finishedItemsInfo } />:null}
        </div>;
        const toast = <ActivityIndicator
        toast
        text="Loading..."
        animating={this.state.animating}
      />;
      const visible = this.state.showToast?toast:content;
        return(
           <div> {visible}</div>
           );
    }
}