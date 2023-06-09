import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgMale = (props: SvgIconProps) => {
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
        d="m19.886 4.126-.012-.04c-.004-.016-.008-.032-.015-.048-.007-.016-.016-.029-.024-.044l-.018-.035a.496.496 0 0 0-.13-.13l-.035-.02c-.015-.007-.03-.017-.044-.023a.332.332 0 0 0-.048-.015c-.013-.004-.025-.009-.04-.012a.429.429 0 0 0-.091-.009h-3.711a.465.465 0 0 0 0 .93h2.588l-3.345 3.345a6.64 6.64 0 0 0-4.35-1.619 6.68 6.68 0 0 0-6.671 6.672c0 3.677 2.994 6.672 6.671 6.672a6.68 6.68 0 0 0 6.671-6.672 6.636 6.636 0 0 0-1.661-4.398l3.343-3.343v2.589a.465.465 0 0 0 .93 0V4.215a.425.425 0 0 0-.01-.092l.002.003ZM10.61 18.822a5.749 5.749 0 0 1-5.741-5.743 5.748 5.748 0 0 1 5.741-5.742 5.748 5.748 0 0 1 5.742 5.742 5.75 5.75 0 0 1-5.742 5.743Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgMale
