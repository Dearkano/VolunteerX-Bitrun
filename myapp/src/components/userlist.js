import { List, Button } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import * as React from 'react';
import nervos from '../nervos';
import { transaction, simpleStoreContract } from '../simpleStore'
import Submit from '../components/submit';
const submitTexts = {
  normal: '确认',
  submitting: '确认中',
  submitted: '发放成功',
}
const submitTexts1 = {
  normal: '取消',
  submitting: '取消中',
  submitted: '取消成功',
}
const Item = List.Item;
export default withRouter(class extends React.Component {
  state = {
    disabled: false,
    users: [],
    submitText: submitTexts.normal,
    submitText1: submitTexts1.normal,
    userStatus: []
  }
  async componentDidMount() {
    let userStatus = [];
    if (this.props.mode === 'volunteer') {
      const { itemId } = this.props;
      let item = await simpleStoreContract.methods
        .getWelfareItemById(itemId)
        .call({
          from: window.neuron.getAccount()
        });
      const ids = item._userIds;

      for (let i in ids) {
        const status = await simpleStoreContract.methods
          .getUserJoinItemStatus(ids[i], itemId)
          .call({
            from: window.neuron.getAccount()
          });
     
        let obj = {};
        obj.userId = ids[i];
        obj.status = status;
        userStatus.push(obj);
      }
      this.setState({ userStatus: userStatus })
    }

  }
  async confirm(thisUserId) {
    //-------------------------------

    console.log("userId=" + thisUserId)
    let blockNumber = await nervos.appchain.getBlockNumber();
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

    simpleStoreContract.methods.passWelfareItem(this.props.match.params.projectId, thisUserId).send(tx, function (err, res) {
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




  convertDatatoCard(data) {
    let status = false;
    for (let i in this.state.userStatus) {
      if (this.state.userStatus[i].userId == data.id) {
        status = this.state.userStatus[i].status;
        break;
      }
    }
  
    const submitBtn = <Submit text={status ? "已确认" : this.state.submitText} disabled={status || this.state.submitText !== submitTexts.normal}
      style={{ width: "60px", height: "30px", marginRight: "15px", fontSize: "12px", lineHeight: "30px" }}
      onClick={this.confirm.bind(this, data.id)} ></Submit>;
    const voteMes = <div></div>;
    return <Item >
      <div style={{ display: 'flex', height: "32px", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: 'flex' }}>
          <img style={{ width: "25px", marginRight: "10px" }} src="/images/user.svg" />
          <div>{data._name}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {this.props.mode === 'volunteer' ? submitBtn : voteMes}
        </div>
      </div>
    </Item>
  }
  render() {

    return (<div>
      <List className="my-list">
        {this.props.data.map(this.convertDatatoCard.bind(this))}
      </List>
    </div>);
  }
});
