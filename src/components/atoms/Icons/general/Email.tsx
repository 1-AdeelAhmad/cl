import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgEmail = (props: SvgIconProps) => {
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
        d="M19.312 6.14H5.327c-.556 0-1.007.536-1.007 1.195v8.744c0 .659.451 1.195 1.007 1.195h13.986c.556 0 1.007-.537 1.007-1.195V7.335c0-.659-.451-1.195-1.006-1.195h-.002Zm-.512.754-6.687 4.935c-.054.041-.104.04-.158-.005L5.79 6.894h13.011Zm.765 9.185c0 .248-.136.441-.252.441H5.328c-.117 0-.252-.193-.252-.441V7.335c0-.015.002-.03.003-.044l6.406 5.123c.167.134.36.2.554.2a.876.876 0 0 0 .524-.178l7-5.166a.606.606 0 0 1 .004.065v8.744Zm-1.833-.522h-2.36a.377.377 0 1 1 0-.755h2.44c.002-.064.002-.143.002-.22v-1.959a.377.377 0 1 1 .755 0v1.959c0 .37 0 .576-.136.752-.171.222-.416.222-.701.222Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgEmail
