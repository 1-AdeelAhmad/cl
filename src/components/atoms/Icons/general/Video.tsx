import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgVideo = (props: SvgIconProps) => {
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
        d="M19.59 11.305H4.79a.377.377 0 0 0-.376.377v6.497c0 1.005.817 1.821 1.82 1.821h11.912c1.003 0 1.82-.817 1.82-1.82v-6.498a.377.377 0 0 0-.376-.377ZM9.33 14.193l-1.333-2.134h3.081l1.334 2.134H9.33Zm3.971 0-1.334-2.134h3.082l1.334 2.134H13.3Zm5.912 3.986c0 .588-.48 1.067-1.067 1.067H6.234c-.588 0-1.067-.479-1.067-1.067v-6.12h1.941l1.334 2.134H5.874a.377.377 0 0 0 0 .753h12.633a.377.377 0 0 0 0-.753h-1.235l-1.334-2.134h3.275v6.12Zm.258-11.423-.366-1.396a1.805 1.805 0 0 0-.842-1.11 1.806 1.806 0 0 0-1.38-.19L5.36 7.077c-.47.123-.865.422-1.11.842-.246.42-.313.91-.19 1.38l.367 1.397a.377.377 0 0 0 .46.268l14.316-3.748a.371.371 0 0 0 .23-.174.384.384 0 0 0 .04-.286h-.002Zm-7.833 1.662.75-2.402 2.98-.78-.75 2.401-2.981.78ZM7.796 9.423l.75-2.402 2.98-.78-.748 2.402-2.982.78Zm-3.008-.315a1.062 1.062 0 0 1 .761-1.302l2.136-.559-.749 2.402-1.877.492-.27-1.032v-.001Zm10.69-1.696.75-2.402.846-.222a1.07 1.07 0 0 1 .81.111c.245.144.42.375.492.65l.27 1.033-3.167.829v.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgVideo