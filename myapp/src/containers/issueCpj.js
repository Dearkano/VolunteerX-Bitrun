import { List, InputItem, TextareaItem,DatePicker } from 'antd-mobile';
import { createForm } from 'rc-form';
import * as React from 'react';
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
        const { type ,date} = this.state;
        return <List>
            <List.Item>
                <InputItem
                    {...getFieldProps('focus')}
                    clear
                    placeholder="                     请在此输入项目标题"
                    ref={el => this.inputRef = el}
                >标题</InputItem>
            </List.Item>
            <List.Item>
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
                    placeholder="在此输入目标token"
                    ref={el => this.inputRef = el}
                    onVirtualKeyboardConfirm={v => console.log('onVirtualKeyboardConfirm:', v)}
                    clear
                    moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                >奖励token</InputItem>
                </List.Item>
            <List.Item>
                <TextareaItem
                    {...getFieldProps('note1')}
                    rows={10}
                    title="项目介绍"
                    autoHeight
                    labelNumber={5}
                />

            </List.Item>

        </List>;
    }
}
)