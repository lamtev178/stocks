import React from 'react';
import {Menu, Space} from 'antd';
import {Link} from 'react-router-dom';
import {MailOutlined, LineChartOutlined, BookOutlined} from '@ant-design/icons';

function Header(){
  return(
      <Menu mode="horizontal" >
      <Menu.Item key="logo"><Link to="/"><img src="../../logo.png" style={{height:30}}/></Link></Menu.Item>
      <Menu.Item key="stocks" icon={<LineChartOutlined />}><Link to="stocks">Stocks</Link></Menu.Item>
      <Menu.Item key="bonds" icon={<BookOutlined />}><Link to="bonds">Bonds</Link></Menu.Item>
      <Menu.Item key="contact" icon={<MailOutlined />}><Link to="contactus">Contact Us</Link></Menu.Item>
      </Menu>
  );
}

export default Header
