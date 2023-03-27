import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgClock = (props: SvgIconProps) => {
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
        d="M12.09 20.08c-4.412 0-8-3.59-8-8s3.588-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-15.226c-3.985 0-7.225 3.241-7.225 7.225 0 3.983 3.242 7.225 7.225 7.225 3.983 0 7.225-3.242 7.225-7.225 0-3.984-3.242-7.225-7.225-7.225Zm2.762 9.97a.387.387 0 0 0 0-.549l-2.375-2.374V8.545a.388.388 0 0 0-.774 0v3.516c0 .103.04.202.112.274l2.49 2.488a.388.388 0 0 0 .548 0Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgClock
