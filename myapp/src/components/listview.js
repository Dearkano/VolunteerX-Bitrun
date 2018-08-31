import { List,Card} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import * as React from 'react';
import CardView from '../components/card';
const Item = List.Item;
export default withRouter(class extends React.Component {
  state = {
    disabled: false,
  }
  convertDatatoCard(data){
    return <Item onClick={()=>this.props.history.push(`/detail/${data.mode}/${data.id}`)}><CardView data={data}/></Item>
  }
  render() {

    return (<div>
      <List className="my-list">    
        {this.props.data.map(this.convertDatatoCard.bind(this))}
      </List>
    </div>);
  }
});
