import {  InputItem,WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
import * as React from 'react';
import nervos from '../nervos';
import { transaction, simpleStoreContract } from '../simpleStore'
import Submit from '../components/submit';
import {BigNumber} from 'bignumber.js';

const submitTexts = {
    normal: '捐献',
    submitting: '捐赠中',
    submitted: '捐赠成功',
  }
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
export default createForm()(class extends React.Component {
    async onClickSubmit(){
        const blockNumber = await nervos.appchain.getBlockNumber();
       
        let num = '0x'+BigNumber(this.inputRef.props.value).shiftedBy(18).toString(16);
        
        transaction.value=num;
        const tx = {
            ...transaction,
            from:window.neuron.getAccount(),
            validUntilBlock: +blockNumber + 88,
          }
          var that = this;
          this.setState({
          submitText: submitTexts.submitting,
         })
          console.log(tx.from);
          simpleStoreContract.methods.sendCoin().send(tx, function(err, res) {
            if (res) {
              nervos.listeners.listenToTransactionReceipt(res)
                .then(receipt => {
                  if (!receipt.errorMessage) {
                     that.setState({ submitText: submitTexts.submitted })
                  } else {
                    throw new Error(receipt.errorMessage)
                  }
                })
            } else {
                that.setState({ submitText: submitTexts.normal })
            }
          })
    }
    state = {
        submitText: submitTexts.normal,
        errorText: '',
      }
    render() {
        //const { type } = this.state;
        const { getFieldProps } = this.props.form;
        return <WingBlank><div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",marginTop:"250px"}}>
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
                    type={'number'}
                    placeholder="在此输入您想捐赠的token数目"
                    ref={el => this.inputRef = el}
                    onVirtualKeyboardConfirm={v => console.log('onVirtualKeyboardConfirm:', v)}
                    clear
                    moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                ></InputItem>
           <Submit text={this.state.submitText} disabled={this.state.submitText !== submitTexts.normal}   onClick={this.onClickSubmit.bind(this)} ></Submit>
        </div></WingBlank>;
    }
}
)