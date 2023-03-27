import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgWarningSign = (props: SvgIconProps) => {
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
        d="M12 20c-4.412 0-8-3.589-8-8 0-4.41 3.588-8 8-8 4.411 0 7.999 3.589 7.999 8 0 4.41-3.59 7.999-8 7.999V20Zm0-15.225c-3.985 0-7.225 3.241-7.225 7.224 0 3.984 3.241 7.225 7.224 7.225 3.984 0 7.225-3.241 7.225-7.225 0-3.983-3.241-7.224-7.225-7.224Zm-1.052 11.431c0-.346.09-.608.27-.786.18-.177.443-.265.787-.265.344 0 .59.09.773.272.182.181.273.441.273.78 0 .337-.092.581-.277.77-.184.187-.44.28-.769.28s-.597-.091-.782-.275c-.184-.183-.276-.443-.276-.776Zm1.724-1.857h-1.325l-.276-7.607h1.88l-.277 7.607h-.002Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgWarningSign
