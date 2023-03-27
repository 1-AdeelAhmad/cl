import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgPadlockLockedSafe = (props: SvgIconProps) => {
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
        d="M12.253 17.18a.966.966 0 0 1-.965-.966v-1.127a1.486 1.486 0 0 1-.529-1.14c0-.823.671-1.494 1.494-1.494s1.494.67 1.494 1.494c0 .445-.195.858-.529 1.14v1.127a.966.966 0 0 1-.965.965Zm-.284-2.19v1.224a.284.284 0 0 0 .569 0V14.97a.336.336 0 0 1 .15-.337.81.81 0 0 0 .379-.686.815.815 0 0 0-.814-.813.815.815 0 0 0-.813.813.81.81 0 0 0 .378.686c.121.076.18.218.15.356Zm4.297 2.843v-3.016a.388.388 0 0 0-.775 0v3.016c0 .1-.082.182-.181.182h-1.525a.388.388 0 0 0 0 .774h1.525c.527 0 .956-.429.956-.956Zm-.542-8.46h-.346V7.386a3.129 3.129 0 0 0-3.125-3.125 3.129 3.129 0 0 0-3.125 3.125v1.989h-.345a1.975 1.975 0 0 0-1.973 1.973v6.94c0 1.088.885 1.973 1.973 1.973h6.94a1.976 1.976 0 0 0 1.973-1.973v-6.94a1.976 1.976 0 0 0-1.973-1.973ZM9.81 7.386a2.446 2.446 0 0 1 2.443-2.443 2.447 2.447 0 0 1 2.444 2.443v1.989H9.809V7.385Zm7.206 10.902c0 .713-.58 1.293-1.292 1.293H8.782c-.713 0-1.292-.58-1.292-1.293v-6.94c0-.713.58-1.293 1.292-1.293h6.94c.713 0 1.293.58 1.293 1.293v6.94Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgPadlockLockedSafe