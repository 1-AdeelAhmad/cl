import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgWeb = (props: SvgIconProps) => {
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
        d="M20.07 11.67c0-4.386-3.548-7.958-7.925-7.998l-.041-.002h-.035a7.976 7.976 0 0 0-5.783 2.481.37.37 0 0 0-.131.136 7.97 7.97 0 0 0-2.085 5.381c0 4.411 3.589 8 8 8h.034l.041-.002c4.377-.041 7.925-3.612 7.925-7.998v.002Zm-15.218.385h2.99c.027 1.117.17 2.168.409 3.112a7.88 7.88 0 0 0-1.644 1.228 7.192 7.192 0 0 1-1.754-4.34h-.001Zm1.66-5.002A7.99 7.99 0 0 0 8.22 8.307c-.22.909-.352 1.912-.378 2.977h-2.99a7.191 7.191 0 0 1 1.662-4.231Zm12.777 4.231h-2.922a14.263 14.263 0 0 0-.383-3.002 8.009 8.009 0 0 0 1.644-1.23 7.194 7.194 0 0 1 1.662 4.231v.001ZM11.686 8.52a7.235 7.235 0 0 1-2.548-.615c.553-1.824 1.485-3.131 2.548-3.407V8.519Zm0 .77v1.995H8.612c.025-.928.14-1.816.326-2.627a8.007 8.007 0 0 0 2.747.633Zm0 2.766v2.106a7.931 7.931 0 0 0-2.718.65 13.378 13.378 0 0 1-.355-2.756h3.073Zm0 2.87v3.917c-1.039-.27-1.954-1.526-2.51-3.288a7.16 7.16 0 0 1 2.51-.628Zm.77-.007c.908.04 1.78.247 2.588.607-.568 1.815-1.514 3.103-2.587 3.336v-3.943Zm0-.763v-2.1h3.141a13.412 13.412 0 0 1-.348 2.724 7.878 7.878 0 0 0-2.792-.624Zm0-2.87V9.29a7.946 7.946 0 0 0 2.811-.651c.188.816.305 1.71.33 2.644h-3.141v.001Zm0-2.766v-4.04c1.087.237 2.045 1.553 2.61 3.405a7.176 7.176 0 0 1-2.61.635Zm3.314-1.005c-.355-1.115-.85-2.046-1.446-2.712a7.243 7.243 0 0 1 2.78 1.685c-.41.397-.856.74-1.334 1.027Zm-7.339.028a7.214 7.214 0 0 1-1.393-1.054 7.239 7.239 0 0 1 2.88-1.72c-.614.674-1.125 1.628-1.487 2.774Zm.041 8.381c.359 1.09.854 1.999 1.445 2.649a7.229 7.229 0 0 1-2.78-1.626 7.13 7.13 0 0 1 1.335-1.023Zm7.277-.034c.471.277.915.61 1.32.997a7.227 7.227 0 0 1-2.745 1.652c.583-.653 1.072-1.562 1.425-2.65Zm.217-.757c.233-.935.374-1.973.4-3.077h2.923a7.196 7.196 0 0 1-1.698 4.275 7.938 7.938 0 0 0-1.625-1.198Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgWeb
