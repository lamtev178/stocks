import React from 'react';
import { Typography} from 'antd';
import {DollarCircleOutlined} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function Home(){
  return(
    <div className='container'>
      <div className='welcome'>
        <Title >Welcome to the Stocks Tracker</Title>
      </div>
      <Paragraph style={{fontSize:"20px"}}>
        On our website you can track the stock prices, follow the news and read the comments of experts. <br />Hope it will useful for you 
      </Paragraph>
      <DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/><DollarCircleOutlined spin style={{fontSize:"40px", marginBottom:"40px"}}/>
    </div>
  );
}

export default Home
