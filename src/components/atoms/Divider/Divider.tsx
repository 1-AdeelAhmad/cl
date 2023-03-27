import React from 'react'
import { DividerProps as MuiDividerProps } from '@mui/material'
import { StyledDivider } from './Divider.style'

export interface DividerProps {
  children?: MuiDividerProps['children']
  variant?: MuiDividerProps['variant']
  textAlign?: MuiDividerProps['textAlign']
}

function Divider(props: DividerProps) {
  return <StyledDivider {...props} />
}

export default Divider
