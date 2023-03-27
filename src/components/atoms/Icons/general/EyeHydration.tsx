import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgEyeHydration = (props: SvgIconProps) => {
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
        d="M12.295 15.35a2.676 2.676 0 0 1-2.673-2.674c0-1.475 1.199-2.674 2.673-2.674 1.475 0 2.674 1.2 2.674 2.674s-1.2 2.674-2.674 2.674Zm0-4.57c-1.046 0-1.896.85-1.896 1.896 0 1.046.85 1.896 1.896 1.896 1.046 0 1.897-.85 1.897-1.896 0-1.046-.85-1.897-1.897-1.897Zm-.578 1.896a.58.58 0 0 1 .578-.579.389.389 0 0 0 0-.777c-.747 0-1.355.608-1.355 1.356a.39.39 0 0 0 .777 0Zm8.264.785a1.136 1.136 0 0 0-.008-1.578l-.707-.774a.387.387 0 0 0-.548-.024.387.387 0 0 0-.025.548l.713.78.012.012a.355.355 0 0 1 .005.495c-.127.131-3.153 3.217-7.326 3.217-2.462 0-4.792-1.08-6.922-3.213a.355.355 0 0 1-.005-.495c.127-.13 3.151-3.216 7.326-3.216a8 8 0 0 1 .813.04.389.389 0 0 0 .078-.772 8.886 8.886 0 0 0-.89-.045c-4.502 0-7.751 3.314-7.886 3.455a1.136 1.136 0 0 0 .014 1.584c2.283 2.283 4.797 3.44 7.472 3.44 4.5 0 7.75-3.313 7.885-3.454Zm-3.348-1.738a1.921 1.921 0 0 1-1.784-1.141 2.047 2.047 0 0 1 .199-2.057l1.264-1.74a.392.392 0 0 1 .34-.16.398.398 0 0 1 .302.16l1.263 1.74c.432.594.508 1.382.199 2.056a1.92 1.92 0 0 1-1.785 1.141l.002.001Zm0-4.035-.946 1.301c-.264.365-.31.848-.12 1.263.18.39.535.643.95.676.078.007.156.007.233 0a1.14 1.14 0 0 0 .95-.676c.19-.414.144-.898-.12-1.263l-.947-1.3Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgEyeHydration