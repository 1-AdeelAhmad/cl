import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgArrowLeft = (props: SvgIconProps) => {
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
        d="m3.878 11.643.004-.005 7.612-7.612a.388.388 0 0 1 .55 0 .388.388 0 0 1 0 .549l-6.95 6.95h14.288a.389.389 0 0 1 0 .776H5.093l6.95 6.95a.388.388 0 1 1-.549.55l-7.612-7.613-.004-.004a.408.408 0 0 1-.044-.055c-.007-.01-.011-.02-.017-.03l-.018-.036a.251.251 0 0 1-.013-.041c-.003-.011-.007-.021-.008-.032a.39.39 0 0 1 0-.152c.002-.011.006-.021.01-.032.004-.014.006-.028.012-.041.005-.013.012-.024.019-.036l.016-.031a.349.349 0 0 1 .045-.054l-.002-.002Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgArrowLeft
