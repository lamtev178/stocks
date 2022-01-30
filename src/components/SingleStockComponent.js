import React from 'react';
import {useGetStockQuery, useGetCommentsQuery} from '../services/stocks';
import Loading from './LoadingComponent';
import {useParams, Link} from 'react-router-dom';
import { Typography, Divider, Row, Col, Breadcrumb } from 'antd';
import Error from './ErrorComponent'
const { Title, Paragraph} = Typography;

function SingleStock(){
  const { symbol } = useParams()
  const { data : stock, isLoading, isSuccess, isError, error } = useGetStockQuery(symbol)
  const { data : comments, isLoading: commentsisLoading} = useGetCommentsQuery(symbol)

  const stocksComments = comments?.finance.result.reports.map(comment => {
    return(
      <section key={comment.id}>
        <Title  level={4} style={{textAlign:'left'}}>{comment.title}</Title>
        <Paragraph><blockquote>{comment.summary}</blockquote></Paragraph>
        <Divider />
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
        <h2>Price : {stock.quoteResponse.result[0]?.regularMarketPrice}$</h2>
        <h2>Analyst Rating : {stock.quoteResponse.result[0]?.averageAnalystRating}</h2>
        <Typography >
          <Title level={3}>Comments : </Title>
          {commentsisLoading ? <Loading /> : stocksComments}
        </Typography>
      </section>
    );
  }
  if(isError){
    content = (
      <Row justify='center'>
        <Col span={8} style={{display: "flex", alignItems: "center"}}>
          <Title>{error?.data.message}</Title>
        </Col>
        <Col span={8}>
          <Error />
        </Col>
      </Row>)
  }

  return(
    <div style={{padding:"40px"}}>
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
      {content}
    </div>
  );
}

export default SingleStock
