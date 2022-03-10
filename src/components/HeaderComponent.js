import React, {useState} from 'react';
import {Menu, Button} from 'antd';
import {Link} from 'react-router-dom';
import {MailOutlined, LineChartOutlined, UserOutlined} from '@ant-design/icons';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import logo from '../img/logo2.png';



function Header(){
  const [user, setUser] = useState();
  const { SubMenu } = Menu;
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  function login(){
  signInWithPopup(auth, provider)
  .then((result) => {
    setUser(result.user);
  }).catch((error) => {
    alert(error.code, error.message); 
  });}

    const menuUser = (        
        <SubMenu key="SubMenu" title={<img src={user?.photoURL} style={{width: "32px", height: "32px", borderRadius:"50%"}}/>}>
          <Menu.ItemGroup title={user?.email} />
          <Menu.ItemGroup title={user?.displayName}>
            <Menu.Item key="LoginOut" onClick={() => {auth.signOut(); setUser(null)}}>Sign Out</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        )
  
  return(
      <Menu mode="horizontal" style={{paddingLeft:'30px'}}>
        <Menu.Item key="logo"><Link to="/"><img src={logo} style={{height:"35px", width:"35px"}} alt='logo'/></Link></Menu.Item>
        <Menu.Item key="stocks" icon={<LineChartOutlined />}><Link to="stocksList">Stocks</Link></Menu.Item>
        <Menu.Item key="contact" icon={<MailOutlined />}><Link to="contactus">Contact Us</Link></Menu.Item>
        <Menu.Item key="news"><Link to="news">News</Link></Menu.Item>
        {user? menuUser : <Menu.Item key="login" ><Button icon={<UserOutlined />} onClick={login} >Login in</Button></Menu.Item>}
      </Menu>
  );
}

export default Header

