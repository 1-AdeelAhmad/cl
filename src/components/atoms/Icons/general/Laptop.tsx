import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgLaptop = (props: SvgIconProps) => {
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
        d="M19.67 15.276h-.912V7.99a.99.99 0 0 0-.99-.99h-11.6a.99.99 0 0 0-.99.99v7.286h-.85a.329.329 0 0 0-.328.329v.54c0 .489.398.886.886.886h14.228a.887.887 0 0 0 .886-.886v-.54a.329.329 0 0 0-.328-.329h-.001ZM18.102 7.99v.251h-5.673a.52.52 0 0 0-.072-.584h5.412c.184 0 .333.149.333.333Zm-6.132-.126a.137.137 0 1 1 0 .274.137.137 0 0 1 0-.274Zm-5.801-.207h5.412a.516.516 0 0 0-.072.584H5.835V7.99c0-.184.149-.333.333-.333Zm-.333 1.24H18.1v6.378h-4.464c-.103 0-.2.05-.262.132l-.117.154h-2.822l-.117-.154a.329.329 0 0 0-.262-.132H5.835V8.898Zm13.507 7.247a.23.23 0 0 1-.23.23H4.887a.23.23 0 0 1-.23-.23v-.212h5.236l.116.155c.062.082.16.131.263.131h3.15c.104 0 .201-.049.263-.131l.117-.155h5.54v.212h.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgLaptop
