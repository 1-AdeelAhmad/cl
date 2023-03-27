import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgDropdown = (props: SvgIconProps) => {
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
        d="M12.294 14.076a.675.675 0 0 1-.485-.202l-3.313-3.313A.686.686 0 0 1 8.98 9.39h6.63a.686.686 0 0 1 .484 1.17l-3.314 3.314a.687.687 0 0 1-.484.202h-.002Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgDropdown
