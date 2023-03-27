import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgSelectionEmpty = (props: SvgIconProps) => {
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
        d="M19.718 11.71c0-4.41-3.588-8-8-8-4.411 0-7.998 3.59-7.998 8s3.588 8 8 8c4.41 0 7.999-3.588 7.999-8h-.001Zm-.755 0c0 3.994-3.25 7.244-7.245 7.244a7.252 7.252 0 0 1-7.244-7.245c0-3.995 3.25-7.243 7.245-7.243a7.252 7.252 0 0 1 7.245 7.244h-.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgSelectionEmpty
