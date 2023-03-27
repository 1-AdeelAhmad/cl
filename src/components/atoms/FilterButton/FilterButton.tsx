import React from 'react'
import { StyledFilterButton } from './FilterButton.style'
import { ButtonProps } from '../Button/Button'

export interface FilterButtonProps extends ButtonProps {}

function FilterButton(props: FilterButtonProps) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { children, variant = 'contained', color, ...rest } = props
  return (
    <StyledFilterButton color="primary" variant={variant} {...rest}>
      {children}
    </StyledFilterButton>
  )
}

export default FilterButton
