import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgAddressHome = (props: SvgIconProps) => {
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
        d="M17.891 20.05H13.87a.388.388 0 0 1-.387-.387v-3.366c0-.808-.657-1.464-1.464-1.464-.807 0-1.465.657-1.465 1.464v3.366a.388.388 0 0 1-.387.387H5.983a.388.388 0 0 1-.388-.387v-8.035a.388.388 0 0 1 .775 0v7.647H9.78v-2.978a2.241 2.241 0 0 1 2.239-2.239 2.242 2.242 0 0 1 2.239 2.24v2.977h3.247v-7.647a.388.388 0 0 1 .774 0v8.035a.388.388 0 0 1-.387.387Zm1.934-8.972a.387.387 0 0 1-.546.044l-7.255-6.174-7.428 6.363a.388.388 0 0 1-.505-.589l1.503-1.288V6.405c0-.213.174-.387.388-.387h3.481c.036 0 .069.006.102.015l2.206-1.89a.387.387 0 0 1 .503 0l7.508 6.388a.387.387 0 0 1 .044.546h-.001ZM6.369 8.77l2.309-1.977H6.369V8.77Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgAddressHome
