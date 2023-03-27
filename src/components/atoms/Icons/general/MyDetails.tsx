import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgMyDetails = (props: SvgIconProps) => {
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
        d="M11.81 4.776a2.863 2.863 0 0 1 2.86 2.86 2.863 2.863 0 0 1-2.86 2.86 2.863 2.863 0 0 1-2.86-2.86 2.863 2.863 0 0 1 2.86-2.86Zm0-.776a3.637 3.637 0 1 0 .002 7.274A3.637 3.637 0 0 0 11.81 4Zm7.81 15.612c0-4.307-3.504-7.81-7.81-7.81-4.306 0-7.81 3.503-7.81 7.81a.388.388 0 0 0 .776 0 7.042 7.042 0 0 1 7.034-7.034 7.042 7.042 0 0 1 7.035 7.034.388.388 0 0 0 .776 0ZM7.12 17.778a4.396 4.396 0 0 1 2.62-2.822.388.388 0 1 0-.278-.724 5.178 5.178 0 0 0-3.086 3.323.389.389 0 0 0 .744.224Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgMyDetails
