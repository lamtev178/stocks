import React from 'react';
import {useGetStocksQuery} from '../services/stocks';
import {Input, Card, Row, Col, Space} from 'antd';
import Loading from './LoadingComponent';

const { Search } = Input;
const onSearch = search => console.log(search);

function Stocks(){
  const {data, isLoading} = useGetStocksQuery();

  const stock = data?.quoteResponse.result.map((stock) => {
    let colorStock = 'green';
    if(stock.regularMarketChangePercent < 0) colorStock = 'red';
    return(
        <Col span={{md:6,sm:12,xs:24}} style={{margin:"0 10px 10px 10px"}}>
          <Card hoverable title={stock.shortName} key={stock.averageDailyVolume10Day} >
            <p>Name: {stock.symbol}</p>
            <p>Price: {stock.preMarketPrice}$</p>
            <p style={{color:`${colorStock}`}}>Price Change Percent: {stock.regularMarketChangePercent.toFixed(2)}%</p>
            <p style={{color:`${colorStock}`}}>Price Change : {stock.regularMarketChange.toFixed(2)}$</p>
          </Card>
          </Col>
    );
  })
  return(
    <div style={{background:"#434343"}}>
        <h1 style={{color:"white", fontSize:"30px"}}>Stocks</h1>
        { isLoading ? <Loading /> : <Row justify="center">{stock}</Row>}

    </div>
  );
}

export default Stocks
