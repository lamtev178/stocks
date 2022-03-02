import React from 'react';
import {useGetStockQuery, useGetCommentsQuery} from '../services/stocks';
import {useGetSymbolNewsQuery} from '../services/news';
import Loading from './LoadingComponent';
import StockInfo from './StockInfoComponent';
import {useParams, Link} from 'react-router-dom';
import { Typography, Divider, Row, Col, Breadcrumb, Card } from 'antd';

import Error from './ErrorComponent';


const { Title, Paragraph} = Typography;
const { Meta } = Card;

function SingleStock(){
  const { symbol } = useParams()
  const { data : stock, isLoading, isSuccess, isError, error } = useGetStockQuery(symbol)
  const { data : comments, isSuccess : commentsSuccess,} = useGetCommentsQuery(symbol)
  const { data : StockNews, isLoading :  newsIsLoading,  isSuccess : newsSuccess, isError : newsIsError, error : newsError} = useGetSymbolNewsQuery(symbol)


  const stocksComments = comments?.finance.result.reports.map(comment => {
    return(
      <section key={comment.id}>
        <Title  level={4} style={{textAlign:'left'}}>{comment.title}</Title>
        <Paragraph><blockquote>{comment.summary}</blockquote></Paragraph>
        <Divider orientation='right'>{comment.publishedOn.slice(0,10)}</Divider>
      </section>
    );
  })
  let content
  if (isLoading) {
    content =<Loading />
  }
  if (isSuccess ) {
    content =(
      <section>
        <Typography >
          <Title level={3}>Comments : </Title>
          {stocksComments}
        </Typography>
      </section>
    );
  }
  if(isError){
    content = (
      <Row justify='center'>
        <Col span={8} style={{display: "flex", alignItems: "center"}}>
          <Title>{error.data.message}</Title>
        </Col>
        <Col span={8}>
          <Error />
        </Col>
      </Row>)
  }
  const newsContent = StockNews?.articles?.map((news) => {
    return(
          <Col span={{md:6,sm:12,xs:24}} style={{margin:"0 10px 10px 10px"}} key={news.url}>
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
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/stocks">Stocks</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{symbol}</Breadcrumb.Item>
      </Breadcrumb>
      <Title>{symbol}</Title>
      <StockInfo symbol={symbol} stock={stock}/>
      <Row>
        <Col span={12}>{content}</Col>
        <Col span={12}>{newsIsError ? <><Error /><h2>{newsError}</h2></> : <Row justify="space-around">{newsContent}</Row>}</Col>
      </Row>
      
    </div>
  );
}

export default SingleStock
