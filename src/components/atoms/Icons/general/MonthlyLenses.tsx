import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgMonthlyLenses = (props: SvgIconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.13 3.6c.221 0 .4.18.4.4v.985h7.227V4a.4.4 0 0 1 .8-.001v.985h1.93a1.2 1.2 0 0 1 1.2 1.2V19.2a1.2 1.2 0 0 1-1.2 1.2H5.8a1.2 1.2 0 0 1-1.2-1.2V6.185a1.2 1.2 0 0 1 1.2-1.2h1.93V4c0-.221.18-.401.4-.401Zm7.627 2.185v1.152a.4.4 0 1 0 .8-.001V5.785h1.93c.22 0 .4.18.4.4V19.2a.4.4 0 0 1-.4.4H5.8a.4.4 0 0 1-.4-.4V9.595a.404.404 0 0 0 .053.004H16.45a.4.4 0 0 0 0-.8H5.453a.404.404 0 0 0-.053.003V6.185a.4.4 0 0 1 .4-.4h1.93v1.152a.4.4 0 1 0 .8-.001V5.785h7.227Zm.606 9.594c.073-.365.11-.777.11-1.238 0-.618-.07-1.145-.211-1.582-.138-.44-.352-.776-.64-1.008-.287-.235-.652-.352-1.095-.352-.468 0-.845.117-1.129.352-.283.234-.49.571-.617 1.011-.125.438-.187.964-.187 1.579 0 .614.069 1.142.207 1.582.138.437.35.773.636 1.007.287.232.65.348 1.09.348.352 0 .651-.066.899-.2a1.56 1.56 0 0 0 .601-.577c.154-.253.266-.56.336-.922Zm-2.75-.031a6.504 6.504 0 0 1-.093-1.207c0-.48.03-.88.093-1.204.065-.322.17-.565.317-.726.148-.164.347-.246.597-.246s.45.082.598.246c.148.161.255.404.32.726.065.323.098.725.098 1.204 0 .484-.034.888-.102 1.21-.065.323-.171.564-.32.723-.148.16-.346.238-.594.238-.247 0-.445-.079-.593-.238-.149-.161-.256-.403-.32-.726Zm-2.093-2.082c.104-.19.156-.414.156-.672 0-.422-.16-.758-.477-1.008-.317-.253-.77-.379-1.355-.379-.399 0-.748.056-1.047.168-.3.112-.557.249-.774.41l.442.637c.12-.078.246-.151.379-.219s.277-.124.433-.168a1.96 1.96 0 0 1 .528-.066c.312 0 .548.069.707.207.159.135.238.325.238.57a.885.885 0 0 1-.137.492c-.088.14-.233.252-.433.332-.2.078-.466.117-.797.117h-.508v.739h.504c.346 0 .629.032.848.097.22.066.384.163.488.293.107.13.16.297.16.5 0 .316-.102.563-.305.743-.203.177-.543.265-1.02.265a3.36 3.36 0 0 1-.777-.097A3.639 3.639 0 0 1 8 15.949v.817c.237.109.487.188.75.238.266.05.553.074.863.074.516 0 .938-.074 1.266-.223.328-.148.572-.351.73-.609.16-.26.239-.556.239-.887 0-.377-.118-.68-.352-.91-.232-.229-.575-.372-1.031-.43v-.027c.237-.052.445-.138.625-.258.182-.122.325-.278.43-.468Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgMonthlyLenses