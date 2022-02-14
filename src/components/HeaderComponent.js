import React, {useState} from 'react';
import {Menu, Row,  Modal, Button, Form, Input, Checkbox } from 'antd';
import {Link} from 'react-router-dom';
import {MailOutlined, LineChartOutlined, UserOutlined} from '@ant-design/icons';

function Header(){
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [user, setUser] = useState({username: '', password: '', remember: ''});
  
  const handleOk = (event) => {
    setIsModalVisible(false);
    alert(JSON.stringify(event))
    setUser({username : event.username, password : event.password, remember : event.remember})
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const showModal = () => {
    setIsModalVisible(true);
  };
  const modal = (<Modal title="Login In" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <Form style={{width:'400px'}} onFinish={handleOk}>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{borderRadius:"30px"}}>Login In</Button>
        </Form>
      </Modal>
      );
  return(
    <Row justify="center" style={{background:"white"}}>
      <Menu mode="horizontal">
        <Menu.Item key="logo"><Link to="/"><img src="../../logo2.png" style={{height:"35px", width:"35px"}} alt='logo'/></Link></Menu.Item>
        <Menu.Item key="stocks" icon={<LineChartOutlined />}><Link to="stocks">Stocks</Link></Menu.Item>
        <Menu.Item key="contact" icon={<MailOutlined />}><Link to="contactus">Contact Us</Link></Menu.Item>
        <Menu.Item key="news"><Link to="news">News</Link></Menu.Item>
        <Menu.Item key="login" ><Button onClick={showModal} icon={<UserOutlined />}>Login in</Button></Menu.Item>
      </Menu>
      {modal}
    </Row>
  );
}

export default Header