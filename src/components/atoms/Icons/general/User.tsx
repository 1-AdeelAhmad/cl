import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgUser = (props: SvgIconProps) => {
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
        d="M12.37 10.912a3.636 3.636 0 1 0 0-7.272 3.636 3.636 0 0 0 0 7.272Zm0-6.496a2.863 2.863 0 0 1 2.86 2.86 2.863 2.863 0 0 1-2.86 2.86 2.863 2.863 0 0 1-2.86-2.86 2.863 2.863 0 0 1 2.86-2.86Zm7.81 14.836a.388.388 0 0 1-.776 0 7.041 7.041 0 0 0-7.034-7.034 7.041 7.041 0 0 0-7.034 7.034.388.388 0 0 1-.776 0c0-4.307 3.503-7.81 7.81-7.81 4.307 0 7.81 3.503 7.81 7.81Zm-9.658-5.157a.388.388 0 0 1-.224.501 4.396 4.396 0 0 0-2.62 2.822.388.388 0 0 1-.745-.223 5.178 5.178 0 0 1 3.087-3.324c.2-.077.424.023.5.224h.002Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgUser
