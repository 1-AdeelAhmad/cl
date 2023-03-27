import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgDelete = (props: SvgIconProps) => {
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
        d="M17.077 7.815v9.296c0 1.61-1.31 2.919-2.919 2.919H8.886c-1.61 0-2.92-1.31-2.92-2.92V7.816a.388.388 0 0 1 .777 0v9.296c0 1.182.961 2.143 2.143 2.143h5.272a2.145 2.145 0 0 0 2.143-2.143V7.815a.389.389 0 0 1 .776 0Zm1.477-1.707a.389.389 0 0 1-.388.388H4.878a.388.388 0 0 1 0-.776h4.926V4.418c0-.214.174-.388.388-.388h2.661c.214 0 .388.174.388.388V5.72h4.926c.214 0 .388.174.388.388ZM10.58 5.72h1.885v-.914H10.58v.914Zm1.33 11.11V9.952a.389.389 0 0 0-.775 0v6.878a.388.388 0 0 0 .776 0Zm-2.583 0V9.952a.388.388 0 0 0-.776 0v6.878a.388.388 0 0 0 .776 0Zm5.168 0V9.952a.388.388 0 0 0-.776 0v6.878a.389.389 0 0 0 .776 0Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgDelete
