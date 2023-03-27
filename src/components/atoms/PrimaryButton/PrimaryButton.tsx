import React from 'react'
import { StyledPrimaryButton } from './PrimaryButton.style'
import { ButtonProps } from '../Button/Button'

export interface PrimaryButtonProps extends ButtonProps {}

function PrimaryButton(props: PrimaryButtonProps) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { children, variant = 'contained', color, ...rest } = props
  return (
    <StyledPrimaryButton color="primary" variant={variant} {...rest}>
      {children}
    </StyledPrimaryButton>
  )
}

export default PrimaryButton
