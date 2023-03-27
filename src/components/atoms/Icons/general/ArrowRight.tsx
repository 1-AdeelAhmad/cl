import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgArrowRight = (props: SvgIconProps) => {
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
        d="m19.662 12.185-.004.004-7.612 7.613a.388.388 0 0 1-.55 0 .388.388 0 0 1 0-.55l6.95-6.95H4.158a.389.389 0 0 1 0-.776h14.289l-6.95-6.95a.388.388 0 1 1 .549-.55l7.612 7.613.004.004a.416.416 0 0 1 .044.055c.007.01.011.02.017.03l.018.036a.263.263 0 0 1 .013.041c.003.011.007.021.008.033.01.05.01.102 0 .152-.002.01-.006.02-.01.032-.004.013-.006.027-.012.04-.005.013-.012.024-.018.036-.006.01-.01.021-.017.031a.36.36 0 0 1-.044.055Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgArrowRight
