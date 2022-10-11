import Head from 'next/head'
import Header from '../../components/Header'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../styles/theme'
import GlobalStyles from '../../styles/globalStyles'
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";




function MyApp({ Component, pageProps }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Head>
          <title>Guilherme | dev</title>
        </Head>
        <Header />
        <div className="container">
          <button className="accent"
            onClick={() => setIsDarkTheme(!isDarkTheme)}>
            {isDarkTheme ? <CgSun size={25} /> : <HiMoon size={25} />}
          </button>
        </div >
        <Component {...pageProps} />
      </ThemeProvider>


    </>
  )
}

export default MyApp

