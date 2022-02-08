import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const apiHeaders = {
'X-API-KEY': 'Gs60evLgMs1oumgpFYfyn4jc2dVIodec1x0Bnjek',
}
let symbols = ['', 'IBM', 'AMD', 'AAPL', 'TSLA', 'MSFT', 'FB', 'NVDA', 'GOOGL', 'AMZN', 'JPM', 'GOOG', 'INTC', 'V', 'BA', 'KO', 'PM', 'NFLX', 'MCD', 'ADBE', 'PYPL', 'EBAY', 'F', 'BAC', 'XOM']
const CreacteUrl =  () => {
    let Url = 'v6/finance/quote?region=US&lang=en&symbols=';
    for(let symbol of symbols){
      Url = Url + symbol + '%2C';
    }
  return Url;
}

const baseUrl = 'https://yfapi.net/'
let Url = CreacteUrl()
const createRequest = (url) => ({url , headers: apiHeaders})

export const stocksApi = createApi({
  reducerPath: 'stocksApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getStocks: builder.query({
      query: () => createRequest(Url)
    }),
    getStock: builder.query({
      query: (stock) => createRequest("v6/finance/quote?region=US&lang=en&symbols=%2C" + stock)
    }),
    getComments: builder.query({
      query: (stock) => createRequest("ws/insights/v1/finance/insights?symbol=" + stock)
    }),
    getChart: builder.query({
      query: (stock) => createRequest("v8/finance/spark?interval=1d&range=3mo&symbols=" + stock)
    })
  })
})

export const { useGetStocksQuery, useGetStockQuery, useGetCommentsQuery, useGetChartQuery } = stocksApi
