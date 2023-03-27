import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgCross = (props: SvgIconProps) => {
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
        d="m12.45 11.733 7.338-7.338a.386.386 0 1 0-.547-.548l-7.339 7.339-7.338-7.34a.387.387 0 1 0-.548.548l7.339 7.338-7.339 7.34a.387.387 0 0 0 .274.66c.1 0 .198-.037.275-.112l7.338-7.339 7.34 7.339a.386.386 0 1 0 .546-.548l-7.34-7.338Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgCross
