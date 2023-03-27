
import React from 'react'
import PropTypes from 'prop-types'
import { StylesProvider } from '@mui/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
//import { ThemeProvider as EmotionThemeProvider } from 'storybook-addon-emotion-theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
const ThemeProvider = ({ theme, children }) => {
  const nextTheme = Object.assign({}, theme)

  return (
    <StylesProvider injectFirst>
      <StyledThemeProvider theme={nextTheme}>
        <MUIThemeProvider theme={nextTheme}>
         {/* <EmotionThemeProvider theme={nextTheme}>*/}
            <CssBaseline />
            {children}
     {/*     </EmotionThemeProvider>*/}
        </MUIThemeProvider>
      </StyledThemeProvider>
    </StylesProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  theme: PropTypes.object.isRequired,
}

export default ThemeProvider
