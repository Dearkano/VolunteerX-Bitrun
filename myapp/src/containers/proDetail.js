import * as React from 'react';
import { Button, InputItem, WingBlank, WhiteSpace } from 'antd-mobile';
import UserList from '../components/userlist';
import { createForm } from '../../node_modules/rc-form/lib';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
export default createForm()(class extends React.Component {
    state = {
        type: 'money',
    }
    render() {
        const { getFieldProps } = this.props.form;
        const { type } = this.state;
        //  this.props.match.params.projectId
        return (
            <WingBlank>
                <h3>乌镇-世界互联网大会志愿者招募</h3>
                <img style={{ width: "100%", height: "100%" }} src="/images/volunteer.jpg" />
                <p>
                    世界互联网大会（World Internet Conference），是由中华人民共和国倡导并每年在浙江省嘉兴市桐乡乌镇举办的世界性互联网盛会，旨在搭建中国与世界互联互通的国际平台和国际互联网共享共治的中国平台，让各国在争议中求共识、在共识中谋合作、在合作中创共赢。
                    </p>
                <WhiteSpace />
                <InputItem
                    {...getFieldProps('money2', {
                        normalize: (v, prev) => {
                            if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                                if (v === '.') {
                                    return '0.';
                                }
                                return prev;
                            }
                            return v;
                        },
                    })}
                    type={type}
                    placeholder="请输入要投的token数"
                    ref={el => this.inputRef = el}
                    onVirtualKeyboardConfirm={v => console.log('onVirtualKeyboardConfirm:', v)}
                    clear
                    moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                ></InputItem>
                <WhiteSpace />
                <Button type="primary">投票</Button>
                <WhiteSpace />
                <UserList data={[{ name: '张三' }, { name: '李四' }, { name: '王五' }]} />
            </WingBlank>
        );
    }
})