import * as React from 'react';
import {  ActivityIndicator, WingBlank, WhiteSpace } from 'antd-mobile';
import ListView from '../components/listview';
import nervos from '../nervos';
import { transaction, simpleStoreContract } from '../simpleStore'
export default class extends React.Component {
    state={data:[],showToast:false};
    async componentDidMount() {
        this.setState({showToast:true})
        const ids = await simpleStoreContract.methods
            .getWelfareItems()
            .call({
                from: window.neuron.getAccount(),
            });
            alert(ids);
        let data = [];
        for (let i in ids) {
            let item = await simpleStoreContract.methods
            .getWelfareItemById(ids[i])
            .call({
                from: window.neuron.getAccount()
            });
            item.participants=ids.length;
            item.imgUrl="/images/volunteer.jpg";
            item.id=ids[i];
            data.push(item);
        }
        this.setState({data:data,showToast:false});
    }
    render() {
      const content =  <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <ListView data={this.state.data}mode={1}/>
      <WhiteSpace size="lg" />
  </WingBlank>;
  const toast = <ActivityIndicator
  toast
  text="Loading..."
  animating={this.state.animating}
/>;
    const visible = this.state.showToast?toast:content;
        return(
            <div>{visible}</div>
       );
    }
}