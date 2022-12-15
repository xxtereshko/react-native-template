import { THEME_SPACING } from '../constants'

export const lightTheme = {
  name: 'light',
  palette: {
    background: {
      primary: '#fafafa',
    },
    text: {
      primary: '#111',
      secondary: '#676767',
    },
  },
  typography: {
    body15Regular: {
      size: '15px',
      lineHeight: '20px',
      letterSpacing: '-0.24px',
      fontFamily: 'INTER_REGULAR',
    },
    title: {
      size: '20px',
      lineHeight: '26px',
      letterSpacing: '-0.24px',
      fontFamily: 'INTER_MEDIUM',
    },
  },
  spacing: (multiplier: number) => THEME_SPACING * multiplier,
}
