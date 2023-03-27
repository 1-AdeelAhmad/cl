import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgLetterboxFriendly1 = (props: SvgIconProps) => {
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
        d="M19.644 10.682 9.596 4.147a.782.782 0 0 0-.8-.03.753.753 0 0 0-.398.66v4.255L4.202 11.66a.416.416 0 0 0-.212.363l.004 2.865c0 .139.07.268.185.346l5.766 3.884a.515.515 0 0 0 .036.023.415.415 0 0 0 .091.034l.016.003a.395.395 0 0 0 .18 0l.016-.003a.466.466 0 0 0 .082-.031c.006-.002.01-.006.016-.009l.03-.017 5.788-3.88 2.592 1.697a.777.777 0 0 0 .8.03.753.753 0 0 0 .398-.66v-4.995a.752.752 0 0 0-.344-.63l-.002.002ZM9.242 4.923l2.805 1.824-2.805 1.758V4.923Zm3.579 2.328 4.912 3.195-7.542 4.893-5.004-3.306 7.634-4.78V7.25ZM4.828 12.8l4.941 3.265-.008 1.924-4.93-3.322-.003-1.867Zm5.778 3.269 7.894-5.122.644.418v.894L10.6 17.986l.007-1.92v.002Zm6.353-1.337 2.186-1.465v2.895l-2.186-1.43Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgLetterboxFriendly1
