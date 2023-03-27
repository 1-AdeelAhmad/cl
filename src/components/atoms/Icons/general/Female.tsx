import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgFemale = (props: SvgIconProps) => {
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
        d="M17.915 9.463a5.58 5.58 0 0 0-5.572-5.573A5.58 5.58 0 0 0 6.77 9.463c0 3.072 2.292 5.357 5.184 5.558v1.665H9.915a.389.389 0 0 0 0 .777h2.04v2.039a.389.389 0 0 0 .776 0v-2.04h2.039a.389.389 0 0 0 0-.776h-2.04v-1.665a5.579 5.579 0 0 0 5.185-5.558Zm-10.37 0a4.802 4.802 0 0 1 4.796-4.796 4.802 4.802 0 0 1 4.796 4.796 4.802 4.802 0 0 1-4.796 4.796 4.802 4.802 0 0 1-4.795-4.796Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgFemale
