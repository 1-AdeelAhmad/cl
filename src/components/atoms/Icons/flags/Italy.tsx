import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgItaly = (props: SvgIconProps) => {
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
      <mask
        id="italy_svg__a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={4}
        y={6}
        width={16}
        height={12}
      >
        <path fill="#fff" d="M4 6h16v12H4z" />
      </mask>
      <g mask="url(#italy_svg__a)" fillRule="evenodd" clipRule="evenodd">
        <path d="M15 6h5v12h-5V6Z" fill="#C51918" />
        <path d="M4 6h6v12H4V6Z" fill="#5EAA22" />
        <path d="M9 6h6v12H9V6Z" fill="#fff" />
      </g>
    </SvgIcon>
  )
}
export default SvgItaly
