import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgMaleBathroomSign = (props: SvgIconProps) => {
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
        d="M13.87 4.385c-.393-.663-1.17-.963-1.91-.827-.813.15-1.389.91-1.418 1.713l-.001.041c.01.77.483 1.412 1.193 1.69.682.266 1.51.02 1.972-.535a1.817 1.817 0 0 0 .165-2.082ZM13.2 5.98c-.145.205-.405.35-.678.408-.546.116-1.101-.27-1.248-.812a1.105 1.105 0 0 1 .261-1.01 1.097 1.097 0 0 1 1.487-.105c.22.183.364.446.395.688.041.323-.032.567-.217.83Zm.937 6.746v6.448a.35.35 0 0 1-.35.351h-2.905a.35.35 0 0 1-.35-.35v-6.45a.35.35 0 1 1 .701 0v6.098h.75v-4.9a.35.35 0 1 1 .7 0v4.9h.75v-6.097a.35.35 0 1 1 .701 0h.003Zm.97-3.855v4.415a.35.35 0 1 1-.701 0V8.872a.53.53 0 0 0-.53-.529h-3.085a.53.53 0 0 0-.53.529v4.415a.35.35 0 1 1-.701 0V8.872c0-.679.552-1.23 1.23-1.23h3.087c.679 0 1.23.551 1.23 1.23Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgMaleBathroomSign
