import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgEyeCareVisible = (props: SvgIconProps) => {
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
        d="M12.428 8.87c2.14 0 4.56.816 7.01 3.266 0 0-3.15 3.266-7.43 3.266-2.139 0-4.56-.816-7.01-3.266 0 0 3.152-3.266 7.43-3.266Zm0-.78c-4.558 0-7.853 3.362-7.991 3.505a.78.78 0 0 0 .01 1.092c2.319 2.319 4.863 3.495 7.561 3.495 4.559 0 7.854-3.362 7.992-3.505a.78.78 0 0 0-.01-1.092c-2.319-2.319-4.863-3.495-7.562-3.495Zm-.21 6.728a2.684 2.684 0 0 1-2.682-2.682 2.684 2.684 0 0 1 2.682-2.682 2.684 2.684 0 0 1 2.681 2.682 2.684 2.684 0 0 1-2.681 2.682Zm0-4.584c-1.05 0-1.902.853-1.902 1.902s.853 1.902 1.902 1.902a1.904 1.904 0 0 0 1.902-1.902 1.904 1.904 0 0 0-1.902-1.902Zm-.58 1.902c0-.32.26-.58.58-.58a.39.39 0 0 0 0-.78c-.75 0-1.36.61-1.36 1.36a.39.39 0 0 0 .78 0Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgEyeCareVisible
