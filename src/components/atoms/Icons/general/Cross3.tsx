import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgCross3 = (props: SvgIconProps) => {
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
        d="M14.55 8.74a.388.388 0 0 1 0 .548l-2.315 2.316 2.315 2.316a.388.388 0 0 1-.547.547l-2.316-2.315-2.316 2.315a.388.388 0 0 1-.547-.547l2.315-2.316-2.315-2.316a.388.388 0 0 1 .547-.547l2.316 2.315 2.316-2.315a.388.388 0 0 1 .547 0Zm2.825-2.686c-3.119-3.119-8.194-3.12-11.313 0-3.12 3.12-3.117 8.194.001 11.313 3.119 3.118 8.194 3.12 11.313 0 3.12-3.12 3.12-8.194 0-11.313h-.001Zm-.534.534c2.824 2.824 2.825 7.42 0 10.245a7.252 7.252 0 0 1-10.245 0c-2.826-2.825-2.823-7.421.001-10.245 2.824-2.825 7.42-2.825 10.246 0h-.002Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgCross3
