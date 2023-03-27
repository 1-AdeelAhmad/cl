import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgArrowUp = (props: SvgIconProps) => {
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
        d="m12.041 4.022.005.003 7.612 7.613a.388.388 0 0 1 0 .55.388.388 0 0 1-.55 0l-6.95-6.95v14.287a.389.389 0 0 1-.776 0V5.237l-6.95 6.95a.388.388 0 1 1-.55-.55l7.613-7.612.005-.003a.408.408 0 0 1 .054-.044c.01-.007.021-.011.031-.017l.036-.019a.25.25 0 0 1 .04-.012c.012-.003.022-.008.033-.009a.39.39 0 0 1 .152 0c.011.002.02.007.032.01.013.004.028.007.041.012l.036.02.03.016c.02.013.038.027.055.044l.001-.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgArrowUp
