import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgTick3 = (props: SvgIconProps) => {
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
        d="M17.969 6.344c-3.119-3.118-8.194-3.119-11.313 0-3.12 3.12-3.117 8.195.001 11.313 3.119 3.119 8.194 3.12 11.313 0 3.12-3.12 3.12-8.193 0-11.313h-.001Zm-.534.534c2.824 2.824 2.825 7.42 0 10.245a7.252 7.252 0 0 1-10.246 0c-2.825-2.825-2.822-7.42.002-10.245 2.824-2.824 7.42-2.825 10.245 0h-.001Z"
        fill="currentColor"
      />
      <path
        d="M16.727 9.03a.388.388 0 0 1 0 .549l-5.18 5.179a.388.388 0 0 1-.547 0l-.29-.258-2.316-2.316a.388.388 0 0 1 .548-.547l2.316 2.315 4.921-4.921a.388.388 0 0 1 .548 0Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgTick3
