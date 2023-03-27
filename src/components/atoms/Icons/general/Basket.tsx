import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgBasket = (props: SvgIconProps) => {
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
        d="M18.791 9.622h-.8l-2.85-4.469a.33.33 0 1 0-.557.355l2.622 4.114H6.864l2.623-4.114a.33.33 0 1 0-.558-.355L6.08 9.622h-.871A1.21 1.21 0 0 0 4 10.831v.092c0 .572.399 1.051.933 1.176l.982 5.4c.003.021.009.041.017.061a1.747 1.747 0 0 0 1.617 1.108h8.9c.711 0 1.361-.445 1.618-1.108.059-.15.567-2.997 1.001-5.462A1.21 1.21 0 0 0 20 10.922v-.092a1.21 1.21 0 0 0-1.209-1.209v.001Zm.547 1.301a.548.548 0 0 1-.547.547h-.006a.33.33 0 0 0-.325.274c-.37 2.103-.94 5.303-1.013 5.59a1.081 1.081 0 0 1-.997.672h-8.9c-.43 0-.824-.264-.99-.658l-.949-5.216h11.19a.331.331 0 0 0 0-.662H5.21a.548.548 0 0 1-.547-.547v-.092c0-.302.245-.547.547-.547H18.79c.302 0 .547.245.547.547v.092Zm-9.725 5.659a.332.332 0 0 1-.652.113l-.542-3.138a.332.332 0 0 1 .652-.113l.542 3.138Zm5.97-3.026-.543 3.139a.33.33 0 1 1-.652-.114l.542-3.138a.331.331 0 0 1 .652.113ZM12.33 13.5v3.139a.331.331 0 0 1-.661 0v-3.139a.331.331 0 0 1 .661 0Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgBasket
