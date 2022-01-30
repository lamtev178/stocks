import React from 'react';
import {Menu, Row} from 'antd';
import {Link} from 'react-router-dom';
import {MailOutlined, LineChartOutlined, BookOutlined} from '@ant-design/icons';

function Header(){
  return(
    <Row justify="center" style={{background:"white"}}>
      <Menu mode="horizontal">
      <Menu.Item key="logo"><Link to="/"><img src="../../logo2.png" style={{height:"35px", width:"35px"}} alt='logo'/></Link></Menu.Item>
      <Menu.Item key="stocks" icon={<LineChartOutlined />}><Link to="stocks">Stocks</Link></Menu.Item>
      <Menu.Item key="bonds" icon={<BookOutlined />}><Link to="bonds">Bonds</Link></Menu.Item>
      <Menu.Item key="contact" icon={<MailOutlined />}><Link to="contactus">Contact Us</Link></Menu.Item>
      <Menu.Item key="news"><Link to="news">News</Link></Menu.Item>
      </Menu>
    </Row>
  );
}

export default Header
