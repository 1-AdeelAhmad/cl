import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgRecycleYourLenses = (props: SvgIconProps) => {
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
        d="M6.944 10.437a.4.4 0 0 1-.376-.27l.002.002-.62-1.779a.387.387 0 0 1 .077-.385.375.375 0 0 1 .298-.144c.168 0 .318.108.374.267l.335.964 2.119-3.67A2.856 2.856 0 0 1 11.618 4c1.013 0 1.958.545 2.465 1.422l1.71 2.96a.383.383 0 0 1 .004.377.384.384 0 0 1-.505.183.38.38 0 0 1-.188-.163l-1.707-2.96a2.058 2.058 0 0 0-3.558 0L7.69 9.542c1.15-.152 1.154-.152 1.176-.152.2 0 .37.151.396.349a.4.4 0 0 1-.345.443l-1.906.251a.18.18 0 0 1-.034.003h-.032Zm11.954 3.314-2.14-3.712 1.192.065a.38.38 0 0 0 .375-.234.398.398 0 0 0-.343-.558l-1.92-.103a.38.38 0 0 0-.135.018.387.387 0 0 0-.241.197l-.779 1.543a.386.386 0 0 0 .019.379.386.386 0 0 0 .275.184.4.4 0 0 0 .42-.214l.447-.884 2.141 3.714c.356.614.347 1.523-.023 2.161-.39.679-1.113 1.134-1.8 1.134h-2.952a.398.398 0 0 0 0 .794h2.952c.974 0 1.952-.6 2.49-1.53.517-.894.526-2.082.022-2.955Zm-7.927 2.118a.385.385 0 0 0-.237-.155l-.016-.003a.383.383 0 0 0-.298.063.403.403 0 0 0-.097.554l.791 1.118H6.85c-.668 0-1.367-.459-1.778-1.169a2.172 2.172 0 0 1 .004-2.135l1.558-2.858a.385.385 0 0 0-.105-.49l-.01-.008a.394.394 0 0 0-.582.127l-1.552 2.84a2.954 2.954 0 0 0 0 2.917c.55.952 1.516 1.567 2.465 1.567h4.269l-.797 1.14a.387.387 0 0 0-.06.307l.005.017a.39.39 0 0 0 .555.257.388.388 0 0 0 .151-.127l1.233-1.766a.401.401 0 0 0-.003-.454l-1.232-1.742Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgRecycleYourLenses
