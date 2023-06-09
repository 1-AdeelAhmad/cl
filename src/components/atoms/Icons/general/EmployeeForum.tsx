import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgEmployeeForum = (props: SvgIconProps) => {
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
        d="M11.84 6.61c1.057 0 1.915.86 1.915 1.915 0 1.055-.86 1.915-1.914 1.915a1.918 1.918 0 0 1-1.915-1.915c0-1.055.86-1.914 1.915-1.914Zm0-.809a2.725 2.725 0 1 0 .001 5.45 2.725 2.725 0 0 0 0-5.45Zm5.968 11.7a5.974 5.974 0 0 0-5.967-5.968A5.974 5.974 0 0 0 5.874 17.5a.405.405 0 0 0 .81 0 5.163 5.163 0 0 1 5.157-5.157 5.163 5.163 0 0 1 5.157 5.157.405.405 0 0 0 .81 0Zm2.032-4.252a3.684 3.684 0 0 0-4.703-3.535.347.347 0 0 0 .192.666 2.988 2.988 0 0 1 3.816 2.869.347.347 0 1 0 .694 0h.001Zm-3.565-6.754c.5 0 .907.407.907.907s-.408.907-.907.907a.908.908 0 0 1-.907-.907c0-.5.407-.907.907-.907Zm0-.694a1.6 1.6 0 1 0 0 3.202 1.6 1.6 0 0 0 0-3.202Zm-11.74 7.447a2.99 2.99 0 0 1 3.815-2.87.346.346 0 1 0 .192-.666 3.684 3.684 0 0 0-4.702 3.535.347.347 0 1 0 .694 0h.001Zm2.871-6.754c.5 0 .907.407.907.907s-.407.907-.907.907a.908.908 0 0 1-.906-.907c0-.5.407-.907.906-.907Zm0-.694a1.6 1.6 0 1 0 0 3.202 1.6 1.6 0 0 0 0-3.202Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgEmployeeForum
