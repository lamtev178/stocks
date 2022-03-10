import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'antd';
import {FileDoneOutlined, PhoneOutlined, InstagramOutlined, TwitterOutlined, SkypeOutlined, FacebookOutlined} from '@ant-design/icons'

function Footer(){
  return(
    <Row style={{background:"#141414", color:"white", paddingTop:"20px"}}>
    <Col  span={6}>
      <h3>Links</h3>
        <ul className="list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="stocksList">Stocks</Link></li>
          <li><Link to="contactus">Contact Us</Link></li>
        </ul>
      </Col>
    <Col span={6}>
      <h3><FileDoneOutlined />All rights reserved</h3>
    </Col>
    <Col span={6}>
      <h3>Our Address</h3>
      <p>Russia,<br />Moscow region,<br />Mytishchi, Borisovka street<br /><PhoneOutlined />:89165663158</p>
    </Col>
    <Col span={6}>
    <a href="https://www.instagram.com/"><InstagramOutlined style={{fontSize:"25px"}}/></a>
    <a href="https://www.twitter.com/"><TwitterOutlined style={{fontSize:"25px"}}/></a>
    <a href="https://www.skype.com/"><SkypeOutlined style={{fontSize:"25px"}}/></a>
    <a href="https://www.facebook.com/"><FacebookOutlined style={{fontSize:"25px"}}/></a>
    </Col>
    </Row>
  );
}

export default Footer;
