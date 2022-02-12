import {configureStore} from '@reduxjs/toolkit';
import {stocksApi} from '../services/stocks';
import {newsApi} from '../services/news';

export default configureStore({
  reducer: {
    [stocksApi.reducerPath] : stocksApi.reducer,
    [newsApi.reducerPath] : newsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(stocksApi.middleware),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(newsApi.middleware)
})
