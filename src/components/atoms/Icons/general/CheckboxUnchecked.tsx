import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgCheckboxUnchecked = (props: SvgIconProps) => {
  const { ...other } = props
  return (
    <SvgIcon
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <rect
        x={4.4}
        y={4.4}
        width={15.2}
        height={15.2}
        rx={0.6}
        stroke="currentColor"
        strokeWidth={0.8}
      />
    </SvgIcon>
  )
}
export default SvgCheckboxUnchecked
