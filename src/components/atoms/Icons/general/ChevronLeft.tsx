import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgChevronLeft = (props: SvgIconProps) => {
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
        d="M16.022 3.922a.387.387 0 0 1 .275.662l-7.338 7.338 7.338 7.338a.387.387 0 1 1-.55.548l-7.61-7.61a.388.388 0 0 1 0-.55l7.61-7.611a.388.388 0 0 1 .276-.113l-.001-.002Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgChevronLeft
