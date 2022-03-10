import React from "react";
import { Layout } from 'antd';
import {Routes, Route} from "react-router";
import Home from './HomeComponent';
import ContactUs from './ContactComponent';
import Stocks from './StocksComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import SingleStock from './SingleStockComponent';
import News from './NewsComponent';

function Main(){
  return(
    <Layout>
      <Header />
      <Layout>
        <Routes>
          <Route path="" element={<Home />}/>
          <Route path="stocksList" element={<Stocks />}/>
          <Route path="stocksList/:symbol" element={<SingleStock />} />
          <Route path="contactus" element={<ContactUs />}/>
          <Route path="news" element={<News />}/>
        </Routes>
      </Layout>
      <Footer />
    </Layout>
  );
}

export default Main;
