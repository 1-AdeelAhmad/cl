import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgVeganChef = (props: SvgIconProps) => {
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
        d="M10.452 17.677s-.787-1.374-2.84-1.032c-1.547.258-2.322.516-3.612-.258C4 16.387 5.29 20 8.129 20c2.323 0 2.66-1.077 2.66-1.077M13.032 17.677s.787-1.374 2.839-1.032c1.548.258 2.323.516 3.613-.258 0 0-1.29 3.613-4.13 3.613-2.322 0-2.659-1.077-2.659-1.077"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.62 18.194a10.034 10.034 0 0 1-3.878.774 10.043 10.043 0 0 1-3.872-.772M14.71 5.159c.288-.081.59-.127.904-.127a3.353 3.353 0 0 1 .458 6.675 5.127 5.127 0 0 0-.716 2.615c0 .106.01.209.015.313a7.191 7.191 0 0 1-3.628.978 7.191 7.191 0 0 1-3.629-.978c.007-.104.016-.207.016-.313 0-.943-.256-1.824-.698-2.584l-.081.004a2.839 2.839 0 1 1 .628-5.607"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.195 12.025c-.7.473-1.545.75-2.453.75-.828 0-1.603-.23-2.263-.63M7.423 7.613a4.388 4.388 0 0 1 8.318-1.033"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}
export default SvgVeganChef
