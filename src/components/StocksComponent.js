import React, {useState} from 'react';
import {useGetStocksQuery} from '../services/stocks';
import { Row, Layout, Typography, Breadcrumb } from 'antd';
import Loading from './LoadingComponent';
import { Link, useNavigate } from 'react-router-dom';
import Error from './ErrorComponent';
import Stock from './StockComponent'
import MySider from './MySiderComponent';
const { Title } = Typography;

const {Content} = Layout;


function Stocks(){
  const {data, isLoading, isError, error} = useGetStocksQuery();
  const [range, setRange] = useState('regular');
  const redirect = useNavigate()
  const handleSearch = value => {
    redirect(`/stocksList/${value.toUpperCase()}`)
  }
  const stock = data?.quoteResponse.result.map((stock) => {
      return (<Stock stock = {stock} range={range} key={stock.averageDailyVolume10Day}/>);
  })

  return(
    <Layout>
      <MySider value={range} onChange={setRange} onSearch={handleSearch}/>
      <Content style={{padding:"30px"}}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Stocks</Breadcrumb.Item>
        </Breadcrumb>
        <Title>Stocks</Title>
        { isLoading ? <Loading /> : <Row justify="space-around">{stock}</Row>}
        { isError ? <Error error={error}/> : <div></div>}
      </Content>
    </Layout>
  );
}


export default Stocks
