import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgChevronDown = (props: SvgIconProps) => {
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
      <path
        d="M11.643 16.62a.39.39 0 0 1-.276-.113l-7.61-7.612a.388.388 0 1 1 .548-.549l7.338 7.338 7.337-7.338a.388.388 0 1 1 .549.55l-7.611 7.61a.388.388 0 0 1-.275.113v.002Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgChevronDown
