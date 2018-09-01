import { NavBar, Popover} from 'antd-mobile';
import * as React from 'react';
import {withRouter} from 'react-router-dom';
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
export default withRouter(class extends React.Component{
  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
    // console.log(opt.props.value);
    switch(opt.props.value){
      case'volunteer':
      this.props.history.push("/issueVpj");
      break;
      case'charity':
      this.props.history.push("/issueCpj");
      break;
      case'donation':
      this.props.history.push("/donation");
      break;
      case'manage':
      this.props.history.push("/manage");
      break;
    }
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
    render(){
        return(
            <div>
            <NavBar
              mode="light"
 
              onLeftClick={() => console.log('onLeftClick')}
              rightContent={[
                  <Popover mask
                    overlayClassName="fortest"
                    overlayStyle={{ color: 'currentColor' }}
                    visible={this.state.visible}
                    overlay={[
                      (<Item key="4" value="volunteer" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">志愿项目</Item>),
                      (<Item key="5" value="charity" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>捐赠项目</Item>),
                      (<Item key="6" value="donation" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>捐献资金</Item>),
                      (<Item key="7" value="manage" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                        <span style={{ marginRight: 5 }}>管理</span>
                      </Item>),
                    ]}
                    align={{
                      overflow: { adjustY: 0, adjustX: 0 },
                      offset: [-10, 0],
                    }}
                    onVisibleChange={this.handleVisibleChange}
                    onSelect={this.onSelect}
                  >
                    <div style={{
                      height: '100%',
                      padding: '0 15px',
                      marginRight: '-15px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    >
                       <img style={{width:"32px"}} src='/images/plus.png' />
                    </div>
                  </Popover>

    
              ]}
            >VolunteerX</NavBar>
          </div>
        )
    }
}
)
 
