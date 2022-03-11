import React from 'react';
import {useGetStockQuery} from '../services/stocks';
import {useGetSymbolNewsQuery} from '../services/news';
import Loading from './LoadingComponent';
import StockInfo from './StockInfoComponent';
import Error from './ErrorComponent'
import Comments from './CommentsComponent';
import SingleNews from './SingleNewsComponent';
import {useParams, Link} from 'react-router-dom';
import { Typography, Row, Col, Breadcrumb } from 'antd';
const { Title} = Typography;

function SingleStock(){
  const { symbol } = useParams()
  const { data : stock, isLoading, isError, error } = useGetStockQuery(symbol)
  const { data : stockNews, isError : newsIsError, error : newsError} = useGetSymbolNewsQuery(symbol)

  const newsContent = stockNews?.articles?.map((news) => {
    return(<SingleNews news = {news} key={news.url}/>  );})

  return(
    <div className='container'>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/stocksList">Stocks</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{symbol}</Breadcrumb.Item>
      </Breadcrumb>
      <Title>{symbol}</Title>
      <StockInfo stock={stock}/> 
      <Row>
        <Col span={12}>{isLoading ? <Loading /> : <div><Comments symbol={symbol}/></div>}</Col>
        {isError ? <Col span={12}><Error error={error}/></Col> : <div></div>}
        <Col span={12}>{newsIsError ? <Error error={newsError}/> : <Row justify="space-around">{newsContent}</Row>}</Col>
      </Row>
      
    </div>
  );
}

export default SingleStock
