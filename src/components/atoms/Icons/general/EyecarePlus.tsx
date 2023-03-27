import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgEyecarePlus = (props: SvgIconProps) => {
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
        d="M17.63 11.699h-1.553a.333.333 0 0 1-.333-.333v-1.224h-1.29a.333.333 0 0 1-.333-.333V8.35c0-.184.15-.333.333-.333h1.29V6.923c0-.184.148-.333.333-.333h1.553c.184 0 .333.149.333.333v1.095h1.278c.185 0 .333.149.333.333V9.81a.333.333 0 0 1-.333.333h-1.278v1.224a.333.333 0 0 1-.333.333Zm-1.22-.666h.887V9.809c0-.184.149-.333.333-.333h1.278v-.792H17.63a.333.333 0 0 1-.333-.333V7.256h-.887v1.095a.333.333 0 0 1-.333.333h-1.29v.792h1.29c.184 0 .333.149.333.333v1.224Zm-4.655 3.875a2.676 2.676 0 0 1-2.673-2.674c0-1.475 1.199-2.674 2.673-2.674 1.475 0 2.674 1.2 2.674 2.674 0 1.475-1.2 2.674-2.674 2.674Zm0-4.57c-1.046 0-1.896.85-1.896 1.896 0 1.046.85 1.896 1.896 1.896 1.046 0 1.897-.85 1.897-1.896 0-1.046-.85-1.896-1.897-1.896Zm-.578 1.896a.58.58 0 0 1 .578-.579.39.39 0 0 0 0-.777c-.747 0-1.356.609-1.356 1.356a.39.39 0 0 0 .778 0Zm8.264.785a1.136 1.136 0 0 0-.014-1.585.388.388 0 1 0-.55.55.355.355 0 0 1 .005.495c-.127.131-3.153 3.217-7.327 3.217-2.461 0-4.79-1.08-6.922-3.212a.355.355 0 0 1-.004-.495c.127-.132 3.152-3.217 7.327-3.217a8 8 0 0 1 .813.041.389.389 0 0 0 .078-.773 8.886 8.886 0 0 0-.89-.044c-4.501 0-7.751 3.313-7.887 3.454a1.136 1.136 0 0 0 .015 1.585c2.283 2.282 4.797 3.44 7.471 3.44 4.5 0 7.75-3.314 7.886-3.455v-.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgEyecarePlus