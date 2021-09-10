import React from 'react';
import Header from '../components/layout/Header';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Header/>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
