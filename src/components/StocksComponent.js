import React, {useState} from 'react';
import {useGetStocksQuery} from '../services/stocks';
import {Input, Card, Row, Col, Select, Layout, Typography, Breadcrumb } from 'antd';
import Loading from './LoadingComponent';
import { Link, useNavigate } from 'react-router-dom';
import Error from './ErrorComponent';
const { Title } = Typography;

const { Option } = Select;
const {Sider, Content} = Layout;

const { Search } = Input;

function Stocks(){
  const {data, isLoading, isError, error} = useGetStocksQuery();
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

    let stockName;
    if(stock.displayName === undefined){
      stockName = `https://api.twelvedata.com/logo/${stock.symbol}.com`
    } else 
    if ((stock.displayName?.includes(' ')) || (stock.displayName?.includes('.'))){
      stockName = `https://api.twelvedata.com/logo/${stock.symbol}.com`
    } else {
      stockName = `https://api.twelvedata.com/logo/${stock.displayName}.com`
    }

    if(range === 'regular'){
      rangeStock = "regularMarket";
    } else {if(range === 'twoHundredDay' || 'fiftyDay')
      rangeStock = range + "Average";}
    if(stock[rangeStock+"ChangePercent"] < 0) colorStock = 'red';
      return(
          <Col span={{md:6,sm:12,xs:24}} style={{margin:"0 10px 10px 10px"}} key={stock.averageDailyVolume10Day}>
            <Link to={`/stocks/${stock.symbol.toUpperCase()}`}>
              <Card 
                hoverable 
                title={stock.shortName}  
                bordered 
                style={{minWidth:"280px", borderRadius:'30px'}}
              >
                <img src={stockName} className="stocksCard" alt={stock.shortName}/>
                <p>Name: {stock.symbol}</p>
                <p>Price: {stock.regularMarketPrice.toFixed(2)}$</p>
                <p>{range === 'regular' ? 'Day Range : ' + stock.regularMarketDayRange : 'Fifty Two Week Range : ' + stock.fiftyTwoWeekRange}</p>
                <p style={{color:`${colorStock}`}}>Price Change Percent: {stock[rangeStock + "ChangePercent"].toFixed(2)}%</p>
                <p style={{color:`${colorStock}`}}>Price Change : {stock[rangeStock + "Change"].toFixed(2)}$</p>
              </Card>
            </Link>
            </Col>
      );
  })

  return(
    <Layout>
      <Sider style={{background:"#bfbfbf"}}>
        <div style={{position: "sticky", top: "0"}}>
        <Title level={4}>Select Range</Title>
        <Select value={range} onChange={setRange} style={{margin:"10px", width:"150px"}}>
          <Option value="regular">Regular</Option>
          <Option value="twoHundredDay">Two Hundred Day</Option>
          <Option value="fiftyDay">Fifty Day</Option>
        </Select>
        <Title level={4} >Search symbol</Title>
        <Search style={{margin:"10px", width:"150px"}} onSearch={handleSearch} type="text" enterButton placeholder="input search"/>
        </div>
      </Sider>
      <Content style={{padding:"40px"}}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Stocks</Breadcrumb.Item>
        </Breadcrumb>
        <Title>Stocks</Title>
        { isLoading ? <Loading /> : <Row justify="space-around">{stock}</Row>}
        { isError ? (      <Row justify='center'>
        <Col span={8} style={{display: "flex", alignItems: "center"}}>
          <Title>{error?.data.message}</Title>
        </Col>
        <Col span={8}>
          <Error />
        </Col>
      </Row>) : <></>}
      </Content>
    </Layout>
  );
}


export default Stocks
