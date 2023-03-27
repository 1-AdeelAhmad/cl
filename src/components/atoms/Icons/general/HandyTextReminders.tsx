import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgHandyTextReminders = (props: SvgIconProps) => {
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
        d="M11.26 17.975c0-.213.172-.386.385-.386h1.671a.386.386 0 0 1 0 .771h-1.671a.386.386 0 0 1-.386-.385Zm5.86-12.286v12.02c0 1.098-.892 1.991-1.99 1.991h-5.3a1.993 1.993 0 0 1-1.99-1.99V5.69c0-1.097.893-1.99 1.99-1.99h5.3c1.098 0 1.99.893 1.99 1.99Zm-8.485-.242h7.691a1.221 1.221 0 0 0-1.196-.977h-5.3c-.59 0-1.083.42-1.195.977Zm7.715 11.576H8.61v.686c0 .673.548 1.22 1.22 1.22h5.3c.673 0 1.22-.547 1.22-1.22v-.686Zm0-.771V6.219H8.61v10.034h7.74v-.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgHandyTextReminders
