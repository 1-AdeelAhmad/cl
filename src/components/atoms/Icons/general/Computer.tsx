import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgComputer = (props: SvgIconProps) => {
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
        d="M18.984 15.917H5.016C4.456 15.917 4 15.46 4 14.9V6.016C4 5.456 4.455 5 5.016 5h13.968C19.544 5 20 5.455 20 6.016V14.9c0 .56-.455 1.016-1.016 1.016ZM5.016 5.692a.324.324 0 0 0-.324.324V14.9c0 .18.145.324.324.324h13.968a.324.324 0 0 0 .324-.324V6.016a.324.324 0 0 0-.324-.324H5.016Zm1.278 4.767V7.264h5.699a.346.346 0 0 0 0-.691H5.948a.346.346 0 0 0-.346.346v3.54a.346.346 0 0 0 .692 0Zm8.577 8.546a.346.346 0 0 0-.345-.345 1.23 1.23 0 0 1-1.228-1.229.346.346 0 0 0-.692 0c0 .468.168.896.446 1.229h-2.103c.278-.333.446-.762.446-1.229a.346.346 0 0 0-.692 0 1.23 1.23 0 0 1-1.228 1.229.346.346 0 0 0 0 .691h5.052c.19 0 .346-.155.346-.346h-.002Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgComputer
