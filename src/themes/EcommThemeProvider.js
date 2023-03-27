import { useDispatch, useSelector } from 'react-redux'
import { THEME_MODE_TOGGLE_ACTION } from '../redux/actions/theme'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import VdThemes from './VisionDirect/themes'
import { createContext } from 'react'
import { themeModeSelector } from '../redux/selectors/theme'

const baseThemes = {
  VisionDirect: VdThemes,
}

const getTheme = (theme) => {
  //TODO decomment this line once BE store name is set
  //const themes = baseThemes[process.env.REACT_APP_STORENAME]
  const themes = baseThemes['VisionDirect']
  // Return the specified theme or the first available
  if (themes[theme]) {
    return themes[theme]
  } else {
    return themes[Object.keys(themes)[0]]
  }
}

export const ThemeContext = createContext({
  currentTheme: 'light',
  setTheme: null,
})

const EcommThemeProvider = (props) => {
  const dispatch = useDispatch()
  const { children } = props
  const themeMode = useSelector(themeModeSelector)
  const theme = getTheme(themeMode)
  const setThemeName = (name) => {
    dispatch(THEME_MODE_TOGGLE_ACTION(name))
  }

  const contextValue = {
    currentTheme: themeMode,
    setTheme: setThemeName,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default EcommThemeProvider
