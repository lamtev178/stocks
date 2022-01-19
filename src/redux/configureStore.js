import {configureStore} from '@reduxjs/toolkit';
import {stocksApi} from '../services/stocks'

export default configureStore({
  reducer: {
    [stocksApi.reducerPath] : stocksApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(stocksApi.middleware)
})
