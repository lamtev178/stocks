import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const apiHeaders = {
  'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
  'x-rapidapi-key': '2f5e899c15msh6d2f31db16ac4b1p17ada5jsn4e3877e42070'
}

const baseUrl = 'https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=AMD%2CIBM%2CAAPL%2CTSLA%2CMSFT%2CFB%2CNVDA%2CGOOGL'
const createRequest = (url) => ({url , headers: apiHeaders})

export const stocksApi = createApi({
  reducerPath: 'stocksApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getStocks: builder.query({
      query: () => createRequest('')
    })
  })
})

export const { useGetStocksQuery } = stocksApi
