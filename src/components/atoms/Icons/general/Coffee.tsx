import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgCoffee = (props: SvgIconProps) => {
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
        d="M18.721 10.27h-1.294V9a.774.774 0 0 0-.773-.773H4.674A.774.774 0 0 0 3.901 9v1.993c0 3.336 2.717 7.216 6.22 7.216h1.058c3.492 0 6.204-3.833 6.247-7.165h1.296c.223 0 .411.139.411.303v1.02c0 1.327-.757 1.327-1.007 1.327h-.168a.387.387 0 0 0 0 .773h.168c1.115 0 1.78-.785 1.78-2.101v-1.02c0-.594-.53-1.077-1.185-1.077Zm-3.698 5.093c-1.082 1.336-2.447 2.071-3.845 2.071H10.12c-1.389 0-2.747-.732-3.823-2.062-1.004-1.24-1.607-2.855-1.622-4.328h7.652a.387.387 0 0 0 0-.773H4.675V9.003h11.98v1.27h-2.348a.387.387 0 0 0 0 .772h2.345c-.021 1.473-.625 3.08-1.63 4.32v-.002ZM7.59 7.598a.39.39 0 0 1-.258-.098 1.312 1.312 0 0 1-.427-1.047c.015-.366.17-.707.427-.933a.545.545 0 0 0 .165-.408.547.547 0 0 0-.165-.407.389.389 0 1 1 .514-.583c.272.24.428.6.428.99 0 .388-.157.749-.428.989a.528.528 0 0 0-.164.38.55.55 0 0 0 .164.434.389.389 0 0 1-.256.68v.003Zm3.077 0a.39.39 0 0 1-.258-.098c-.272-.24-.427-.6-.427-.99 0-.388.156-.75.427-.99a.545.545 0 0 0 .166-.407.547.547 0 0 0-.166-.407.389.389 0 1 1 .515-.583c.272.24.427.6.427.99 0 .388-.156.749-.427.989a.544.544 0 0 0-.166.406c0 .163.062.316.166.408a.389.389 0 0 1-.257.68v.002Zm3.078 0a.39.39 0 0 1-.258-.098c-.272-.24-.429-.6-.428-.99 0-.388.157-.75.428-.99a.545.545 0 0 0 .165-.407.547.547 0 0 0-.165-.407.389.389 0 1 1 .514-.583c.272.24.428.6.428.99 0 .388-.157.749-.428.989a.544.544 0 0 0-.165.406c0 .163.062.316.165.408a.389.389 0 0 1-.257.68v.002Zm-3.082 12.426c-3.92 0-6.764-1.203-6.764-2.86 0-.45.048-.966.612-1.396a.377.377 0 0 1 .456.6c-.294.223-.315.45-.315.797 0 1.017 2.416 2.106 6.01 2.106 3.596 0 6.011-1.09 6.011-2.107 0-.346-.02-.573-.315-.797a.376.376 0 1 1 .456-.599c.612.467.612 1.049.612 1.396 0 1.657-2.844 2.86-6.763 2.86Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgCoffee