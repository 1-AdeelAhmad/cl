import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgTick = (props: SvgIconProps) => {
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
        d="M11.435 14.126a.362.362 0 0 1-.256-.106l-3.016-3.016a.36.36 0 1 1 .51-.51l2.76 2.76 7.95-7.949a.36.36 0 1 1 .511.51l-8.203 8.204a.36.36 0 0 1-.256.105v.002Zm7.433-1.691a.361.361 0 0 0-.722 0 6.72 6.72 0 0 1-6.712 6.712 6.72 6.72 0 0 1-6.712-6.712 6.72 6.72 0 0 1 6.712-6.713.361.361 0 0 0 0-.722C7.334 5 4 8.335 4 12.434s3.335 7.434 7.434 7.434 7.434-3.335 7.434-7.434Zm-7.025 5.22c0-.199-.162-.36-.36-.36a4.858 4.858 0 0 1-4.585-3.255.36.36 0 1 0-.681.238 5.58 5.58 0 0 0 5.265 3.74c.2 0 .361-.163.361-.362Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgTick
