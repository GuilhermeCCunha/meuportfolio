import Head from 'next/head'
import Header from '../../components/Header'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../styles/theme'
import GlobalStyles from '../../styles/globalStyles'
import ThemeButton from '../../components/ThemeButton'




function MyApp({ Component, pageProps }) {

  const [isDarkTheme, setIsDarkTheme] = useState(null)
  const [isbuttonOn, setIsbuttonOn] = useState()



  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, valor)
  }

  React.useEffect(() => {
    try {
      var local = JSON.parse(localStorage.getItem('ls_dark_theme'))
    }
    catch (e) {
      local = false
    }
    setIsDarkTheme(local)
    if (local === null) {
      setIsDarkTheme(false)
    }
  }, [])

  if (isDarkTheme === null) return null

  return (
    <>

      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Head>
          <title>Guilherme | dev</title>
        </Head>
        <Header />
        <div className="container">
          <ThemeButton isDarkTheme={isDarkTheme}
            onClick={() => { setIsbuttonOn(true); setIsDarkTheme(!isDarkTheme); armazenar('ls_dark_theme', !isDarkTheme); setTimeout(() => { setIsbuttonOn(false) }, 4250); }}>
          </ThemeButton>
        </div>
        {isbuttonOn &&
          <style jsx global>{`
            * {
                -webkit-transition: 0.25s;
                transition: 0.25s;
                -moz-transition: 4.25s;  
              }
          `}</style>}
        <Component {...pageProps} />
      </ThemeProvider>

    </>
  )
}

export default MyApp
