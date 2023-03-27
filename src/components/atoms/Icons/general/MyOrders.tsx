import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgMyOrders = (props: SvgIconProps) => {
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
        d="M18.525 6.09H5.271c-.755 0-1.371.615-1.371 1.371V8.68c0 .212.173.385.386.385h.243v8.956c0 .213.173.386.385.386h13.972a.386.386 0 0 0 .385-.386V9.065h.244a.386.386 0 0 0 .385-.385V7.465c0-.758-.617-1.375-1.375-1.375ZM4.671 7.461c0-.33.269-.6.6-.6h13.254c.333 0 .604.271.604.604v.83H4.671V7.46ZM18.5 17.636H5.3v-8.57h13.2v8.57ZM6.48 10.54c0-.213.173-.385.385-.385h10.07a.386.386 0 0 1 0 .77H6.866a.386.386 0 0 1-.385-.385Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgMyOrders
