import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgFriendsAndFamily = (props: SvgIconProps) => {
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
        d="M10.036 6.53c1.13 0 2.05.92 2.05 2.05s-.92 2.05-2.05 2.05-2.05-.92-2.05-2.05.92-2.05 2.05-2.05Zm0-.768a2.818 2.818 0 1 0 0 5.636 2.818 2.818 0 0 0 0-5.636Zm6.136 12.098a6.143 6.143 0 0 0-6.136-6.135A6.143 6.143 0 0 0 3.9 17.86a.384.384 0 0 0 .768 0 5.374 5.374 0 0 1 5.368-5.367 5.374 5.374 0 0 1 5.367 5.367.384.384 0 0 0 .769 0Zm.02-11.452a.999.999 0 0 1 0 1.995.999.999 0 0 1-.997-.997c0-.55.448-.998.997-.998Zm0-.658a1.656 1.656 0 1 0 0 3.311 1.656 1.656 0 0 0 0-3.311Zm3.708 7.375a3.712 3.712 0 0 0-3.708-3.708c-1.3 0-2.521.694-3.187 1.813a.33.33 0 0 0 .565.336 3.068 3.068 0 0 1 2.621-1.49 3.053 3.053 0 0 1 3.05 3.049.329.329 0 1 0 .658 0h.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgFriendsAndFamily
