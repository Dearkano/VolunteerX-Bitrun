import {Card} from 'antd-mobile';
import * as React from 'react';
export default class extends React.Component{
    render(){
        const amount = (this.props.data.mode===1?`token限额：`:`已报名人数：`)+this.props.data.amount;
        const rest = (this.props.data.mode===1?`剩余token：`:`已报名人数：`)+this.props.data.rest;
        return <Card>
        <Card.Header
            title={this.props.data.title}
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<span style={{fontSize:"10px"}}>{this.props.data.participants}人参与</span>}
        />
        <Card.Body>
            <img style={{width:"100%",height:"100%"}} src={this.props.data.imgUrl}/>
            <div className="list-discription">{this.props.data.description}</div>
        </Card.Body>
        <Card.Footer content={amount} extra={rest} />
    </Card>;
    }
}