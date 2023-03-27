import styled from 'styled-components'

export const StyledBox = styled('div')<{
  variant: string
  withBorder: boolean
}>`
  background-color: ${({ theme, variant }) =>
    variant === 'light'
      ? theme.palette.neutral.tones[100]
      : theme.palette.background[1]};
  border: ${({ theme, withBorder }) =>
    withBorder ? '1px solid ' + theme.palette.outline : ''};
  border-radius: ${({ withBorder }) => (withBorder ? '8px' : '')};
  padding: ${({ withBorder, variant, theme }) =>
    withBorder || variant === 'dark' ? theme.spacing(8) : ''};
`
