import React from 'react';
import { Typography} from 'antd';
import {DollarCircleOutlined} from '@ant-design/icons'

const { Title, Paragraph } = Typography;

function Home(){
  return(
    <div className='container'>
    <Title>Welcome</Title>
    <Paragraph style={{fontSize:"20px"}}>
    On our website you can track the stock prices of leading American companies. You can also track the current price of bonds and follow the news in the world of finance
    </Paragraph>
    <DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/>
    </div>
  );
}

export default Home
