import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgReturnOption2 = (props: SvgIconProps) => {
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
        d="M8.27 15.371h7.903a.794.794 0 0 0 .793-.793V9.694a.794.794 0 0 0-.793-.793H8.269a.794.794 0 0 0-.793.793v4.884c0 .438.356.793.793.793Zm7.903-.775H8.269a.018.018 0 0 1-.018-.018v-3.292h7.938v3.292c0 .01-.007.018-.017.018ZM8.269 9.678h7.904c.01 0 .018.007.018.017v.817H8.253v-.817c0-.01.007-.017.017-.017Zm7.274 3.944a.388.388 0 0 1-.388.388H13.58a.388.388 0 0 1 0-.776h1.574c.214 0 .388.174.388.388Zm2.804 3.345a7.935 7.935 0 0 1-5.333 2.989 7.927 7.927 0 0 1-5.884-1.657 7.988 7.988 0 0 1-3.034-5.86.388.388 0 0 1 .774-.04 7.214 7.214 0 0 0 2.74 5.29 7.164 7.164 0 0 0 5.312 1.496 7.166 7.166 0 0 0 4.815-2.7 7.163 7.163 0 0 0 1.496-5.312 7.163 7.163 0 0 0-2.699-4.815 7.23 7.23 0 0 0-8.41-.37l.865.141a.389.389 0 0 1 .324.422l-.002.02a.472.472 0 0 1-.025.111.387.387 0 0 1-.427.251l-1.817-.3a.386.386 0 0 1-.253-.157.436.436 0 0 1-.076-.317l.294-1.811a.403.403 0 0 1 .24-.303.388.388 0 0 1 .538.418l-.148.916a8.009 8.009 0 0 1 9.378.369 7.934 7.934 0 0 1 2.989 5.332 7.934 7.934 0 0 1-1.657 5.884v.003Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgReturnOption2