import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgNotFound = (props: SvgIconProps) => {
  const { ...other } = props
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={32}
      height={32}
      {...other}
    >
      <g fill="#263238">
        <circle cx={7.5} cy={5.5} r={0.5} />
        <circle cx={5.5} cy={5.5} r={0.5} />
        <circle cx={3.5} cy={5.5} r={0.5} />
        <path d="M30.5 8h-29a.5.5 0 0 1 0-1h29a.5.5 0 0 1 0 1z" />
        <path d="M29.5 29h-27c-.827 0-1.5-.673-1.5-1.5v-23C1 3.673 1.673 3 2.5 3h27c.827 0 1.5.673 1.5 1.5v23c0 .827-.673 1.5-1.5 1.5zM2.5 4a.5.5 0 0 0-.5.5v23a.5.5 0 0 0 .5.5h27a.5.5 0 0 0 .5-.5v-23a.5.5 0 0 0-.5-.5h-27z" />
      </g>
      <path
        d="M24.5 24a.5.5 0 0 1-.5-.5V21h-3.5a.5.5 0 0 1-.471-.668l2.5-7A.5.5 0 0 1 23 13h1.5a.5.5 0 0 1 .5.5V20h.5a.5.5 0 0 1 0 1H25v2.5a.5.5 0 0 1-.5.5zm-3.291-4H24v-6h-.647l-2.144 6zM10.5 24a.5.5 0 0 1-.5-.5V21H6.5a.5.5 0 0 1-.471-.668l2.5-7A.5.5 0 0 1 9 13h1.5a.5.5 0 0 1 .5.5V20h.5a.5.5 0 0 1 0 1H11v2.5a.5.5 0 0 1-.5.5zm-3.291-4H10v-6h-.647l-2.144 6zM17.5 24h-3c-.827 0-1.5-.673-1.5-1.5v-8c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5zm-3-10a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-3z"
        fill="#263238"
      />
    </SvgIcon>
  )
}
export default SvgNotFound
