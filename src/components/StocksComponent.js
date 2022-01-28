import React, {useState} from 'react';
import {useGetStocksQuery} from '../services/stocks';
import {Input, Card, Row, Col, Select, Layout} from 'antd';
import Loading from './LoadingComponent';
import { Link, useNavigate } from 'react-router-dom';

const { Option } = Select;
const {Sider, Content} = Layout;

const { Search } = Input;

function Stocks(){
  const {data, isLoading} = useGetStocksQuery();
  const [range, setRange] = useState('regular');
  const [searchStocks, setSearch] = useState("");
  const redirect = useNavigate()

  const handleSearch = value => {
    setSearch(value.toUpperCase());
    redirect(`/stocks/${value.toUpperCase()}`)
  }
  const stock = data?.quoteResponse.result.map((stock) => {
    let colorStock = "green";
    let rangeStock = 'regular';

    if(range == 'regular'){
      rangeStock = "regularMarket";
    } else {if(range == 'twoHundredDay' || 'fiftyDay')
      rangeStock = range + "Average";}
    if(stock[rangeStock+"ChangePercent"] < 0) colorStock = 'red';

      return(
          <Col span={{md:6,sm:12,xs:24}} style={{margin:"0 10px 10px 10px"}} key={stock.averageDailyVolume10Day}>
            <Card hoverable title={stock.shortName}  bordered>
              <p>Name: {stock.symbol}</p>
              <p>Price: {stock.regularMarketPrice}$</p>
              <p>Fifty TwoWeek Range: {stock.fiftyTwoWeekRange}</p>
              <p style={{color:`${colorStock}`}}>Price Change Percent: {stock[rangeStock + "ChangePercent"].toFixed(2)}%</p>
              <p style={{color:`${colorStock}`}}>Price Change : {stock[rangeStock + "Change"].toFixed(2)}$</p>
            </Card>
            </Col>
      );
  })

  return(
    <Layout>
      <Sider style={{background:"#bfbfbf"}}>
        <h3 style={{fontSize:"20px", margin:"5px 0 5px 0"}}>Select Range</h3>
        <Select value={range} onChange={setRange} style={{margin:"10px", width:"150px"}}>
          <Option value="regular">Regular</Option>
          <Option value="twoHundredDay">Two Hundred Day</Option>
          <Option value="fiftyDay">Fifty Day</Option>
        </Select>
        <h3 style={{fontSize:"20px", margin:"5px 0 5px 0"}}>Search symbol</h3>
        <Search style={{margin:"10px", width:"150px"}} onSearch={handleSearch} type="text" enterButton placeholder="input search"/>
      </Sider>
      <Content>
        <h1 style={{fontSize:"30px"}}>Stocks</h1>
        { isLoading ? <Loading /> : <Row justify="center">{stock}</Row>}
      </Content>
    </Layout>
  );
}

export default Stocks
