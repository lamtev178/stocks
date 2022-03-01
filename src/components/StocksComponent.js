import React, {useState} from 'react';
import {useGetStocksQuery} from '../services/stocks';
import {Input, Row, Col, Select, Layout, Typography, Breadcrumb } from 'antd';
import Loading from './LoadingComponent';
import { Link, useNavigate } from 'react-router-dom';
import Error from './ErrorComponent';
import Stock from './StockComponent'
const { Title } = Typography;

const { Option } = Select;
const {Sider, Content} = Layout;

const { Search } = Input;

function Stocks(){
  const {data, isLoading, isError, error} = useGetStocksQuery();
  const [range, setRange] = useState('regular');
  const redirect = useNavigate()
  const handleSearch = value => {
    redirect(`/stocks/${value.toUpperCase()}`)
  }
  const stock = data?.quoteResponse.result.map((stock) => {
      return <Stock stock = {stock} range={range} key={stock.averageDailyVolume10Day}/>
  })

  return(
    <Layout>
      <Sider style={{background:"#bfbfbf"}}>
        <div style={{position: "sticky", top: "0", paddingTop:'20px'}}>
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
