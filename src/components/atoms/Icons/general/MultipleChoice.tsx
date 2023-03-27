import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgMultipleChoice = (props: SvgIconProps) => {
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
      <rect x={4} y={4} width={16} height={16} rx={1} fill="currentColor" />
      <path fill="#fff" d="M8 11h8v2H8z" />
    </SvgIcon>
  )
}
export default SvgMultipleChoice
