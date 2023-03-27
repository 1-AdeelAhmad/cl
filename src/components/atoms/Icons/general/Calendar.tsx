import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgCalendar = (props: SvgIconProps) => {
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
        d="M17.93 5.528h-1.828v-.93a.389.389 0 0 0-.777 0v.93h-6.86v-.93a.389.389 0 0 0-.777 0v.93H5.86c-.634 0-1.15.516-1.15 1.15V19.06c0 .634.516 1.15 1.15 1.15h12.07c.634 0 1.15-.516 1.15-1.15V6.678c0-.634-.516-1.15-1.15-1.15Zm.373 13.532a.374.374 0 0 1-.373.373H5.86a.374.374 0 0 1-.373-.373V9.93c.013.001.028.004.042.004h10.463a.389.389 0 0 0 0-.777H5.53c-.014 0-.028.003-.042.005V6.679c0-.206.168-.373.373-.373h1.828v1.088a.389.389 0 0 0 .777 0V6.306h6.86v1.088a.389.389 0 0 0 .777 0V6.306h1.828c.206 0 .373.167.373.373V19.06v-.001Zm-2.169-6.939a.389.389 0 0 1-.388.389h-1.24a.389.389 0 0 1 0-.777h1.24c.214 0 .388.174.388.388Zm-3.23 0a.389.389 0 0 1-.388.389h-1.241a.389.389 0 0 1 0-.777h1.24c.215 0 .39.174.39.388Zm-3.23 0a.389.389 0 0 1-.388.389H8.045a.389.389 0 0 1 0-.777h1.24c.215 0 .389.174.389.388Zm6.46 2.575a.389.389 0 0 1-.388.389h-1.24a.389.389 0 0 1 0-.777h1.24c.214 0 .388.174.388.389Zm-3.23 0a.389.389 0 0 1-.388.389h-1.241a.389.389 0 0 1 0-.777h1.24c.215 0 .39.174.39.389Zm-3.23 0a.389.389 0 0 1-.388.389H8.045a.389.389 0 0 1 0-.777h1.24c.215 0 .389.174.389.389Zm6.46 2.577a.389.389 0 0 1-.388.388h-1.24a.389.389 0 0 1 0-.777h1.24c.214 0 .388.175.388.389Zm-3.23 0a.389.389 0 0 1-.388.388h-1.241a.389.389 0 0 1 0-.777h1.24c.215 0 .39.175.39.389Zm-3.23 0a.389.389 0 0 1-.388.388H8.045a.389.389 0 0 1 0-.777h1.24c.215 0 .389.175.389.389Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgCalendar
