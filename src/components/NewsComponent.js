import React from 'react';
import {useGetNewsQuery} from '../services/news';
import { Typography, Row} from 'antd';
import Error from './ErrorComponent'
import Loading from './LoadingComponent';
import SingleNews from './SingleNewsComponent'

const { Title} = Typography;

function News(){
  const {data, isLoading, isError, error} = useGetNewsQuery()
  const news = data?.articles.map((news) => {
    if(news.description==null) return;
      return(<SingleNews news={news} />);
  })
  return(
    <div className='container'>
      <Title>News</Title>
      { isLoading ? <Loading /> : <Row justify="space-around">{news}</Row>}
      { isError ? <Error error={error}/>: <div></div>}
    </div>
  );
}

export default News
