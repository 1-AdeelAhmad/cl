import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

const IconWrapper = ({ children }: SvgIconProps) => {
  return <SvgIcon>{children}</SvgIcon>
}

export default IconWrapper
