import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgOrganicLabel1 = (props: SvgIconProps) => {
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
        d="m9.007 7.097-.91 1.806v10.065c0 .57.461 1.032 1.031 1.032h9.807c.57 0 1.032-.462 1.032-1.032V8.903L16.87 4h-5.677l-.516.731"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.032 7.871a1.032 1.032 0 1 0 0-2.065 1.032 1.032 0 0 0 0 2.065Z"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinejoin="round"
      />
      <path
        d="M6.76 9.301C5.694 8.951 5 8.381 5 7.737c0-1.066 1.906-1.93 4.258-1.93 2.352 0 4.258.864 4.258 1.93M10.677 17.936c.53-1.861 1.81-3.818 3.355-4.904"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.483 17.161c1.43.371 3.474-.324 4.097-1.731.6-1.357-.146-2.828.548-4.204.096-.191.402-.846.775-1.032-2.063.137-4.53.459-6.194 1.806-1.585 1.283-1.707 2.966-.774 4.645l.115.24"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}
export default SvgOrganicLabel1
