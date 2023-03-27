import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgVegetables2 = (props: SvgIconProps) => {
  const { ...other } = props
  return (
    <SvgIcon
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path
        d="M18.246 16.645c1.245 0 1.789-.828 1.752-2.121-.062-2.167-1.958-3.484-4.127-3.484-2.171 0-4.066 1.317-4.127 3.484-.038 1.292.498 2.121 1.742 2.121h4.76ZM17.42 16.645c-.474 1.233.839 2.11-.032 3.038-.294.313-.688.317-1.538.317h.04c-.85 0-1.243-.004-1.537-.317-.87-.929.443-1.805-.031-3.038"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.548 13.548s.247-.54.774-.774M12.258 6.58V4.259A.258.258 0 0 0 12 4h-1.415c-.185 0-.31.19-.237.36l.62 1.446s-2.065-.516-4.387.517c0 0 1.692 0 2.97.765.227.137.303.43.184.667L8.91 9.408c-.142.284.185.573.45.397l2.357-1.572a1.033 1.033 0 0 1 1.103-.027l1.423.854a.258.258 0 0 0 .377-.303l-.49-1.473a.258.258 0 0 1 .101-.296l.61-.407 1.291-.775s-1.548-.516-2.58-.258"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.507 10.194c-.652-1.583-1.952-2.885-3.61-3.648M6.065 7.888C4.785 9.092 4 10.722 4 12.515c0 3.706 3.351 6.71 7.484 6.71.35 0 .695-.021 1.032-.063"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}
export default SvgVegetables2
