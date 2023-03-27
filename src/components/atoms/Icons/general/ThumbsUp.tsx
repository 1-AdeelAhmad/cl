import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgThumbsUp = (props: SvgIconProps) => {
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
        d="M12.088 5.816V4.155a.385.385 0 0 1 .77 0v1.661a.385.385 0 0 1-.77 0Zm2.747 2.58c0 .211.173.384.385.384h1.494a.385.385 0 0 0 0-.77H15.22a.385.385 0 0 0-.385.385Zm-6.602.384h1.493a.385.385 0 0 0 0-.77H8.233a.385.385 0 0 0 0 .77Zm2.159-2.013a.385.385 0 0 0 .543 0 .384.384 0 0 0 0-.544L9.803 5.092a.384.384 0 1 0-.544.544l1.132 1.132v-.001Zm3.94.156a.379.379 0 0 0 .271-.114l1.175-1.174a.384.384 0 1 0-.545-.544L14.06 6.265a.384.384 0 0 0 .272.657Zm4.29 7.267c.222.374.274.8.154 1.248a1.407 1.407 0 0 1-.763.937c.051.314.007.627-.133.923-.15.319-.382.556-.684.698a1.516 1.516 0 0 1-.352 1.274c-.28.316-.67.492-1.097.496-.39.003-.78.004-1.17.004l-1.291-.002h-.449c-.952-.003-1.923-.183-2.969-.549-.199-.07-.423-.148-.643-.215a.54.54 0 0 1-.156-.075c-.298.267-.69.43-1.12.43H6.035a.385.385 0 0 1-.385-.384v-6.407c0-.212.173-.384.385-.384h1.913c.445 0 .848.174 1.15.457.014-.009.027-.018.042-.026l.218-.11c.26-.13.528-.265.784-.404.51-.276.868-.686 1.092-1.251.06-.228.117-.472.17-.726l.151-1.803a.369.369 0 0 1 .014-.075c.026-.086.17-.518.569-.663.167-.061.434-.088.754.124.129.081 1.107.748 1.17 2.37v.036l-.096 1.738h.9c.771 0 1.568-.002 2.354.004.215 0 .43.032.619.089.67.201 1.094.92.983 1.671-.031.21-.098.403-.2.578v-.003Zm-9.762-.325a.913.913 0 0 0-.912-.912H6.42v5.637h1.53c.502 0 .91-.409.91-.91v-3.815Zm9.002.068a.802.802 0 0 0 .199-.432c.055-.37-.14-.731-.442-.822a1.42 1.42 0 0 0-.404-.056 335.29 335.29 0 0 0-2.348-.003h-.921l-.394-.008a.386.386 0 0 1-.377-.405l.116-2.118c-.055-1.248-.776-1.71-.807-1.729l-.014-.009a.273.273 0 0 0-.075-.038.404.404 0 0 0-.077.124l-.15 1.776a.297.297 0 0 1-.006.045 15.06 15.06 0 0 1-.202.852c-.29.744-.778 1.306-1.45 1.67a25.51 25.51 0 0 1-.807.414l-.073.037c.002.735.002 1.47.002 2.204v2.891c.171.056.339.114.491.168.964.338 1.852.503 2.716.505h.45c.804.004 1.636.006 2.453 0a.697.697 0 0 0 .526-.235.735.735 0 0 0 .176-.58 2.375 2.375 0 0 0-.042-.233l-.027-.136a.386.386 0 0 1 .301-.449.672.672 0 0 0 .506-.391.81.81 0 0 0 .007-.692.383.383 0 0 1 .27-.525c.317-.071.494-.23.572-.52a.81.81 0 0 0-.175-.797.385.385 0 0 1 .006-.507v-.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgThumbsUp