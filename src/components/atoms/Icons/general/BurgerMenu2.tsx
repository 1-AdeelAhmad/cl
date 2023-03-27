import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgBurgerMenu2 = (props: SvgIconProps) => {
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
        d="M19.383 7.385H4.158a.387.387 0 1 1 0-.775h15.224a.387.387 0 1 1 0 .775h.001Zm-4.78 4.806a.387.387 0 0 0-.388-.387H4.158a.387.387 0 1 0 0 .775h10.056a.387.387 0 0 0 .388-.388Zm-5.028 5.194a.387.387 0 0 0-.387-.388h-5.03a.387.387 0 1 0 0 .776h5.027a.387.387 0 0 0 .388-.388h.002Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgBurgerMenu2
