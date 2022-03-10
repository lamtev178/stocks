import React from 'react';
import { Link } from 'react-router-dom';
import {Col, Card} from 'antd';


function Stock({stock, range}){
    let colorStock = "green";
    let rangeStock = 'regular';
    let stockName = null;
    if(stock.symbol === "FB"){
      stockName = `https://api.twelvedata.com/logo/Meta.com`
    }  
    if(stock.symbol === "PM"){
      stockName = `https://api.twelvedata.com/logo/pmi.com`
    }  
    if(stock.symbol === "MCD"){
      stockName = `https://api.twelvedata.com/logo/McDonalds.com`
    }
    if(stock.symbol === "F"){
      stockName = `https://api.twelvedata.com/logo/Ford.com`
    } 
    if(stockName === null)
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
    } else {if(range === 'twoHundredDay' ||  range === 'fiftyDay')
      rangeStock = range + "Average";}
    if(stock[rangeStock+"ChangePercent"] < 0) colorStock = 'red';
    return(
        <Col span={{md:6,sm:12,xs:24}} style={{margin:"0 10px 10px 10px"}} >
          <Link to={`/stocksList/${stock.symbol.toUpperCase()}`}>
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
}

export default Stock