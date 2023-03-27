import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgSalads1 = (props: SvgIconProps) => {
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
        d="M3 10.286c0 3.784 2.286 7.428 5.714 8.281v1.147c0 .158.128.286.286.286h5.714a.286.286 0 0 0 .286-.286v-1.147c3.429-.853 5.714-4.496 5.714-8.281H3ZM11.857 18.571H15M5 9.143a2.857 2.857 0 0 1 5.714 0M7.857 7.714V8M9.387 8.327l-.202.202M6.328 8.327l.202.202M15.132 5.714C16.966 5.098 19 5.143 19 5.143s.215 2.106-.286 4M9 4.857V4s4.286 0 6 1.714c1.191 1.192 1.236 2.527.857 3.429M11.286 6.571l2.571 2.572M13 6.571v1.715"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}
export default SvgSalads1
