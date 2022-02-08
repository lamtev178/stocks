import React from 'react';
import { Form, Typography, Input, Select, Row, Button } from 'antd';


const  {Title} = Typography;
const { TextArea } = Input;
const {Option} = Select;

function Contact(){
  return(
    <div className='container'>
      <Title>Contact Us</Title>
      <Form style={{width:'400px'}}>
        <Form.Item label='Your name or Company name'>
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item label='Select'>
          <Select>
            <Select.Option value="Email">Email</Select.Option>
              <Select.Option value="Tel">Tel.</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label='Your comment'>
          <TextArea/>
        </Form.Item>
        <Form.Item >
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Contact
