import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgTick2 = (props: SvgIconProps) => {
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
        d="M9.595 19.71a.458.458 0 0 1-.378-.2l-4.57-6.642a.459.459 0 0 1 .754-.52l4.194 6.094 10-14.532a.458.458 0 1 1 .756.52L9.97 19.512a.46.46 0 0 1-.377.199v-.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgTick2
