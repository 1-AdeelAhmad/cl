import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgNeutralFace = (props: SvgIconProps) => {
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
        d="M11.74 4.35c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.59-8-8-8Zm0 15.234c-3.99 0-7.235-3.245-7.235-7.235S7.75 5.115 11.74 5.115s7.235 3.245 7.235 7.235-3.245 7.235-7.235 7.235ZM7.865 10.32c0-.21.172-.382.382-.382h2.295a.383.383 0 0 1 0 .764H8.247a.383.383 0 0 1-.382-.382Zm7.756 0c0 .211-.171.382-.382.382h-2.294a.383.383 0 0 1 0-.764h2.294c.21 0 .382.171.382.382Zm-.004 4.916a.383.383 0 0 1-.383.384H8.253a.383.383 0 1 1 0-.767h6.98c.213 0 .384.171.384.383Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgNeutralFace
