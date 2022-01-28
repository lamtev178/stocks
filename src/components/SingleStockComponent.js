import React from 'react';
import {useGetStockQuery} from '../services/stocks';
import Loading from './LoadingComponent';
import {useParams} from 'react-router-dom';

function SingleStock(){
  const { symbol } = useParams()
  const { data : stock, isLoading, isSuccess } = useGetStockQuery(symbol)
  let content
  if (isLoading) {
    content =<Loading />} 
    else if (isSuccess) {
        content =(
          <section>
            <h2>{stock.quoteResponse.result[0].symbol}</h2>
            <h2>{stock.quoteResponse.result[0].regularMarketPrice}$</h2>
          </section>
        );
  }

  return(
    <>
      {content}
    </>
  );
}

export default SingleStock
