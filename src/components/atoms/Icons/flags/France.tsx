import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgFrance = (props: SvgIconProps) => {
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
        id="france_svg__a"
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
      <g mask="url(#france_svg__a)" fillRule="evenodd" clipRule="evenodd">
        <path d="M15 6h5v12h-5V6Z" fill="#F50100" />
        <path d="M4 6h6v12H4V6Z" fill="#2E42A5" />
        <path d="M9 6h6v12H9V6Z" fill="#F7FCFF" />
      </g>
    </SvgIcon>
  )
}
export default SvgFrance
