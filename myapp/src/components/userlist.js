import { List,Card, Button, WingBlank} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import * as React from 'react';
import CardView from '../components/card';
const Item = List.Item;
export default withRouter(class extends React.Component {
  state = {
    disabled: false,
  }
  convertDatatoCard(data){
    return <Item >
        <div style={{display:'flex',height:"32px",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{display:'flex'}}>
        <img style={{width:"25px",marginRight:"10px"}} src="/images/volunteer.jpg" />
        <div>{data.name}</div>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <Button style={{marginRight:"15px"}}size="small" type="warning">确认</Button>
        <Button size="small" type="primary">取消</Button>
        </div>
        </div>
        </Item>
  }
  render() {

    return (<div>
      <List className="my-list">    
        {this.props.data.map(this.convertDatatoCard.bind(this))}
      </List>
    </div>);
  }
});
