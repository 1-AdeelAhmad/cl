import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgNoPrescriptionNeededRx2 = (props: SvgIconProps) => {
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
        d="M18.028 19.84H6.07a.391.391 0 0 1-.391-.391V4.23c0-.216.175-.391.391-.391h2.174a.391.391 0 0 1 0 .782H6.464v14.434h11.172V4.623h-1.781a.391.391 0 0 1 0-.782h2.174c.216 0 .39.175.39.391V19.45a.391.391 0 0 1-.39.391h-.001ZM14.615 6.405V4.231a.391.391 0 0 0-.39-.391h-4.35a.391.391 0 0 0-.39.391v2.174c0 .216.175.392.39.392h4.35a.391.391 0 0 0 .39-.392Zm-4.348-1.781h3.565v1.39h-3.565v-1.39Zm-1.349 9.878h1.256V12.98h.45l.834 1.522h1.424l-1.01-1.78c.519-.26.876-.716.876-1.445v-.035c0-.497-.154-.876-.427-1.15-.316-.323-.813-.498-1.473-.498H8.919v4.91-.002Zm1.256-2.524v-1.284h.617c.42 0 .687.21.687.631v.015c0 .392-.252.638-.68.638h-.625Zm3.594.686h-.84l.691 1.204-.705 1.226h.821l.324-.646.319.646h.84l-.71-1.23.691-1.2h-.822l-.31.62-.301-.62h.002Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgNoPrescriptionNeededRx2
