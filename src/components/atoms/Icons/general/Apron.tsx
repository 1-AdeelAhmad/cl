import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgApron = (props: SvgIconProps) => {
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
        d="M14.344 12.63H9.582a.383.383 0 0 0-.383.383v3.708c0 .474.385.859.859.859h3.809a.86.86 0 0 0 .858-.86v-3.707a.383.383 0 0 0-.383-.383Zm-.383 4.09c0 .05-.043.094-.094.094H10.06a.094.094 0 0 1-.093-.093v-1.998h3.995v1.998Zm0-2.763H9.965v-.561h3.995v.561Zm5.772-1.022h-2.15v-2.403a.86.86 0 0 0-.86-.86 2 2 0 0 1-1.996-1.997v-.952a2.767 2.767 0 0 0-2.764-2.763A2.767 2.767 0 0 0 9.2 6.723v.952a2 2 0 0 1-1.997 1.998.86.86 0 0 0-.86.859v2.403h-2.15a.383.383 0 0 0 0 .766h2.15v5.876c0 .211.172.383.384.383H17.2a.383.383 0 0 0 .383-.383v-5.876h2.15a.384.384 0 0 0 0-.766Zm-7.77-8.209a2 2 0 0 1 1.96 1.614h-3.919a2 2 0 0 1 1.96-1.614Zm4.854 14.468H7.11v-8.662c0-.05.042-.093.093-.093a2.767 2.767 0 0 0 2.763-2.764v-.569h3.995v.57a2.767 2.767 0 0 0 2.763 2.763c.05 0 .093.043.093.093v8.662Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgApron
