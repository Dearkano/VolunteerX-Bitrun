import {Card} from 'antd-mobile';
import * as React from 'react';
export default class extends React.Component{
    render(){
        let amount,rest;
        if(this.props.mode===1){
            amount=`token需求：${this.props.data._needCoin}`;
            rest=`收到的token：${this.props.data._voteNum}`
        }else{
            amount=<div style={{display:"flex",flexDirection:"column"}}><div>上限：{this.props.data._needPerson}</div>
            <div>奖励:{this.props.data._bonus}</div>
            </div>;
            rest=<div style={{display:"flex",flexDirection:"column"}}><div>已报名人数：{this.props.data._userIds.length}</div>
            <div>截止时间:{this.props.data._endTime}
                </div>
            </div>
        }


        return <Card>
        <Card.Header
            title={this.props.data._title}
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<span style={{fontSize:"10px"}}>{this.props.data.participants}人参与</span>}
        />
        <Card.Body>
            <img style={{width:"100%",height:"100%"}} src={this.props.data.imgUrl}/>
            <div className="list-discription">{this.props.data._desc}</div>
        </Card.Body>
        <Card.Footer content={amount} extra={rest} />
    </Card>;
    }
}