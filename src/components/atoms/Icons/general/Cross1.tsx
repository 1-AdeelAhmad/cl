import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgCross1 = (props: SvgIconProps) => {
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
        d="M15.111 14.385a.388.388 0 1 1-.548.549l-2.32-2.32-2.32 2.32a.388.388 0 1 1-.547-.55l2.32-2.32-2.32-2.32a.388.388 0 1 1 .548-.548l2.32 2.32 2.32-2.32a.388.388 0 1 1 .55.549l-2.32 2.32 2.32 2.32h-.003ZM20.23 12.2a.389.389 0 0 0-.776 0c0 3.983-3.24 7.224-7.224 7.224-3.983 0-7.224-3.24-7.224-7.224 0-3.983 3.24-7.224 7.224-7.224a.389.389 0 0 0 0-.776c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8Zm-7.614 5.612a.389.389 0 0 0-.388-.388A5.223 5.223 0 0 1 7.3 13.926a.388.388 0 0 0-.733.256 6 6 0 0 0 5.66 4.02.389.389 0 0 0 .389-.389Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgCross1
