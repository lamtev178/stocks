import React from 'react';
import oops from '../img/Oops.png';
import {Row, Col, Typography} from 'antd';
const { Title } = Typography;

function Error({error}){
  return(
    <Row justify='center'>
      <Col span={{md:8,sm:12,xs:24}} style={{display: "flex", alignItems: "center"}}>
        <Title>{error.data.message}</Title>
      </Col>
      <Col span={{md:8,sm:12,xs:24}}>
        <img className='error-img' src={oops} alt='Oops'/>
      </Col>
    </Row>
  );
}

export default Error