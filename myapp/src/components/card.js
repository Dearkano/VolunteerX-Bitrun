import {Card} from 'antd-mobile';
import * as React from 'react';
import * as moment from 'moment';
import {BigNumber} from 'bignumber.js';
export default class extends React.Component{
    
    render(){
        let amount,rest;
        if(this.props.mode==1){
            let _needToken = BigNumber(this.props.data._needCoin).shiftedBy(-18).toString();
            let receivedToken=BigNumber(this.props.data._voteNum).shiftedBy(-18).toString();
            amount=<div>NOS需求：{_needToken}</div>;
            rest=<div>已获得VC：{receivedToken}</div>
        }else{
            let limited = this.props.data._needPerson;
            let bonus = BigNumber(this.props.data._bonus).shiftedBy(-18).toString();
            amount=<div style={{display:"flex",flexDirection:"column"}}><div>人数上限:{limited}</div>
            <div>VC奖励:{bonus}</div>
            </div>;
            
            rest=<div style={{display:"flex",flexDirection:"column"}}><div>已报名人数:{this.props.data._userIds.length}</div>
            <div>截止时间:{moment(new Date(parseInt(this.props.data._endTime))).format('YYYY/MM/DD mm:ss')}
                </div>
            </div>
        }


        return <Card style={this.props.data._donate?{opacity:0.6}:null}>
        <Card.Header
            title={this.props.data._title}
            thumb={this.props.data._donate?"/images/ed.svg":"/images/ing.svg"}
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