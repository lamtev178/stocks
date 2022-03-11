import React, {useRef} from 'react';
import { Form, Typography, Input, Select, Row, Button } from 'antd';


const  {Title} = Typography;
const { TextArea } = Input;
const {Option} = Select;

function Contact(){
  const formRef=useRef()
  function handleSubmit(event){
    alert('Вы ввели: ' + event.name + ' ' + event.select + ' ' + event.comment);
    formRef.current.resetFields();
  }
  return(
    <div className='container'>
      <Title>Contact Us</Title>
      <Form style={{maxWidth:'400px'}} onFinish={handleSubmit} ref={formRef}>
        <Form.Item label='Your name or Company name' name='name'>
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item label='Select' name='select'>
          <Select>
            <Option value="Email">Email</Option>
              <Option value="Tel">Tel.</Option>
          </Select>
        </Form.Item>
        <Form.Item label='Your comment' name='comment'>
          <TextArea/>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Contact
