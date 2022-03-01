import React from 'react';
import { Divider, Row, Col} from 'antd';
import { Line } from 'react-chartjs-2';
import {useGetChartQuery} from '../services/stocks';
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


function StockInfo({stock, symbol}){ 
  const { data : chartStock, isSuccess : chartSuccess,} = useGetChartQuery(symbol)
  const chartDates = chartStock?.[symbol].timestamp.map((date) => {
    return(new Date(date * 1000).toLocaleDateString())
  })
  const dataChart = {
    labels: chartDates,
    datasets: [{
      label: `Price in $`,
      data: chartStock?.[symbol].close,
      borderColor: '#000',
      backgroundColor: '#000'
    }]
  }
  const options = {
    responsive: true,
    layout: {
      padding: 40
      }
  }
      return(
      <Row>
        <Col span={6}>
          <div className='stock-info'>
            <span>Price</span><span>{stock?.quoteResponse?.result[0]?.regularMarketPrice.toFixed(2)}$</span>
          </div>
          <Divider />
          <div className='stock-info'>
            <span>Analyst Rating</span><span>{stock?.quoteResponse?.result[0]?.averageAnalystRating}</span>
          </div>
          <Divider />
          <div className='stock-info'>
            <span>Fifty Day Average</span><span>{stock?.quoteResponse?.result[0]?.fiftyDayAverage.toFixed(2)}$</span>
          </div>
          <Divider />
          <div className='stock-info'>
            <span>Fifty Day Average Change</span><span>{stock?.quoteResponse?.result[0]?.fiftyDayAverageChange.toFixed(2)}$</span>
          </div>
          <Divider />
          <div className='stock-info'>
            <span>Fifty Day Average Change Percent</span><span>{stock?.quoteResponse?.result[0]?.fiftyDayAverageChangePercent.toFixed(2)}$</span>
          </div>
          <Divider />
        </Col>
        <Col span={18}>
          <Line data={dataChart} options={options}/>
        </Col>
      </Row>
      );
}
export default StockInfo