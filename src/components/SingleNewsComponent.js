import React from "react";
import { Col, Card } from 'antd';
const { Meta } = Card;

const SingleNews = ({news}) => {
  return(
    <Col span={{md:6,sm:12,xs:24}} style={{margin:"0 10px 10px 10px"}}>
      <a href={news.url} target="_blank" rel="noopener noreferrer">
        <Card 
          hoverable 
          cover={<img src={news.urlToImage} style={{borderRadius:'30px'}} alt={news.title}/>}  
          bordered 
          style={{width:"280px", background:'#f0f2f5', borderRadius:'30px'}}
        >
          <Meta title={news.title} description={news.description} />
        </Card>
      </a>
    </Col>
  )
}

export default SingleNews