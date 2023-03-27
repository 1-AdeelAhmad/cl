import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgReturnsAndRefunds = (props: SvgIconProps) => {
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
        d="M19.67 8.095v-.017a.387.387 0 0 0-.116-.274l-2.653-2.578a.408.408 0 0 0-.28-.116H6.718a.41.41 0 0 0-.275.112l-2.51 2.435a.236.236 0 0 0-.027.03l-.12.117a.381.381 0 0 0-.116.274V18.16c0 .219.178.396.396.396h15.207a.397.397 0 0 0 .396-.396V8.122l-.001-.028h.002ZM6.88 5.902h9.579l1.839 1.786H5.04l1.84-1.786Zm11.998 11.86H4.46v-9.28h14.417v9.28Zm-4.653-4.184a1.35 1.35 0 0 0-1.345-1.347H9.675l.701.7a.404.404 0 0 1 .116.277.39.39 0 0 1-.11.279.398.398 0 0 1-.566.005l-1.379-1.378a.402.402 0 0 1-.088-.418l.007-.016a.38.38 0 0 1 .086-.129l1.374-1.374a.397.397 0 0 1 .568.556l-.707.707h3.205c1.18 0 2.139.96 2.139 2.139 0 1.18-.96 2.139-2.14 2.139H8.72a.397.397 0 0 1 0-.792h4.162c.742 0 1.346-.605 1.346-1.346l-.003-.002Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgReturnsAndRefunds
