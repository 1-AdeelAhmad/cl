import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgChevronRight = (props: SvgIconProps) => {
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
        d="M8.411 19.922a.388.388 0 0 1-.275-.662l7.338-7.337-7.338-7.338a.388.388 0 1 1 .55-.549l7.61 7.612a.387.387 0 0 1 0 .549l-7.61 7.611a.388.388 0 0 1-.276.113l.001.002Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgChevronRight
