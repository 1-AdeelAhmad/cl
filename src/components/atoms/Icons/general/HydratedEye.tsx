import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgHydratedEye = (props: SvgIconProps) => {
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
        d="M11.765 15.774A2.677 2.677 0 0 1 9.09 13.1c0-1.475 1.199-2.674 2.674-2.674 1.474 0 2.674 1.2 2.674 2.674 0 1.475-1.2 2.674-2.674 2.674Zm0-4.57c-1.046 0-1.897.85-1.897 1.896 0 1.046.85 1.897 1.897 1.897 1.046 0 1.896-.85 1.896-1.897 0-1.046-.85-1.897-1.896-1.897Zm-.579 1.896a.58.58 0 0 1 .579-.579.389.389 0 0 0 0-.777c-.748 0-1.356.609-1.356 1.356a.389.389 0 0 0 .777 0Zm8.265.785a1.136 1.136 0 0 0-.014-1.585.388.388 0 1 0-.55.55.355.355 0 0 1 .004.495c-.126.131-3.152 3.217-7.326 3.217-2.462 0-4.792-1.08-6.923-3.212a.355.355 0 0 1-.004-.495c.127-.131 3.152-3.217 7.328-3.217.268 0 .542.013.814.04a.389.389 0 0 0 .077-.772 8.906 8.906 0 0 0-.89-.044c-4.5 0-7.751 3.313-7.886 3.454a1.136 1.136 0 0 0 .014 1.585c2.283 2.283 4.797 3.44 7.472 3.44 4.5 0 7.75-3.314 7.886-3.455h-.002Zm-2.898-1.674c-.07 0-.141-.004-.212-.01a2.247 2.247 0 0 1-1.877-1.327 2.402 2.402 0 0 1 .233-2.412l1.535-2.112a.386.386 0 0 1 .342-.159.399.399 0 0 1 .302.162l1.532 2.11c.507.697.597 1.621.234 2.412a2.247 2.247 0 0 1-2.09 1.337v-.001Zm0-4.954-1.215 1.671a1.608 1.608 0 0 0-.154 1.615c.23.5.686.825 1.22.868.098.008.2.008.298 0 .534-.043.99-.369 1.22-.868a1.608 1.608 0 0 0-.154-1.615l-1.215-1.671Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgHydratedEye
