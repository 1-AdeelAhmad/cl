import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgMedicalNutrition = (props: SvgIconProps) => {
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
        d="M18.193 12.226c0 .774-2.488 1.548-6.193 1.548-3.706 0-6.194-.774-6.194-1.548"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.29 10.585c-.816.359-1.29.82-1.29 1.382 0 0 0 6.194 4.387 7.742l.606.81c.116.153.284.258.473.295.393.076 1.19.186 2.533.186s2.14-.109 2.533-.186a.77.77 0 0 0 .473-.296l.606-.809c4.387-1.548 4.387-7.742 4.387-7.742 0-.77-.912-1.352-2.348-1.74"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.355 19.193s1.032.516 2.58.516M16.645 19.193s-1.032.516-2.58.516M12.258 7.58s1.032-.258 1.548-1.29c0 0 1.29 2.58-.258 4.387M9.161 8.87c2.065 1.807 2.227 3.647 2.227 3.647S13.29 10.934 12 8.87C10.849 7.03 7.664 6.648 6.744 5c-.686 1.846-1.194 5.301.61 6.71M18.258 8.614l-1.355 3.611M17.677 8.538a1.807 1.807 0 1 0-.937-.661l-2.675 4.865"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}
export default SvgMedicalNutrition
