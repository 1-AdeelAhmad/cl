import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgUploadToTheCloud = (props: SvgIconProps) => {
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
        d="m14.539 12.598-2.117-2.117v7.49a.321.321 0 0 1-.642 0v-7.5l-2.113 2.113a.32.32 0 1 1-.454-.454l2.655-2.655a.32.32 0 0 1 .454 0l2.67 2.67a.32.32 0 0 1-.228.547.322.322 0 0 1-.227-.094h.002Zm1.236-5.527h-.02A5.337 5.337 0 0 0 11.542 5a5.312 5.312 0 0 0-5.19 4.16A3.26 3.26 0 0 0 4 12.278a3.247 3.247 0 0 0 3.243 3.243H9.27a.321.321 0 0 0 0-.642H7.243a2.604 2.604 0 0 1-2.601-2.6c0-1.218.863-2.287 2.052-2.543a.32.32 0 0 0 .249-.257 4.67 4.67 0 0 1 4.6-3.837c1.497 0 2.915.726 3.793 1.942a.319.319 0 0 0 .274.132c.055-.002.11-.004.165-.004a3.588 3.588 0 0 1 3.583 3.584 3.587 3.587 0 0 1-3.584 3.583h-.846a.321.321 0 0 0 0 .642h.846A4.23 4.23 0 0 0 20 11.296a4.23 4.23 0 0 0-4.226-4.226l.001.001Zm-4.074-.218a.321.321 0 0 0-.32-.321 3.772 3.772 0 0 0-3.585 2.585.32.32 0 1 0 .608.202 3.13 3.13 0 0 1 2.975-2.146c.177 0 .321-.144.321-.321h.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgUploadToTheCloud
