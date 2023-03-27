import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgHeart = (props: SvgIconProps) => {
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
        d="M15.46 5.22c-1.413 0-2.727.67-3.559 1.782A4.442 4.442 0 0 0 3.9 9.662c0 2.042 1.252 4.245 3.721 6.548a26.175 26.175 0 0 0 3.889 2.975l.187.114a.39.39 0 0 0 .406 0l.187-.114a26.09 26.09 0 0 0 3.889-2.974c2.47-2.304 3.721-4.506 3.721-6.548a4.448 4.448 0 0 0-4.443-4.443h.002Zm.188 10.418a25.777 25.777 0 0 1-3.746 2.87 25.815 25.815 0 0 1-3.745-2.87c-1.584-1.478-3.474-3.714-3.474-5.976A3.667 3.667 0 0 1 8.345 6c1.34 0 2.572.731 3.216 1.91a.39.39 0 0 0 .685 0A3.663 3.663 0 0 1 15.462 6a3.666 3.666 0 0 1 3.662 3.662c0 2.262-1.889 4.498-3.474 5.976h-.002Zm1.92-5.815a.39.39 0 0 1-.39-.39c0-.822-.668-1.49-1.49-1.49a.39.39 0 0 1 0-.781 2.273 2.273 0 0 1 2.271 2.271.39.39 0 0 1-.39.39Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgHeart