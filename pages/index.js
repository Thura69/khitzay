import React, { useState } from 'react'
import Head from 'next/head'
import MainPageHeader from '../components/main_page_components/main_page_header'
import MainPageBanner from '../components/main_page_components/main_page_banner'
import MainPageProducts from '../components/main_page_components/main_page_products'
import QuickView from '../components/quick_view'
import { adidas } from '../data/adidas_data'

function Index() {
  const [viewAdidas, setViewAdidas] = useState();
  const [viewClickCheck, setViewClickCheck] = useState(false);

  const handleQuickView = (adidas) => {
    setViewAdidas(adidas);
    setViewClickCheck(!viewClickCheck);
    document.querySelector('.wrapper').classList.add('active');
  }

  return (
    <div className='relative'>
      <Head>
        <title>khit zay clone</title>
           <link rel="icon" type="image/x-icon" href="/favicon.jpg" />
      </Head>
      <MainPageHeader />
      <MainPageBanner />
      <MainPageProducts data={adidas} handleQuickView={handleQuickView} />
      <QuickView viewAdidas={viewAdidas} setViewClickCheck={setViewClickCheck} viewClickCheck={viewClickCheck} />
    </div>
  )
}

export default Index
