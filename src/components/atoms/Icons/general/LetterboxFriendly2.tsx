import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgLetterboxFriendly2 = (props: SvgIconProps) => {
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
        d="m19.496 12.706-.002-.001L7.187 3.966a.413.413 0 0 0-.24-.076H4.254a.415.415 0 0 0-.24.751l2.262 1.611-.001.016v3.435c0 .357.177.69.473.89l.456.31-3.142 1.978a.412.412 0 0 0-.206.356l.003 2.631c0 .137.069.266.182.342l5.315 3.608.015.009.024.014.005.002a.44.44 0 0 0 .083.033c.006 0 .01.002.016.003a.383.383 0 0 0 .177 0c.005-.001.012-.002.017-.005a.447.447 0 0 0 .081-.03c.006-.002.01-.005.015-.008l.033-.019 5.48-3.734 3.39 2.187a.72.72 0 0 0 1.115-.588v-4.396a.704.704 0 0 0-.31-.583v.003ZM5.55 4.718h1.267l11.08 7.866-1.372-.047L5.55 4.717Zm1.553 4.985V6.841l3.075 2.19-2.207 1.39-.758-.512a.248.248 0 0 1-.11-.206Zm3.735-.11a.424.424 0 0 0 .061-.047l1.767 1.26L6.81 14.43l-1.776-1.184 5.803-3.654Zm-1.66 9.105L4.686 15.65l-.002-1.64 1.594 1.062v.76a.414.414 0 0 0 .827 0v-.208l2.077 1.384-.005 1.69Zm.418-2.41-2.027-1.351 5.829-3.61 1.705 1.214-5.507 3.747Zm.41 2.405.005-1.687 5.81-3.953.324.23a.407.407 0 0 0 .226.077l1.388.049-7.755 5.284h.001Zm8.972-1.22-2.934-1.894 2.934-1.999v3.893Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgLetterboxFriendly2
