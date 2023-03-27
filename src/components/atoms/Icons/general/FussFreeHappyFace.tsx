import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgFussFreeHappyFace = (props: SvgIconProps) => {
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
        d="M11.74 20.35c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8Zm0-15.234c-3.99 0-7.235 3.245-7.235 7.235s3.245 7.235 7.235 7.235 7.235-3.245 7.235-7.235-3.245-7.235-7.235-7.235Zm3.642 9.818a.382.382 0 1 0-.66-.387 3.453 3.453 0 0 1-5.958.009.381.381 0 1 0-.658.389 4.216 4.216 0 0 0 3.636 2.077c1.491 0 2.886-.8 3.641-2.087v-.001Zm-4.45-4.204a1.488 1.488 0 0 0-2.974 0 .383.383 0 0 0 .765 0 .723.723 0 0 1 1.444 0 .383.383 0 0 0 .765 0Zm4.615 0a1.49 1.49 0 0 0-1.487-1.487c-.819 0-1.487.666-1.487 1.487a.383.383 0 0 0 .765 0 .723.723 0 0 1 1.445 0 .383.383 0 0 0 .764 0Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgFussFreeHappyFace
