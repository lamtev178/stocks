import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const apiHeaders = {
  'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
  'x-rapidapi-key': '2f5e899c15msh6d2f31db16ac4b1p17ada5jsn4e3877e42070'
}
let symbols = ['', 'IBM', 'AMD', 'AAPL', 'TSLA', 'MSFT', 'FB', 'NVDA', 'GOOGL', 'AMZN', 'JPM', 'GOOG', 'INTC', 'V', 'BA', 'KO', 'PM', 'NFLX', 'MCD', 'ADBE', 'PYPL', 'EBAY', 'F']
const CreacteUrl =  () => {
    let Url = '';
    for(let symbol of symbols){
      Url = Url + symbol + '%20%2C';
    }
  return Url;
}
const baseUrl = 'https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols='
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
      query: (stock) => createRequest("C%20%2C"+stock)
    })
  })
})

export const { useGetStocksQuery, useGetStockQuery } = stocksApi
