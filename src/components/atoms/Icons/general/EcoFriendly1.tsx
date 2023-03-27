import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgEcoFriendly1 = (props: SvgIconProps) => {
  const { ...other } = props
  return (
    <SvgIcon
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path
        d="M18.967 8.065a8 8 0 1 1-3.354-3.205"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.129 16.645c.733-2.573 2.25-4.692 4.387-6.193"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.45 15.679c-1.396-2.356-1.156-5.006 1.035-6.78 2.3-1.864 5.598-2.386 8.451-2.576-.516.258-1.055 1.245-1.188 1.51-.96 1.903.03 4.02-.8 5.896-.862 1.947-3.518 2.913-5.496 2.4"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}
export default SvgEcoFriendly1
