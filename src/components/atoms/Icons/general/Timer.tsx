import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgTimer = (props: SvgIconProps) => {
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
        d="M13.152 6.6v-.32h.072c.515-.001.935-.42.935-.936v-.08a.936.936 0 0 0-.935-.934h-2.2a.936.936 0 0 0-.935.935v.08c0 .515.42.934.935.934h.071v.32c-3.32.499-5.875 3.37-5.875 6.827a6.912 6.912 0 0 0 6.904 6.904 6.912 6.912 0 0 0 6.904-6.904c0-3.457-2.555-6.328-5.875-6.827Zm-1.667-1.102h-.462a.154.154 0 0 1-.154-.154v-.08c0-.084.069-.153.154-.153h2.2c.085 0 .154.07.154.154v.08c0 .084-.07.153-.154.153h-.462a.39.39 0 0 0-.39.39v.641c-.083-.003-.166-.007-.248-.007-.083 0-.165.004-.248.007v-.64a.39.39 0 0 0-.39-.39Zm.638 14.052A6.13 6.13 0 0 1 6 13.427a6.13 6.13 0 0 1 6.123-6.123 6.13 6.13 0 0 1 6.123 6.123 6.13 6.13 0 0 1-6.123 6.123Zm3.696-9.835a.39.39 0 0 1 0 .553l-3.42 3.42a.39.39 0 0 1-.427.084.39.39 0 0 1-.24-.36V8.578a.39.39 0 0 1 .78 0v3.89l2.754-2.753a.39.39 0 0 1 .552 0h.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgTimer
