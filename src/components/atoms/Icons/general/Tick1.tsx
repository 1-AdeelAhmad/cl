import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgTick1 = (props: SvgIconProps) => {
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
        d="M11.434 14.125a.355.355 0 0 1-.254-.106l-3.017-3.017a.36.36 0 1 1 .51-.51l2.761 2.76 7.95-7.948a.36.36 0 1 1 .51.51l-8.205 8.205a.361.361 0 0 1-.255.106Zm7.435-1.69a.361.361 0 0 0-.722 0 6.72 6.72 0 0 1-6.713 6.712 6.72 6.72 0 0 1-6.712-6.713 6.72 6.72 0 0 1 6.712-6.712.361.361 0 0 0 0-.722C7.335 5 4 8.335 4 12.434c0 4.1 3.335 7.435 7.434 7.435 4.1 0 7.435-3.335 7.435-7.435Zm-7.025 5.22c0-.2-.162-.361-.361-.361a4.859 4.859 0 0 1-4.584-3.255.361.361 0 0 0-.682.239 5.581 5.581 0 0 0 5.266 3.739c.199 0 .36-.162.36-.361v-.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgTick1
