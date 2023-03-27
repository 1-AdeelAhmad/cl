import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgTiktok = (props: SvgIconProps) => {
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
        d="M15.192 4.609 14.806 4H12.47v5.482l-.008 5.354c.004.04.008.084.008.124a2.435 2.435 0 1 1-2.436-2.435c.279 0 .55.052.8.14V9.99a4.786 4.786 0 0 0-.8-.068A5.048 5.048 0 0 0 5 14.963 5.043 5.043 0 0 0 10.038 20a5.043 5.043 0 0 0 5.038-5.036v-6.37c1.007 1.007 2.309 1.99 3.75 2.304V8.165c-1.565-.692-3.12-2.737-3.634-3.556Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgTiktok
