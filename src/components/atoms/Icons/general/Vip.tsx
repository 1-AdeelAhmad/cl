import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgVip = (props: SvgIconProps) => {
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
        d="M12.36 4.366a2.863 2.863 0 0 1 2.86 2.86 2.863 2.863 0 0 1-2.86 2.86 2.863 2.863 0 0 1-2.86-2.86 2.863 2.863 0 0 1 2.86-2.86Zm0-.776a3.636 3.636 0 1 0 0 7.273 3.636 3.636 0 0 0 0-7.273Zm7.81 15.612c0-4.307-3.503-7.81-7.81-7.81-4.307 0-7.81 3.503-7.81 7.81a.388.388 0 0 0 .776 0 7.042 7.042 0 0 1 7.034-7.034 7.042 7.042 0 0 1 7.035 7.034.388.388 0 0 0 .776 0ZM8.528 15.816h.992l.653 2.206.647-2.206h.972l-1.194 3.562H9.72l-1.194-3.562Zm3.562 0h.91v3.542h-.91v-3.542Zm1.457 0h1.264c.835 0 1.382.435 1.382 1.23v.02c0 .85-.618 1.255-1.392 1.265h-.349v1.026h-.905v-3.542.001Zm1.224 1.77c.319 0 .51-.187.51-.485v-.015c0-.324-.187-.492-.516-.492h-.314v.993h.32Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgVip
