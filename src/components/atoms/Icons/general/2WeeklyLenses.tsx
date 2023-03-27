import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const Svg2WeeklyLenses = (props: SvgIconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.13 3.6c.221 0 .4.18.4.4v.985h7.227V4a.4.4 0 0 1 .8-.001v.985h1.93a1.2 1.2 0 0 1 1.2 1.2V19.2a1.2 1.2 0 0 1-1.2 1.2H5.8a1.2 1.2 0 0 1-1.2-1.2V6.185a1.2 1.2 0 0 1 1.2-1.2h1.93V4c0-.221.18-.401.4-.401Zm7.627 2.185v1.152a.4.4 0 1 0 .8-.001V5.785h1.93c.22 0 .4.18.4.4V19.2a.4.4 0 0 1-.4.4H5.8a.4.4 0 0 1-.4-.4V9.595a.404.404 0 0 0 .053.004H16.45a.4.4 0 0 0 0-.8H5.453a.404.404 0 0 0-.053.003V6.185a.4.4 0 0 1 .4-.4h1.93v1.152a.4.4 0 1 0 .8-.001V5.785h7.227Zm-.519 9.961h.774v-.762h-.774v-3.71h-.894l-2.61 3.777v.695h2.598V17h.906v-1.254Zm-.906-2.18v1.418h-1.746l1.406-2.039a4.754 4.754 0 0 0 .356-.633h.03l-.01.239a34.38 34.38 0 0 0-.032.66c-.003.12-.004.238-.004.355ZM9.137 17h.922v-5.71h-.766l-1.695 1.327.46.582.657-.523c.088-.076.172-.149.25-.219.08-.07.148-.135.203-.195-.008.106-.014.218-.02.336l-.007.359a17.29 17.29 0 0 0-.004.367V17Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default Svg2WeeklyLenses
