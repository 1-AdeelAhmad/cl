import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgClear = (props: SvgIconProps) => {
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
        d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8Zm3.805 10.862-.943.943L12 12.943l-2.862 2.862-.943-.943L11.057 12 8.195 9.138l.943-.943L12 11.057l2.862-2.862.943.943L12.943 12l2.862 2.862Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgClear
