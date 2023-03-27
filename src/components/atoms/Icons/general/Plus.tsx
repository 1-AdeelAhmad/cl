import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgPlus = (props: SvgIconProps) => {
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
        d="M15.821 11.612a.388.388 0 0 1-.387.387h-3.275v3.275a.388.388 0 0 1-.775 0V12H8.11a.388.388 0 0 1 0-.774h3.275V7.95a.388.388 0 0 1 .775 0v3.275h3.275c.213 0 .387.173.387.387Zm-3.677 5.736a.388.388 0 0 0-.387-.387 5.213 5.213 0 0 1-4.918-3.492.388.388 0 0 0-.732.256 5.988 5.988 0 0 0 5.65 4.012.388.388 0 0 0 .387-.388Zm7.574-5.639c0-4.41-3.588-7.999-8-7.999-4.411 0-7.998 3.59-7.998 8s3.588 8 8 8c4.41 0 7.999-3.588 7.999-8h-.001Zm-.755 0c0 3.995-3.25 7.245-7.245 7.245a7.252 7.252 0 0 1-7.244-7.245c0-3.995 3.251-7.243 7.245-7.243 3.995 0 7.245 3.25 7.245 7.244h-.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgPlus
