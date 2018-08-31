import * as React from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import ListView from '../components/listview';
export default class extends React.Component {
    render() {
        const obj={
            description : "世界互联网大会（World Internet Conference），是由中华人民共和国倡导并每年在浙江省嘉兴市桐乡乌镇举办的世界性互联网盛会，旨在搭建中国与世界互联互通的国际平台和国际互联网共享共治的中国平台，让各国在争议中求共识、在共识中谋合作、在合作中创共赢。",
            title : "乌镇-世界互联网大会志愿者招募",
            amount:70,
            rest:15,
            participants:55,
            mode:2,
            imgUrl:"/images/volunteer.jpg",
            id:1
          }
        return(
        <WingBlank size="lg">
            <WhiteSpace size="lg" />
            <ListView data={[obj,obj,obj]}/>
            <WhiteSpace size="lg" />
        </WingBlank>);
    }
}