import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgBiocompatibleWithYourEye = (props: SvgIconProps) => {
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
        d="M16.61 11.15a.381.381 0 0 1-.27-.113l-1.451-1.45a.38.38 0 1 1 .538-.539l1.183 1.182 3.026-3.026a.38.38 0 1 1 .538.539l-3.295 3.294a.381.381 0 0 1-.27.113Zm-1.868 1.169a2.622 2.622 0 0 0-2.62-2.62 2.622 2.622 0 0 0-2.619 2.62 2.622 2.622 0 0 0 2.62 2.62 2.622 2.622 0 0 0 2.619-2.62Zm-.762 0a1.86 1.86 0 0 1-1.857 1.858 1.86 1.86 0 0 1-1.858-1.858 1.86 1.86 0 0 1 1.857-1.858 1.86 1.86 0 0 1 1.858 1.858Zm-2.424 0c0-.312.254-.567.567-.567a.381.381 0 0 0 0-.761 1.33 1.33 0 0 0-1.329 1.328.381.381 0 0 0 .762 0Zm8.096.769c.414-.43.41-1.12-.008-1.546l-.693-.758a.38.38 0 0 0-.537-.024.38.38 0 0 0-.024.537l.698.764.012.012c.133.133.135.35.005.485-.124.129-3.088 3.151-7.177 3.151-2.412 0-4.694-1.058-6.781-3.146a.347.347 0 0 1-.005-.486c.124-.128 3.087-3.15 7.177-3.15.264 0 .531.012.797.04a.38.38 0 0 0 .076-.757 8.706 8.706 0 0 0-.873-.044c-4.41 0-7.592 3.246-7.725 3.384a1.113 1.113 0 0 0 .014 1.552c2.237 2.236 4.7 3.37 7.32 3.37 4.408 0 7.592-3.246 7.725-3.384h-.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgBiocompatibleWithYourEye
