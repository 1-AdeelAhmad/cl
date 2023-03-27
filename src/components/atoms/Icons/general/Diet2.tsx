import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgDiet2 = (props: SvgIconProps) => {
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
        d="M10.687 16.094 10.45 20M10.967 10.967v2.065M13.032 11.484v1.548M11.742 16.376a3.11 3.11 0 0 1-2.839-3.087v-2.58M15.096 11.742v1.548a3.103 3.103 0 0 1-1.784 2.799L13.549 20M17.086 7.51c.062-.287.274-.577.498-.815.578-.613.561-1.557-.077-2.115a2.402 2.402 0 0 0-2.057-.53L4.956 6.17c-.54.108-.951.542-.956 1.056v.024c.006.512.414.943.951 1.052l10.498 2.128c1.43.29 2.78-.724 2.78-2.084l.025-.408L20 8.405c-.523-1.138 0-2.323 0-2.323l-1.032.258M7.612 6.838v.517M10.967 6.322v1.033M14.064 5.806v1.549"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}
export default SvgDiet2
