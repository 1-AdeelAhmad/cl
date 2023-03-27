import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgArrowDown = (props: SvgIconProps) => {
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
        d="m11.499 19.805-.005-.003-7.612-7.613a.388.388 0 0 1 0-.55.388.388 0 0 1 .55 0l6.95 6.95V4.303a.389.389 0 0 1 .776 0V18.59l6.95-6.95a.388.388 0 1 1 .55.548l-7.613 7.613-.005.003a.41.41 0 0 1-.054.044c-.01.007-.021.012-.031.017-.012.007-.023.014-.036.019a.247.247 0 0 1-.04.012c-.012.004-.022.008-.033.01a.388.388 0 0 1-.152 0c-.01-.003-.02-.008-.032-.01l-.041-.013-.036-.019a.348.348 0 0 1-.085-.061l-.001.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgArrowDown
