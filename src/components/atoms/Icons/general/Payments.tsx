import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgPayments = (props: SvgIconProps) => {
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
        d="M18.907 7H5.093C4.491 7 4 7.49 4 8.093v8.537c0 .602.49 1.093 1.093 1.093h13.814c.602 0 1.093-.49 1.093-1.093V8.092C20 7.491 19.51 7 18.907 7Zm-13.814.77h13.814c.178 0 .323.145.323.323V9.62H4.77V8.093c0-.178.145-.323.323-.323Zm13.814 9.182H5.093a.324.324 0 0 1-.323-.324V10.39h14.459v6.238a.324.324 0 0 1-.323.324Zm-.812-3.236h-2.752a.275.275 0 0 0-.275.275v1.741c0 .152.123.275.275.275h2.752a.275.275 0 0 0 .275-.275v-1.741a.275.275 0 0 0-.275-.275Zm-.275 1.741h-2.202v-1.191h2.202v1.191Zm-8.839.275a.275.275 0 0 1-.275.275H5.954a.275.275 0 0 1 0-.55h2.752c.152 0 .275.123.275.275Zm0-1.31a.275.275 0 0 1-.275.275H5.954a.275.275 0 0 1 0-.55h2.752c.152 0 .275.123.275.275Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgPayments
