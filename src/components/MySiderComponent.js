import React from "react";
import {Input, Select, Layout, Typography } from 'antd';
const { Option } = Select;
const {Sider} = Layout;
const { Title } = Typography;
const { Search } = Input;

function MySider({onSearch, onChange, value}){
  return(
    <Sider style={{background:"#bfbfbf"}} breakpoint='sm'>
      <div style={{position: "sticky", top: "0", paddingTop:'20px'}}>
        <Title level={4}>Select Range</Title>
        <Select value={value} onChange={onChange} style={{margin:"10px", width:"80%"}}>
          <Option value="regular">Regular</Option>
          <Option value="twoHundredDay">Two Hundred Day</Option>
          <Option value="fiftyDay">Fifty Day</Option>
        </Select>
        <Title level={4} >Search symbol</Title>
        <Search style={{margin:"10px", width:"80%"}} onSearch={onSearch} type="text" enterButton placeholder="input search"/>
      </div>
    </Sider>
  )
}

export default MySider