import * as React from 'react';
import { Button,Card, WingBlank, WhiteSpace } from 'antd-mobile';
import UserList from '../components/userlist';

export default class extends React.Component {
    render() {
      //  this.props.match.params.projectId
        return (
            <WingBlank>
                <h3>乌镇-世界互联网大会志愿者招募</h3>
                <img style={{ width: "100%", height: "100%" }} src="/images/volunteer.jpg" />
                <p>
                    世界互联网大会（World Internet Conference），是由中华人民共和国倡导并每年在浙江省嘉兴市桐乡乌镇举办的世界性互联网盛会，旨在搭建中国与世界互联互通的国际平台和国际互联网共享共治的中国平台，让各国在争议中求共识、在共识中谋合作、在合作中创共赢。
                    </p>
                <Button type="primary">点击报名</Button>
                <WhiteSpace />
                <UserList data={[{name:'张三'},{name:'李四'},{name:'王五'}]} />
            </WingBlank>
        );
    }
}