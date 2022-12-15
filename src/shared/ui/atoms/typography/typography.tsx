import { css, styled, TTypographyVariants } from '@shared/theme'

type TTypographyProps = {
  variant?: TTypographyVariants
}

export const Typography = styled.Text.attrs(() => ({
  allowFontScaling: false,
}))<TTypographyProps>`
  ${({ theme: { typography, palette }, variant = 'body15Regular' }) => css`
    font-family: ${typography[variant].fontFamily};
    letter-spacing: ${typography[variant].letterSpacing};
    line-height: ${typography[variant].lineHeight};
    font-size: ${typography[variant].size};
    color: ${palette.text.primary};
  `}
`
