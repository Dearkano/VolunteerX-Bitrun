import { Tabs, WhiteSpace, Badge, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import * as React from 'react';
import nervos from '../nervos';
import { transaction, simpleStoreContract } from '../simpleStore'
import Submit from '../components/submit';
const submitTexts = {
    normal: '提交',
    submitting: '提交中',
    submitted: '提交成功',
}
const tabs2 = [
    { title: '授权COO', sub: '1' },
    { title: '授权公益组织', sub: '2' },
    { title: '撤销公益组织', sub: '3' },
];

export default createForm()(class extends React.Component {
    state = {
        submitText1: submitTexts.normal,
        submitText2: submitTexts.normal,
        submitText3: submitTexts.normal,
        errorText: '',
    }
    async onClickSetCOO() {
        const blockNumber = await nervos.appchain.getBlockNumber();
        console.log("blocknumber=" + blockNumber);
        const tx = {
            ...transaction,
            from: window.neuron.getAccount(),
            validUntilBlock: +blockNumber + 88,
        }
        var that = this;
        this.setState({
            submitText1: submitTexts.submitting,
        })
        console.log(tx.from);
        simpleStoreContract.methods.setCOO(this.addressRef.props.value).send(tx, function (err, res) {
            if (res) {
                nervos.listeners.listenToTransactionReceipt(res)
                    .then(receipt => {
                        if (!receipt.errorMessage) {
                            that.setState({ submitText1: submitTexts.submitted })
                        } else {
                            throw new Error(receipt.errorMessage)
                        }
                    })
            } else {
                that.setState({ submitText1: submitTexts.normal })
            }
        })
    }

    async onClickSetOrg() {
        const blockNumber = await nervos.appchain.getBlockNumber();
        console.log("blocknumber=" + blockNumber);
        const tx = {
            ...transaction,
            from: window.neuron.getAccount(),
            validUntilBlock: +blockNumber + 88,
        }
        var that = this;
        this.setState({
            submitText2: submitTexts.submitting,
        })
        console.log(tx.from);
        simpleStoreContract.methods.verifyUserByAddr(this.addressRef.props.value,true).send(tx, function (err, res) {
            if (res) {
                nervos.listeners.listenToTransactionReceipt(res)
                    .then(receipt => {
                        if (!receipt.errorMessage) {
                            that.setState({ submitText2: submitTexts.submitted })
                        } else {
                            throw new Error(receipt.errorMessage)
                        }
                    })
            } else {
                that.setState({ submitText2: submitTexts.normal })
            }
        })
    }


    async onClickCancelOrg() {
        const blockNumber = await nervos.appchain.getBlockNumber();
        console.log("blocknumber=" + blockNumber);
        const tx = {
            ...transaction,
            from: window.neuron.getAccount(),
            validUntilBlock: +blockNumber + 88,
        }
        var that = this;
        this.setState({
            submitText3: submitTexts.submitting,
        })
        console.log(tx.from);
        simpleStoreContract.methods.cancelUser(this.addressRef.props.value,true).send(tx, function (err, res) {
            if (res) {
                nervos.listeners.listenToTransactionReceipt(res)
                    .then(receipt => {
                        if (!receipt.errorMessage) {
                            that.setState({ submitText3: submitTexts.submitted })
                        } else {
                            throw new Error(receipt.errorMessage)
                        }
                    })
            } else {
                that.setState({ submitText3: submitTexts.normal })
            }
        })
    }

    render() {
        const { getFieldProps } = this.props.form;
        return <div>
        <Tabs tabs={tabs2}
            initialPage={1}
            tabBarPosition="top"
            renderTab={tab => <span>{tab.title}</span>}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <InputItem
                {...getFieldProps('focus')}
                clear
                placeholder="请输入地址"
                ref={el => this.addressRef = el}
            ></InputItem>
            <Submit text={this.state.submitText1} disabled={this.state.submitText1 !== submitTexts.normal} onClick={this.onClickSetCOO.bind(this)} ></Submit>
        </div>
      </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <InputItem
                {...getFieldProps('focus')}
                clear
                placeholder="请输入地址"
                ref={el => this.addressRef = el}
            ></InputItem>
            <Submit text={this.state.submitText2} disabled={this.state.submitText2 !== submitTexts.normal} onClick={this.onClickSetOrg.bind(this)} ></Submit>
        </div>
      </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <InputItem
                {...getFieldProps('focus')}
                clear
                placeholder="请输入地址"
                ref={el => this.addressRef = el}
            ></InputItem>
            <Submit text={this.state.submitText3} disabled={this.state.submitText3 !== submitTexts.normal} onClick={this.onClickCancelOrg.bind(this)} ></Submit>
        </div>
      </div>
        </Tabs>
        <WhiteSpace />
    </div>;
    }
}
)






