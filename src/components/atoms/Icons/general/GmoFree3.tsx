import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgGmoFree3 = (props: SvgIconProps) => {
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
        d="m14.84 15.84 2.817 2.817A8 8 0 0 0 7.613 6.309M8.645 9.645 6.343 7.343a8 8 0 0 0 10.044 12.348"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.516 15.064c.927 0 1.678-.808 1.678-1.806s-.751-1.806-1.678-1.806c-.926 0-1.677.808-1.677 1.806s.75 1.806 1.677 1.806ZM10.452 15.064v-3.613L12 13l1.548-1.549v3.613M8.776 12.129a1.622 1.622 0 0 0-1.302-.678c-.92 0-1.668.81-1.668 1.807 0 .997.747 1.806 1.668 1.806.607 0 1.138-.35 1.43-.875"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.903 15.065v-1.549H7.871"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}
export default SvgGmoFree3
