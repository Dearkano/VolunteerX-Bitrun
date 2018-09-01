import { List, Button} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import * as React from 'react';
import nervos from '../nervos';
import { transaction, simpleStoreContract } from '../simpleStore'
import Submit from '../components/submit';
const submitTexts = {
    normal: '确认',
    submitting: '确认中',
    submitted: '发放成功',
  }
const Item = List.Item;
export default withRouter(class extends React.Component {
  state = {
    disabled: false,
    users:[],
    submitText: submitTexts.normal,
  }
  async componentDidMount(){
    // const promise = await simpleStoreContract.methods.getWelfareItemById(this.props.match.params.projectId).call({
    //   from: nervos.eth.accounts.wallet[0].address });
  }
  async confirm(thisUserId){
    //-------------------------------
    
   console.log("userId="+thisUserId)
    let blockNumber = await nervos.appchain.getBlockNumber();
    console.log("blocknumber="+blockNumber);
    const tx = {
        ...transaction,
        from:window.neuron.getAccount(),
        validUntilBlock: +blockNumber + 88,
      }
      var that = this;
      this.setState({
      submitText: submitTexts.submitting,
     })

      simpleStoreContract.methods.passWelfareItem(this.props.match.params.projectId,thisUserId).send(tx, function(err, res) {
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
  convertDatatoCard(data){
    console.log("data"+data.userId);
    return <Item >
        <div style={{display:'flex',height:"32px",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{display:'flex'}}>
        <img style={{width:"25px",marginRight:"10px"}} src="/images/volunteer.jpg" />
        <div>{data._name}</div>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <Submit text={this.state.submitText} disabled={this.state.submitText !== submitTexts.normal}  style={{width:"60px",height:"30px",marginRight:"15px",fontSize:"12px",lineHeight:"30px"}} onClick={this.confirm.bind(this,data.id)} ></Submit>
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
