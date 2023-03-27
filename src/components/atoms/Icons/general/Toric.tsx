import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgToric = (props: SvgIconProps) => {
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
        d="M18.326 15a7 7 0 0 1-12.652 0c.213-.448.472-.87.772-1.26l-.793-.61c-.154.2-.298.407-.432.62a7 7 0 1 1 13.559 0 8.004 8.004 0 0 0-.433-.62l-.793.61a7 7 0 0 1 .773 1.26ZM20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-1c.31 0 .616.02.915.06l.13-.992a8.078 8.078 0 0 0-2.09 0l.13.991c.299-.039.604-.059.915-.059Zm4.26 1.446a6.988 6.988 0 0 0-1.58-.915l.382-.924c.65.27 1.258.623 1.808 1.046l-.61.793Zm-6.94-.915c-.568.236-1.099.544-1.581.915l-.61-.793a7.993 7.993 0 0 1 1.809-1.046l.383.924Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgToric
