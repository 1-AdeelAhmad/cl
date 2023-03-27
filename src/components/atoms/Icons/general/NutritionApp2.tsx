import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgNutritionApp2 = (props: SvgIconProps) => {
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
        d="M17.129 16.645v2.323c0 .57-.462 1.032-1.032 1.032H7.839c-.57 0-1.033-.462-1.033-1.032v-5.42M6.806 8.903v-3.87C6.806 4.461 7.268 4 7.84 4h8.258c.57 0 1.032.462 1.032 1.032v.774"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.58 5.806v-.258H8.356v2.84M8.355 14.065v2.838h6.968v-.258M10.935 18.452H13M5 10.452h1.032M7.58 10.451h2.84M7.839 12H8.87M10.42 12h3.096M12.786 13.414c.198.352.413.653.6.907.26.356.733.979 1.466.979.398 0 .725-.073.94-.139a.952.952 0 0 1 .563 0c.215.066.541.139.94.139.733 0 1.206-.623 1.466-.979.502-.687 1.221-1.711 1.221-3.178 0-1.467-.852-2.2-1.466-2.445-1.221-.49-2.442 0-2.442 0s.12-1.062-.944-1.44M14.363 8.508c-.237.031-.485.09-.733.19-.613.245-1.466.978-1.466 2.445 0 .288.03.602.079.857"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.806 9.676c-.245.244-1.222.244-1.466 0"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}
export default SvgNutritionApp2
