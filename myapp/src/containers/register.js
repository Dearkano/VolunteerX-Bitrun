import { Button, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import * as React from 'react';


export default createForm()(class extends React.Component {
    render() {
        return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <InputItem
            {...getFieldProps('focus')}
            clear
            placeholder="请输入您的姓名"
            ref={el => this.inputRef = el}
        ></InputItem>
        <Button size="large" type="primary">注册</Button>
        </div>;
    }
}
)