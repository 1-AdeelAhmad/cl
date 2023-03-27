import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgChevronUp = (props: SvgIconProps) => {
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
        d="M20.217 15.728a.387.387 0 0 1-.662.275l-7.338-7.338-7.337 7.338a.387.387 0 1 1-.55-.55l7.612-7.61a.388.388 0 0 1 .549 0l7.611 7.61a.388.388 0 0 1 .113.276l.002-.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgChevronUp
