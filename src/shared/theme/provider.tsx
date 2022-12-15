import { ThemeProvider as Provider } from 'styled-components'
import { lightTheme } from './variants'

type TThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: TThemeProviderProps) => {
  return <Provider theme={lightTheme}>{children}</Provider>
}
