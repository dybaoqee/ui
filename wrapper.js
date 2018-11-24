import React from 'react'
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import GlobalStyles from '@emcasa/ui-dom/src/GlobalStyles'
import theme from '@emcasa/ui'

const GlobalDoczStyle = createGlobalStyle`
  * {
    font-family: 'FaktSoftPro-Normal';
    -webkit-font-smoothing: antialiased;
  }
`

/**
 * Docz Wrapper.
 */
const Wrapper = ({children}) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalDoczStyle />
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
)

export default Wrapper
