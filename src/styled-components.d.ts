import { TTheme } from '@shared/theme'

declare module 'styled-components/native' {
  export interface DefaultTheme extends TTheme {}
}
