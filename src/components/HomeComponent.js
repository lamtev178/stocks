import React from 'react';
import { Typography} from 'antd';

const { Title, Paragraph } = Typography;

function Home(){
  return(
    <>
    <Title>Welcome</Title>
    <Paragraph>
    On our website you can track the stock prices of leading American companies. You can also track the current price of bonds and follow the news in the world of finance
    </Paragraph>
    </>
  );
}

export default Home
