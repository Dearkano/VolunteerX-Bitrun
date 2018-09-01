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
            item.participants=ids.length;
            item.imgUrl="/images/charity.png";
            item.id=ids[i];
            data.push(item);
        }
        this.setState({showToast:false,data:data});
    }
    render() {
        const obj = {
            description: "姚文生，天津日报视觉中心的一名摄影记者。2014年12月，姚文生的妻子张淑霞被确诊为急性髓系白血病，一年多来，姚文生花光了全部家庭积蓄，默默扛起了所有重担，他奔波于医院和采访地点之间，在照顾妻子的同时，从未离开过新闻报道一线，几乎没有耽误过一次报道任务。姚文生总想着：“不要给同事、朋友添堵，能自己扛就扛过去。”为此，他花掉了抵押房产的贷款，又借了外债，可面对高昂犹如“无底洞”般的移植费用，这个一直以来乐观、坚强的男人是真的没辙了。",
            title: "对越自卫反击战女兵身患癌症",
            amount: 5000,
            rest: 1200,
            participants: 5988,
            mode: 1,
            imgUrl: "/images/charity.png",
            id: 1
        }
        const indicator =   <ActivityIndicator
        toast
        text="Loading..."
        animating={this.state.animating}
      />;
      const content = <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <Carousel />
      <WhiteSpace size="lg" />
      <ListView data={this.state.data} mode={2}/>
      <WhiteSpace size="lg" /> 
  </WingBlank>;
    const visible =  this.state.showToast?indicator:content;
        return (
           <div>{visible}</div>
            );
    }
}