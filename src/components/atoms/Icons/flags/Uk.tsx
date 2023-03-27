import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgUk = (props: SvgIconProps) => {
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
        d="M4 6v12h16V6H4Z"
        fill="#2E42A5"
      />
      <mask
        id="uk_svg__a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={4}
        y={6}
        width={16}
        height={12}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 6v12h16V6H4Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#uk_svg__a)">
        <mask
          id="uk_svg__b"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={4}
          y={6}
          width={16}
          height={12}
        >
          <path fill="#fff" d="M4 6h16v12H4z" />
        </mask>
        <g mask="url(#uk_svg__b)">
          <path
            d="m2.219 17.143 3.52 1.489L20.08 7.619l1.857-2.213-3.765-.497-5.85 4.745-4.707 3.198-5.396 4.29Z"
            fill="#fff"
          />
          <path
            d="m2.7 18.186 1.794.864L21.27 5.2h-2.518L2.7 18.187Z"
            fill="#F50100"
          />
          <path
            d="m21.782 17.143-3.521 1.489L3.92 7.619 2.063 5.406l3.765-.497 5.85 4.745 4.707 3.198 5.396 4.29Z"
            fill="#fff"
          />
          <path
            d="m21.661 17.891-1.793.865-7.144-5.93-2.118-.663-8.722-6.75h2.519l8.717 6.59 2.316.795 6.225 5.093Z"
            fill="#F50100"
          />
          <mask id="uk_svg__c" fill="#fff">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.889 5h-3.778v5H3.014v4h7.097v5h3.778v-5h7.125v-4h-7.125V5Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.889 5h-3.778v5H3.014v4h7.097v5h3.778v-5h7.125v-4h-7.125V5Z"
            fill="#F50100"
          />
          <path
            d="M10.111 5V4h-1v1h1Zm3.778 0h1V4h-1v1Zm-3.778 5v1h1v-1h-1Zm-7.097 0V9h-1v1h1Zm0 4h-1v1h1v-1Zm7.097 0h1v-1h-1v1Zm0 5h-1v1h1v-1Zm3.778 0v1h1v-1h-1Zm0-5v-1h-1v1h1Zm7.125 0v1h1v-1h-1Zm0-4h1V9h-1v1Zm-7.125 0h-1v1h1v-1Zm-3.778-4h3.778V4h-3.778v2Zm1 4V5h-2v5h2Zm-8.097 1h7.097V9H3.014v2Zm1 3v-4h-2v4h2Zm6.097-1H3.014v2h7.097v-2Zm1 6v-5h-2v5h2Zm2.778-1h-3.778v2h3.778v-2Zm-1-4v5h2v-5h-2Zm8.125-1h-7.125v2h7.125v-2Zm-1-3v4h2v-4h-2Zm-6.125 1h7.125V9h-7.125v2Zm-1-6v5h2V5h-2Z"
            fill="#fff"
            mask="url(#uk_svg__c)"
          />
        </g>
      </g>
    </SvgIcon>
  )
}
export default SvgUk
