import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgCheckbox = (props: SvgIconProps) => {
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
      <path
        d="m16.505 9.28-5 6c-.184.222-.768.86-.768.86s-.542-.611-.737-.824l-3-3.273 1.474-1.351 2.227 2.43L14.97 8l1.536 1.28Z"
        fill="#fff"
      />
    </SvgIcon>
  )
}
export default SvgCheckbox
