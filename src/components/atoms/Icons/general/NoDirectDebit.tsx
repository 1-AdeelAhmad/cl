import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgNoDirectDebit = (props: SvgIconProps) => {
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
        d="M18.438 9.784H4.642c-.602 0-1.092.49-1.092 1.091v8.526c0 .602.49 1.091 1.092 1.091h13.795c.602 0 1.092-.49 1.092-1.091v-8.526c0-.601-.49-1.091-1.091-1.091Zm-13.796.768h13.796c.178 0 .323.146.323.323v.78H4.319v-.78c0-.178.145-.322.323-.322Zm13.796 9.17H4.642a.323.323 0 0 1-.323-.323v-6.975h14.44V19.4a.323.323 0 0 1-.323.323h.002Zm-4.403-5.603a.383.383 0 0 1 .005.08v.011a.276.276 0 0 1-.274.258h-.374c.355.421.55.948.55 1.505 0 .625-.244 1.213-.686 1.655a2.347 2.347 0 0 1-2.023.657.276.276 0 0 1-.229-.315.276.276 0 0 1 .314-.228 1.796 1.796 0 0 0 1.55-.502c.338-.338.523-.788.523-1.265 0-.407-.136-.791-.383-1.106v.354a.275.275 0 0 1-.274.275.272.272 0 0 1-.15-.044.282.282 0 0 1-.132-.237v-1.025c.001-.017.003-.033.007-.049a.304.304 0 0 1 .086-.163c.05-.05.12-.077.19-.077l1.03-.002c.131 0 .243.093.269.222v-.004Zm-3.451 2.206c.039.053.059.117.053.183v1.03a.275.275 0 0 1-.274.274H9.325a.275.275 0 0 1-.249-.158l-.003-.006a.274.274 0 0 1 .12-.362.301.301 0 0 1 .143-.037h.307a2.325 2.325 0 0 1-.379-1.277 2.343 2.343 0 0 1 2.519-2.333.274.274 0 1 1-.042.547 1.787 1.787 0 0 0-1.657 2.727v-.424c0-.111.066-.21.163-.252a.277.277 0 0 1 .339.085l-.002.003Zm7.043.834h-2.064a.275.275 0 0 0-.275.274v1.293c0 .152.123.275.275.275h2.064a.275.275 0 0 0 .274-.275v-1.293a.275.275 0 0 0-.274-.274Zm-.275 1.293h-1.515v-.744h1.515v.744Zm-3.661-10.53a.384.384 0 0 1-.272.655.386.386 0 0 1-.273-.112L11.76 7.08l-1.386 1.386a.384.384 0 0 1-.545 0 .384.384 0 0 1 0-.543l1.386-1.387L9.83 5.15a.384.384 0 1 1 .544-.544l1.386 1.387 1.386-1.387a.384.384 0 1 1 .544.544l-1.386 1.386 1.386 1.387h.002Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgNoDirectDebit
