import * as React from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import UserList from '../components/userlist';
import nervos from '../nervos';
import { transaction, simpleStoreContract } from '../simpleStore'
import Submit from '../components/submit';
const submitTexts = {
    normal: '报名',
    submitting: '报名中',
    submitted: '报名成功',
}
export default class extends React.Component {
    state = {
        submitText: submitTexts.normal,
        errorText: '',
        data:{},
        usersInfo:[]
    }
    async componentDidMount() {
        const projectId = this.props.match.params.projectId;
        const data = await simpleStoreContract.methods   
        .getWelfareItemById(projectId)
        .call({
            from: window.neuron.getAccount()
        });
        const ids = data._userIds;
        alert(JSON.stringify(data));
        const usersInfo = [];
        for(let i in ids){
            let item = await simpleStoreContract.methods
            .getUserById(ids[i])
            .call({
                from: window.neuron.getAccount()
            });
            item.id=ids[i];
            usersInfo.push(item);
        }
        this.setState({data:data,usersInfo:usersInfo});
        }
    async onClickSubmit() {
        const blockNumber = await nervos.appchain.getBlockNumber();
        console.log("blocknumber=" + blockNumber);

        const tx = {
            ...transaction,
            from: window.neuron.getAccount(),
            validUntilBlock: +blockNumber + 88,
        }
        var that = this;
        this.setState({
            submitText: submitTexts.submitting,
        })
        console.log(tx.from);
        simpleStoreContract.methods.joinWelfareItem(this.props.match.params.projectId).send(tx, function (err, res) {
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
    render() {
        //  this.props.match.params.projectId
        return (
            <WingBlank>
                <h3>乌镇-世界互联网大会志愿者招募</h3>
                <img style={{ width: "100%", height: "100%" }} src="/images/volunteer.jpg" />
                <p>
                    世界互联网大会（World Internet Conference），是由中华人民共和国倡导并每年在浙江省嘉兴市桐乡乌镇举办的世界性互联网盛会，旨在搭建中国与世界互联互通的国际平台和国际互联网共享共治的中国平台，让各国在争议中求共识、在共识中谋合作、在合作中创共赢。
                    </p>
                <Submit text={this.state.submitText} disabled={this.state.submitText !== submitTexts.normal} onClick={this.onClickSubmit.bind(this)} ></Submit>
                <WhiteSpace />
                <UserList data={this.state.usersInfo} />
            </WingBlank>
        );
    }
}