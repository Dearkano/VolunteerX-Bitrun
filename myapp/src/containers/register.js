import { Button, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import * as React from 'react';


export default createForm()(class extends React.Component {
    render() {
        const { getFieldProps } = this.props.form;
        return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"}}>
            <InputItem
            {...getFieldProps('focus')}
            clear
            placeholder="请输入您的姓名"
            ref={el => this.inputRef = el}
        ></InputItem>
        <Button style={{width:"100px",marginTop:"50px"}} size="large" type="primary">注册登陆</Button>
        </div>;
    }
}
)