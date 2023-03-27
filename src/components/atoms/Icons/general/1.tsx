import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const Svg1 = (props: SvgIconProps) => {
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
        d="m11.738 8.889-1.034.337a.587.587 0 0 1-.18.032.362.362 0 0 1-.358-.358c0-.18.117-.296.295-.359l1.214-.422c.168-.052.316-.094.453-.094h.02c.244 0 .412.19.412.412v6.686a.414.414 0 0 1-.411.421.414.414 0 0 1-.412-.421V8.89l.001-.001Zm8.192 3.101a.389.389 0 0 0-.777 0c0 3.983-3.24 7.223-7.223 7.223-3.983 0-7.223-3.24-7.223-7.223 0-3.983 3.24-7.223 7.223-7.223a.389.389 0 0 0 0-.777c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default Svg1
