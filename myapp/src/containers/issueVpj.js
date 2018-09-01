import { List, InputItem, TextareaItem,DatePicker } from 'antd-mobile';
import { createForm } from 'rc-form';
import * as React from 'react';
import Submit from '../components/submit';
import nervos from '../nervos';
import {withRouter} from 'react-router-dom';
import { transaction, simpleStoreContract } from '../simpleStore'

import {BigNumber} from 'bignumber.js';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
const submitTexts = {
    normal: '发布',
    submitting: '发布中',
    submitted: '发布成功',
  }
export default withRouter(createForm()(class extends React.Component {
    state = {
        type: 'money',
        submitText: submitTexts.normal,
        errorText: '',
    }

    async onClickSubmit(){
        const time = this.state.date.getTime();
        const blockNumber = await nervos.appchain.getBlockNumber();
        console.log("blocknumber="+blockNumber);
        const bonus = BigNumber(this.bonusRef.props.value).shiftedBy(18);
        const tx = {
            ...transaction,
            from:window.neuron.getAccount(),
            validUntilBlock: + blockNumber + 88,
          }
          var that = this;
          this.setState({
          submitText: submitTexts.submitting,
         })
          console.log(tx.from);
          simpleStoreContract.methods.newWelfareItem(this.titleRef.props.value,this.descriptionRef.props.value,this.amountRef.props.value,bonus,time).send(tx, function(err, res) {
            if (res) {
              nervos.listeners.listenToTransactionReceipt(res)
                .then(receipt => {
                  if (!receipt.errorMessage) {
                     that.setState({ submitText: submitTexts.submitted })
                     that.props.history.push(`/volunteer`);
                  } else {
                    throw new Error(receipt.errorMessage)
                  }
                })
            } else {
                that.setState({ submitText: submitTexts.normal })
            }
          })
    }
    render() {
        const { getFieldProps } = this.props.form;
        const { type } = this.state;
        return <List>
            <List.Item>
                <InputItem
                    {...getFieldProps('focus')}
                    clear
                    placeholder="                     请在此输入项目标题"
                    ref={el => this.titleRef = el}
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
                    placeholder="在此输入奖励token"
                    ref={el => this.bonusRef = el}
                    onVirtualKeyboardConfirm={v => console.log('onVirtualKeyboardConfirm:', v)}
                    clear
                    moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                >奖励token</InputItem>
                </List.Item>
                <List.Item>
                <InputItem
                    {...getFieldProps('money3', {
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
                    placeholder="在此输入项目所需人数"
                    ref={el => this.amountRef = el}
                    onVirtualKeyboardConfirm={v => console.log('onVirtualKeyboardConfirm:', v)}
                    clear
                    moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                >参与人数</InputItem>
            </List.Item>
          
            <DatePicker
          value={this.state.date}
          onChange={date => this.setState({ date })}
        >
          <List.Item arrow="horizontal" style={{marginLeft:"15px"}}>截止时间</List.Item>
        </DatePicker>
       
            <List.Item>
                <TextareaItem
                    {...getFieldProps('note1')}
                    rows={4}
                    title="项目介绍"
                    autoHeight
                    labelNumber={5}
                    ref={el=>this.descriptionRef=el}
                />

            </List.Item>
                <List.Item>
                <Submit text={this.state.submitText} disabled={this.state.submitText !== submitTexts.normal}  onClick={this.onClickSubmit.bind(this)} ></Submit>
                    </List.Item>
        </List>;
    }
}
)
)