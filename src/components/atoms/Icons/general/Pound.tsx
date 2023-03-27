import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgPound = (props: SvgIconProps) => {
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
        d="M17.337 19.702H8.159c.198-.174.377-.376.535-.605.49-.709.738-1.603.738-2.66v-3.682h4.471a.39.39 0 0 0 0-.777h-4.47V9.505c0-1.375.326-2.442.97-3.171.634-.72 1.532-1.07 2.742-1.076a4.111 4.111 0 0 1 3.892 2.909.39.39 0 0 0 .745-.224 4.894 4.894 0 0 0-4.6-3.462l-.013-.001h-.045l-.011.001c-1.411.012-2.519.461-3.293 1.339-.772.874-1.164 2.115-1.164 3.685v2.473H6.68a.39.39 0 0 0 0 .777h1.976v3.683c0 .894-.202 1.64-.601 2.217-.389.563-.919.902-1.62 1.036a.39.39 0 0 0-.315.382v.018a.39.39 0 0 0 .389.389h10.829a.39.39 0 0 0 0-.778h-.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgPound
