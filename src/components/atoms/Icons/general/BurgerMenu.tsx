import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgBurgerMenu = (props: SvgIconProps) => {
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
        d="M19.462 7.436H4.238a.389.389 0 0 1 0-.776h15.224a.389.389 0 0 1 0 .776Zm.388 4.806a.389.389 0 0 0-.388-.388H4.238a.389.389 0 0 0 0 .776h15.224a.389.389 0 0 0 .388-.388Zm0 5.193a.388.388 0 0 0-.388-.388H4.238a.388.388 0 0 0 0 .776h15.224a.389.389 0 0 0 .388-.388Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgBurgerMenu
