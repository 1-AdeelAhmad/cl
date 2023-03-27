import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgSearch = (props: SvgIconProps) => {
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
        d="m19.756 19.315-5.198-5.197a6.082 6.082 0 0 0 1.525-4.031A6.113 6.113 0 0 0 9.977 3.98a6.113 6.113 0 0 0-6.107 6.107 6.113 6.113 0 0 0 6.107 6.106 6.078 6.078 0 0 0 4.03-1.526l5.198 5.198a.388.388 0 0 0 .551 0 .388.388 0 0 0 0-.55Zm-9.778-3.899a5.336 5.336 0 0 1-5.33-5.33c0-2.938 2.39-5.33 5.33-5.33 2.939 0 5.33 2.392 5.33 5.33 0 2.94-2.391 5.33-5.33 5.33Zm.388-9.05a.389.389 0 0 1-.388.389 3.336 3.336 0 0 0-3.332 3.332.389.389 0 0 1-.777 0 4.114 4.114 0 0 1 4.109-4.11c.214 0 .388.175.388.39Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgSearch
