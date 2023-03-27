import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgMessage = (props: SvgIconProps) => {
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
        d="M19.085 5.21H5.376c-.632 0-1.146.5-1.146 1.116v9.505c0 .616.514 1.117 1.146 1.117h1.9v1.562a.421.421 0 0 0 .695.32l2.208-1.883h8.905c.632 0 1.146-.5 1.146-1.117V6.326c0-.614-.514-1.116-1.146-1.116Zm.376 10.62c0 .191-.168.347-.376.347h-9.047a.385.385 0 0 0-.25.092l-1.741 1.485v-1.192a.385.385 0 0 0-.385-.385H5.377c-.208 0-.376-.155-.376-.347V6.326c0-.19.168-.346.376-.346h13.709c.208 0 .376.155.376.346v9.505Zm-1.776-.673h-2.352a.376.376 0 1 1 0-.752h2.432l.001-.22v-1.952a.376.376 0 1 1 .753 0v1.953c0 .37 0 .574-.136.749-.17.22-.415.22-.698.22v.002Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgMessage
