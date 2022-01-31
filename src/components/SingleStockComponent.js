import React from 'react';
import {useGetStockQuery, useGetCommentsQuery, useGetChartQuery} from '../services/stocks';
import Loading from './LoadingComponent';
import {useParams, Link} from 'react-router-dom';
import { Typography, Divider, Row, Col, Breadcrumb } from 'antd';
import { Line } from 'react-chartjs-2';
import Error from './ErrorComponent';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);


const { Title, Paragraph} = Typography;

function SingleStock(){
  const { symbol } = useParams()
  const { data : stock, isLoading, isSuccess, isError, error } = useGetStockQuery(symbol)
  const { data : comments, isLoading: commentsisLoading} = useGetCommentsQuery(symbol)
  const { data : chartStock, isLoading: chartisLoading} = useGetChartQuery(symbol)

  if(chartisLoading){
    <Loading />
  }
  console.log(chartStock?.[symbol].timestamp);

  // const dataChart = {
  //   labels: chartStock?.[symbol].timestamp,
  //   datasets: [{
  //     label: `Price in $`,
  //     data: chartStock?.[symbol].close
  //   }]
  // }
const options = {
  responsive: true,
  scales: {
    yAxes:[{
      ticks:{beginAtZero:true}
    }]
  }
}

    const dataChart= {
    labels: [1635773400,
      1635859800,
      1635946200,
      1636032600,
      1636119000,
      1636381800,
      1636468200,
      1636554600,
      1636641000,
      1636727400,
      1636986600,
      1637073000,
      1637159400,
      1637245800,
      1637332200,
      1637591400,
      1637677800,
      1637764200,
      1637937000,
      1638196200,
      1638282600,
      1638369000,
      1638455400,
      1638541800,
      1638801000,
      1638887400,
      1638973800,
      1639060200,
      1639146600,
      1639405800,
      1639492200,
      1639578600,
      1639665000,
      1639751400,
      1640010600,
      1640097000,
      1640183400,
      1640269800,
      1640615400,
      1640701800,
      1640788200,
      1640874600,
      1640961000,
      1641220200,
      1641306600,
      1641393000,
      1641479400,
      1641565800,
      1641825000,
      1641911400,
      1641997800,
      1642084200,
      1642170600,
      1642516200,
      1642602600,
      1642689000,
      1642775400,
      1643034600,
      1643121000,
      1643207400,
      1643293800,
      1643380200,
      1643642164],
    datasets: [{
      label: `Price in $`,
      fill: false,
      data: [148.96,
      150.02,
      151.49,
      150.96,
      151.28,
      150.44,
      150.81,
      147.92,
      147.87,
      149.99,
      150,
      151,
      153.49,
      157.87,
      160.55,
      161.02,
      161.41,
      161.94,
      156.81,
      160.24,
      165.3,
      164.77,
      163.76,
      161.84,
      165.32,
      171.18,
      175.08,
      174.56,
      179.45,
      175.74,
      174.33,
      179.3,
      172.26,
      171.14,
      169.75,
      172.99,
      175.64,
      176.28,
      180.33,
      179.29,
      179.38,
      178.2,
      177.57,
      182.01,
      179.7,
      174.92,
      172,
      172.17,
      172.19,
      175.08,
      175.53,
      172.19,
      173.07,
      169.8,
      166.23,
      164.51,
      162.41,
      161.62,
      159.78,
      159.69,
      159.22,
      170.33,
      173.05]
    }]
  }
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
      <Line data={dataChart} options={options}/>
      {content}
    </div>
  );
}

export default SingleStock
