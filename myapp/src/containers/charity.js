import * as React from 'react';
import { ActivityIndicator,WingBlank, WhiteSpace } from 'antd-mobile';
import ListView from '../components/listview';
import Carousel from '../components/carousel';
import nervos from '../nervos';
import { simpleStoreContract } from '../simpleStore'
export default class extends React.Component {
    state={data:[],showToast:false};
    async componentDidMount() {
        this.setState({showToast:true});
        const ids = await simpleStoreContract.methods
            .getInvestItems()
            .call({
                from: window.neuron.getAccount(),
            });
        let data = [];
        
        for (let i in ids) {
            let item = await simpleStoreContract.methods
            .getInvestItemById(ids[i])
            .call({
                from: window.neuron.getAccount()
            });
            item.participants=item._userIds.length;
            item.imgUrl=`/images/charity${ids[i]%5}.png`;
            item.id=ids[i];
            data.push(item);
        }
        this.setState({showToast:false,data:data});
    }
    render() {
      
        const indicator =   <ActivityIndicator
        toast
        text="Loading..."
        animating={this.state.animating}
      />;
      const content = <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <Carousel />
      <WhiteSpace size="lg" />
      <ListView data={this.state.data} mode={1}/>
      <WhiteSpace size="lg" /> 
  </WingBlank>;
    const visible =  this.state.showToast?indicator:content;
        return (
           <div>{visible}</div>
            );
    }
}