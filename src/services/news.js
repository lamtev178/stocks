import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const apiKey = '465b16ace9f1479e90fc6a894df0067b'


const baseUrl = 'https://newsapi.org/v2/'


export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getNews: builder.query({
      query: () => `top-headlines?country=us&apiKey=${apiKey}`
    }),
    getSymbolNews: builder.query({
      query: (symbol) => `everything?q=${symbol}&from=2022-02-8&sortBy=popularity&apiKey=${apiKey}`
    })
  })
})

export const { useGetNewsQuery, useGetSymbolNewsQuery } = newsApi