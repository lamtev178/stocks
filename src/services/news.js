import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const apiKey = '465b16ace9f1479e90fc6a894df0067b'
let date = new Date()
let dateMonth, dateDay
if(date.getMonth()<11){
  dateMonth = '0'+(date.getMonth() + 1)
}

if(date.getDate()<19 && date.getDate()>9) {
  dateDay = '0' +(date.getDate() - 9)
  date = date.getFullYear()+'-'+ dateMonth +'-'+ dateDay
}else if(date.getDate()<9){
   date = date.getFullYear()+'-'+ (+dateMonth -1) +'-'+ '28'
} else {
 date = date.getFullYear()+'-'+ dateMonth +'-'+ dateDay
}
const baseUrl = 'https://newsapi.org/v2/'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getNews: builder.query({
      query: () => `top-headlines?country=us&apiKey=${apiKey}`
    }),
    getSymbolNews: builder.query({
      query: (symbol) => `everything?q=${symbol}&from=${date}&sortBy=popularity&apiKey=${apiKey}`
    })
  })
})

export const { useGetNewsQuery, useGetSymbolNewsQuery } = newsApi