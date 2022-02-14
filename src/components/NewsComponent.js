import React from 'react';
import {useGetNewsQuery} from '../services/news';
import { Typography, Card, Row, Col} from 'antd';
import Loading from './LoadingComponent';

const { Title} = Typography;
const { Meta } = Card;

function News(){
  const {data, isLoading} = useGetNewsQuery()
  const news = data?.articles.map((news) => {
    if(news.description==null) return;
      return(
          <Col span={{md:6,sm:12,xs:24}} style={{margin:"0 10px 10px 10px"}} key={news.publishedAt}>
            <a href={news.url} target="_blank">
              <Card 
                hoverable 
                cover={<img src={news.urlToImage} style={{borderRadius:'30px'}}/>}  
                bordered 
                style={{width:"280px", background:'#f0f2f5', borderRadius:'30px'}}
              >
                <Meta title={news.title} description={news.description} />
              </Card>
            </a>
          </Col>
      );
  })
  return(
    <div className='container'>
      <Title>News</Title>
      { isLoading ? <Loading /> : <Row justify="space-around">{news}</Row>}
    </div>
  );
}

export default News
