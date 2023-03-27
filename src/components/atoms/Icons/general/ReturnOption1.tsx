import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgReturnOption1 = (props: SvgIconProps) => {
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
        d="M11.662 13.999c.273.946.16 1.941-.317 2.802A3.664 3.664 0 0 1 9.14 18.56a3.685 3.685 0 0 1-3.011-.441.384.384 0 1 1 .416-.648 2.914 2.914 0 0 0 4.128-1.043c.377-.682.466-1.47.25-2.217a2.894 2.894 0 0 0-1.391-1.745 2.899 2.899 0 0 0-2.218-.25 2.922 2.922 0 0 0-2.085 2.448.383.383 0 0 1 .416.075.384.384 0 0 1 .019.565l-.567.564a.386.386 0 0 1-.272.113.408.408 0 0 1-.285-.117l-.564-.563a.378.378 0 0 1-.091-.145.413.413 0 0 1-.013-.214.386.386 0 0 1 .577-.25 3.696 3.696 0 0 1 2.652-3.215 3.654 3.654 0 0 1 2.802.316A3.664 3.664 0 0 1 11.663 14Zm8.148-7.416v8.537c0 .602-.49 1.093-1.093 1.093h-5.944a.385.385 0 0 1 0-.77h5.944a.324.324 0 0 0 .323-.323V8.88H4.58v2.599a.385.385 0 0 1-.77 0V6.583c0-.602.49-1.093 1.093-1.093h13.814c.602 0 1.093.49 1.093 1.093Zm-.77 1.527V6.583a.324.324 0 0 0-.323-.323H4.903a.324.324 0 0 0-.323.323V8.11H19.04Zm-3.887 6.387a.275.275 0 0 1-.275-.275v-1.741c0-.152.123-.275.275-.275h2.752c.152 0 .275.123.275.275v1.741a.275.275 0 0 1-.275.275h-2.752Zm.275-.55h2.202v-1.191h-2.202v1.191Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgReturnOption1
