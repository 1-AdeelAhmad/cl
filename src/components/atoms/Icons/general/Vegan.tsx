import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgVegan = (props: SvgIconProps) => {
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
        d="M5.806 8.613c-.258-2.065.795-3.139 2.29-3.475 1.785-.402 3.592.137 5.23.832-.171-.002-.343.06-.492.142-.626.352-1.086.924-1.452 1.53-.372.616-.634 1.297-1.223 1.75-.833.64-2.127.564-3.034.033"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.299 10.42A7.483 7.483 0 0 1 11.484 21 7.483 7.483 0 0 1 4 13.516 7.487 7.487 0 0 1 8.903 6.49"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.193 17.387c-.516-3.355-4.13-4.903-4.13-4.903S8.21 12.12 9.678 13"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.483 5c-10.264 7.624-9.29 12.387-9.29 12.387l2.322 1.29S12.74 11.158 19.483 5Z"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}
export default SvgVegan
