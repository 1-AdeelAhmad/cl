import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgPdf = (props: SvgIconProps) => {
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
        d="M18.431 6.91a.347.347 0 0 0-.008-.074v-.005a.316.316 0 0 0-.027-.076.314.314 0 0 0-.024-.042l-.002-.005c-.003-.004-.005-.01-.009-.013a.368.368 0 0 0-.042-.051L15.7 4.023a.363.363 0 0 0-.057-.046l-.004-.002a.409.409 0 0 0-.06-.033l-.005-.001-.001-.001a.378.378 0 0 0-.148-.03H6.085a.395.395 0 0 0-.395.395v15.21c0 .218.177.395.395.395h11.95a.396.396 0 0 0 .396-.395V6.91Zm-2.62-1.678L17.11 6.53H15.81V5.232ZM6.465 19.135V4.684h8.571v2.233c0 .214.174.388.388.388h2.233v11.83H6.465Zm3.984-3.377h-.657v1.84h.47v-.533h.182c.402-.005.723-.216.723-.658v-.01c0-.413-.284-.638-.718-.638Zm.245.668c0 .155-.1.253-.266.253h-.166v-.515h.163c.17 0 .268.086.268.255v.007h.001Zm.651-.667h.605c.591 0 .928.357.928.899v.032c0 .541-.34.909-.936.909h-.597v-1.84Zm.61 1.417c.263 0 .439-.155.439-.484v-.023c0-.331-.176-.486-.439-.486h-.136v.993h.136Zm1.144.423h.473v-.681h.7v-.406h-.7v-.327h.779v-.426h-1.252v1.84ZM9.96 5.48a.388.388 0 0 1 0 .775H8.276v1.712a.388.388 0 0 1-.776 0v-2.1c0-.213.174-.387.388-.387H9.96Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgPdf