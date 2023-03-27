import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgMinus = (props: SvgIconProps) => {
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
        d="M15.434 12H8.109a.388.388 0 0 1 0-.775h7.325a.388.388 0 0 1 0 .774Zm-3.29 5.348a.388.388 0 0 0-.387-.387 5.213 5.213 0 0 1-4.918-3.492.388.388 0 0 0-.732.256 5.988 5.988 0 0 0 5.65 4.012.388.388 0 0 0 .387-.388Zm7.574-5.638c0-4.41-3.588-8-8-8-4.411 0-7.998 3.59-7.998 8s3.588 8 8 8c4.41 0 7.999-3.588 7.999-8h-.001Zm-.755 0c0 3.994-3.25 7.244-7.245 7.244a7.252 7.252 0 0 1-7.244-7.245c0-3.995 3.25-7.243 7.245-7.243a7.252 7.252 0 0 1 7.245 7.245l-.001-.002Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgMinus
