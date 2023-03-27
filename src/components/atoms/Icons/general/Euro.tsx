import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgEuro = (props: SvgIconProps) => {
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
        d="M18.47 16.98a.368.368 0 0 0-.505.121c-1.035 1.687-2.557 2.653-4.176 2.653-2.497 0-4.602-2.283-5.223-5.377h5.48a.368.368 0 0 0 0-.735H8.448a9.783 9.783 0 0 1-.003-2.292h5.6a.368.368 0 0 0 0-.735H8.561c.617-3.1 2.725-5.39 5.226-5.39 1.618 0 3.141.967 4.176 2.653a.368.368 0 0 0 .627-.384c-1.172-1.91-2.923-3.004-4.803-3.004-2.893 0-5.323 2.616-5.973 6.126H5.517a.368.368 0 0 0 0 .735h2.19a10.348 10.348 0 0 0 0 2.292h-2.19a.368.368 0 0 0 0 .735h2.3c.654 3.503 3.082 6.112 5.97 6.112 1.88 0 3.631-1.094 4.803-3.004a.367.367 0 0 0-.122-.505l.002-.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgEuro
