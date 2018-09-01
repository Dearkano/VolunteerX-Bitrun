import { WingBlank, InputItem, Tabs, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import * as React from 'react';
import nervos from '../nervos';
import { transaction, simpleStoreContract } from '../simpleStore'
import Submit from '../components/submit';
import { withRouter } from 'react-router-dom';




const submitTexts = {
  volunteer: '志愿者',
  charity: '公益组织',
  submitting: '注册中',
  submitted: '登陆成功',
}
export default withRouter(createForm()(class extends React.Component {
  state = {
    submitText: submitTexts.volunteer,
    submitText1: submitTexts.charity,
    errorText: '',
  }

  async onClickRegister(mode) {
    const blockNumber = await nervos.appchain.getBlockNumber();
    console.log("blocknumber=" + blockNumber);
    const tx = {
      ...transaction,
      from: window.neuron.getAccount(),
      validUntilBlock: +blockNumber + 88,
    }
    var that = this;
    if (mode == 0) {
      this.setState({
        submitText: submitTexts.submitting,
      })
    } else {
      this.setState({
        submitText1: submitTexts.submitting,
      })
    }

    console.log(tx.from);
    simpleStoreContract.methods.login(this.inputRef.props.value, mode).send(tx, function (err, res) {
      if (res) {
        nervos.listeners.listenToTransactionReceipt(res)
          .then(receipt => {
            if (!receipt.errorMessage) {
              if (mode === 0) {
                that.setState({ submitText: submitTexts.submitted })
              } else {
                that.setState({ submitText1: submitTexts.submitted })
              }
              this.props.history.push("/");
            } else {
              throw new Error(receipt.errorMessage)
            }
          })
      } else {
        if (mode === 0) {
          that.setState({ submitText: submitTexts.normal })
        } else {
          that.setState({ submitText1: submitTexts.normal })
        }

      }
    })
  }

  render() {
    console.log("=======");
    console.log(this.state.mode);
    const { getFieldProps } = this.props.form;
    return <div style={{ padding: '15px 0' }}>
      <WingBlank>
        <WhiteSpace size="lg" />

        <div>
          <InputItem
            {...getFieldProps('focus')}
            clear
            placeholder="请输入您的姓名"
            ref={el => this.inputRef = el}
          ></InputItem>
          <Submit text={this.state.submitText} disabled={this.state.submitText !== submitTexts.volunteer} onClick={this.onClickRegister.bind(this, 0)} ></Submit>
          <Submit text={this.state.submitText1} disabled={this.state.submitText1 !== submitTexts.charity} onClick={this.onClickRegister.bind(this, 1)} ></Submit>
        </div>    <WhiteSpace size="lg" />
      </WingBlank>
    </div>
      ;
  }
}
)
)






