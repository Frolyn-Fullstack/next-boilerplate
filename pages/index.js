// Dependencies
import React from 'react'

// Components
import Head from 'next/head'
import Banner from '../components/home/Banner'


export default function Home() {
  return (
    <div className='page-home'>
      <Head><title>Home</title></Head>
      <Banner />
    </div>
  )
}
