import React, {useState} from 'react';
import {Menu, Row,  Modal, Button, Form, Select, Input} from 'antd';
import {Link} from 'react-router-dom';
import {MailOutlined, LineChartOutlined, BookOutlined, UserOutlined} from '@ant-design/icons';

function Header(){
  const [isModalVisible, setIsModalVisible] = useState(true);
  const handleOk = () => {
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const showModal = () => {
    setIsModalVisible(true);
  };
  return(
    <Row justify="center" style={{background:"white"}}>
      <Menu mode="horizontal">
      <Menu.Item key="logo"><Link to="/"><img src="../../logo2.png" style={{height:"35px", width:"35px"}} alt='logo'/></Link></Menu.Item>
      <Menu.Item key="stocks" icon={<LineChartOutlined />}><Link to="stocks">Stocks</Link></Menu.Item>
      {/* <Menu.Item key="bonds" icon={<BookOutlined />}><Link to="bonds">Bonds</Link></Menu.Item> */}
      <Menu.Item key="contact" icon={<MailOutlined />}><Link to="contactus">Contact Us</Link></Menu.Item>
      <Menu.Item key="news"><Link to="news">News</Link></Menu.Item>
      <Menu.Item key="login" ><Button onClick={showModal} icon={<UserOutlined />}>Login in</Button></Menu.Item>
      </Menu>
      <Modal title="Login In" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={<Button onClick={handleOk} type="primary" style={{borderRadius:"30px"}}>Login In</Button>}>
         <Form style={{width:'400px'}}>
           <Form.Item label='Login'>
             <Input placeholder="Login" />
           </Form.Item>
           <Form.Item label='Password'>
             <Input placeholder="Password" />
           </Form.Item>
           
          </Form>
      </Modal>
    </Row>
  );
}

export default Header


        // <Form style={{width:'400px'}}>
        //   <Form.Item label='Your Name'>
        //     <Input placeholder="Your Name" />
        //   </Form.Item>
        //   <Form.Item label='Your Email'>
        //     <Input placeholder="Your Email" />
        //   </Form.Item>
        //   <Form.Item label='Your Tel'>
        //     <Input placeholder="Your Tel" />
        //   </Form.Item>
        //   <Form.Item >
        //     <Button type="primary" style={{borderRadius:"30px"}}>Submit</Button>
        //   </Form.Item>
        // </Form>