import React from 'react';
import { Input, Button, Select, Row, Col } from 'antd';

const  {TextArea} = Input
const {Option} = Select

function Contact(){
  return(
    <Row justify="center">
    <h1>Contact Us</h1>
    <Col span={12}>
      <Input placeholder="Your Name" />
    </Col>
    <Col span={12}>
      <Select default="Tel.">
      <Option value="Email">Tel.</Option>
      </Select>
    </Col>
    <Col span={12}>
      <TextArea rows={4} style={{width:"300px"}}/>
    </Col>
    <Button type="primary">Submit</Button>
    </Row>
  );
}

export default Contact
