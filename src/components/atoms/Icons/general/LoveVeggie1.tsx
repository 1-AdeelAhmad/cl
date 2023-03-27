import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgLoveVeggie1 = (props: SvgIconProps) => {
  const { ...other } = props
  return (
    <SvgIcon
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path
        d="M17.25 10.2c-.183-.274-.256-.66-.28-1.015-.06-.913-.821-1.65-1.736-1.622-.754.023-1.492.399-1.942 1.098l-6.07 9.437c-.312.485-.272 1.134.133 1.545l.02.02c.41.401 1.054.443 1.537.132l9.446-6.067a2.394 2.394 0 0 0 .399-3.708l-.306-.342L20 8.646c-1.29-.516-1.549-1.549-1.549-1.549l-.516.775M9.412 16.95l.652.654M11.806 13.684l1.09 1.09M13.984 10.2l1.742 1.743M15.073 14.12l1.029 1.057M12.024 16.515l.75.8M15.197 6.064C14.758 4.856 13.657 4 12.367 4c-1.15 0-2.115.587-2.666 1.566C9.149 4.588 8.185 4 7.034 4 5.36 4 4 5.446 4 7.23c0 2.37 2.44 4.865 4.128 6.307"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}
export default SvgLoveVeggie1
