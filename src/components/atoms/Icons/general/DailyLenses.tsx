import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgDailyLenses = (props: SvgIconProps) => {
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
        d="M18.22 5.298h-1.828v-.93a.389.389 0 0 0-.777 0v.93h-6.86v-.93a.389.389 0 0 0-.777 0v.93H6.15c-.634 0-1.15.516-1.15 1.15V18.83c0 .634.516 1.15 1.15 1.15h12.07c.634 0 1.15-.516 1.15-1.15V6.448c0-.634-.516-1.15-1.15-1.15Zm.373 13.532a.374.374 0 0 1-.372.373H6.15a.374.374 0 0 1-.373-.373V9.7c.013.001.028.004.042.004h10.463a.389.389 0 0 0 0-.777H5.82c-.014 0-.028.003-.042.005V6.449c0-.206.168-.373.373-.373h1.828v1.088a.389.389 0 0 0 .777 0V6.076h6.86v1.088a.389.389 0 0 0 .777 0V6.076h1.829c.205 0 .372.167.372.373V18.83v-.001Zm-7.899-5.753c0 .313-.088.553-.267.719-.179.167-.435.25-.773.25h-.538v-1.902h.597c.311 0 .552.082.724.246.172.163.258.393.258.687Zm-.418.01c0-.409-.18-.613-.542-.613H9.52v1.239h.173c.389 0 .583-.209.583-.626Zm1.678.959-.076-.198h-.01a.59.59 0 0 1-.207.175.656.656 0 0 1-.276.05c-.14 0-.25-.04-.33-.12-.08-.08-.12-.194-.12-.341 0-.148.055-.269.162-.342.108-.073.271-.114.489-.122l.252-.008v-.063c0-.148-.076-.221-.227-.221-.116 0-.253.035-.41.105l-.13-.267c.167-.088.353-.131.557-.131.204 0 .345.042.448.127.104.086.157.215.157.388v.969h-.277l-.002-.001Zm-.116-.674-.153.005a.494.494 0 0 0-.258.063c-.056.037-.084.096-.084.174 0 .112.064.168.192.168a.31.31 0 0 0 .22-.08.276.276 0 0 0 .083-.21v-.12Zm.76-1.157c0-.129.071-.194.215-.194.145 0 .217.064.217.194 0 .061-.018.11-.054.143-.037.034-.09.052-.163.052-.144 0-.216-.066-.216-.196v.001Zm.413 1.83h-.396v-1.453h.396v1.454Zm.786 0h-.396v-2.023h.396v2.024Zm.18-1.453h.435l.274.818c.023.07.04.155.048.252h.008c.01-.09.027-.174.055-.252l.27-.818h.425l-.615 1.64a.711.711 0 0 1-.24.341.608.608 0 0 1-.367.113.942.942 0 0 1-.202-.022v-.315a.69.69 0 0 0 .156.016.28.28 0 0 0 .185-.064.425.425 0 0 0 .123-.194l.023-.071-.577-1.444ZM7.966 16.71v-1.902h.403v1.569h.771v.333H7.965Zm2.106.025c-.235 0-.418-.064-.55-.194-.132-.13-.197-.312-.197-.55 0-.237.06-.431.183-.564.122-.134.29-.2.505-.2.214 0 .365.059.48.175.114.117.171.279.171.485v.192h-.938c.005.114.038.201.1.264.062.064.15.096.263.096a1.052 1.052 0 0 0 .493-.116v.308a.97.97 0 0 1-.222.078 1.416 1.416 0 0 1-.288.025v.001Zm-.056-1.225a.251.251 0 0 0-.197.08.368.368 0 0 0-.083.226h.558a.335.335 0 0 0-.077-.226.259.259 0 0 0-.2-.08Zm2.288 1.199h-.396v-.85a.416.416 0 0 0-.056-.236c-.037-.053-.097-.079-.179-.079-.11 0-.19.037-.24.111-.05.075-.075.198-.075.369v.684h-.396v-1.454h.303l.053.186h.022a.427.427 0 0 1 .184-.16.611.611 0 0 1 .264-.054c.168 0 .297.045.385.137.088.093.13.223.13.397v.948Zm1.396-.432a.401.401 0 0 1-.155.34c-.103.078-.259.117-.465.117a1.46 1.46 0 0 1-.271-.02 1.055 1.055 0 0 1-.21-.064v-.328c.073.035.157.064.249.088a.96.96 0 0 0 .244.036c.144 0 .216-.043.216-.125a.107.107 0 0 0-.028-.076.392.392 0 0 0-.1-.067 2.591 2.591 0 0 0-.187-.087 1.153 1.153 0 0 1-.246-.13.36.36 0 0 1-.114-.137.465.465 0 0 1-.036-.19c0-.13.05-.23.15-.3.1-.072.242-.107.426-.107s.345.038.512.114l-.12.287a2.3 2.3 0 0 0-.204-.077.638.638 0 0 0-.195-.03c-.116 0-.175.032-.175.095 0 .036.019.067.057.093.037.025.12.064.247.115.113.046.197.089.25.129a.368.368 0 0 1 .154.324h.001Zm.942.457c-.235 0-.418-.064-.55-.194-.132-.13-.197-.312-.197-.55 0-.237.06-.431.183-.565.122-.133.29-.2.505-.2.214 0 .365.06.48.176.114.117.171.279.171.485v.192h-.938c.005.113.038.201.1.264.063.064.15.096.263.096a1.052 1.052 0 0 0 .493-.116v.308a.975.975 0 0 1-.222.078 1.416 1.416 0 0 1-.288.025v.001Zm-.056-1.225a.251.251 0 0 0-.198.08.368.368 0 0 0-.082.226h.558a.335.335 0 0 0-.077-.226.259.259 0 0 0-.2-.08Zm1.96.767a.401.401 0 0 1-.156.34c-.103.078-.259.117-.465.117a1.45 1.45 0 0 1-.271-.021 1.048 1.048 0 0 1-.21-.063v-.328c.073.035.157.064.249.088a.96.96 0 0 0 .244.036c.144 0 .216-.043.216-.125a.107.107 0 0 0-.028-.076.388.388 0 0 0-.1-.067 2.571 2.571 0 0 0-.187-.087 1.153 1.153 0 0 1-.246-.13.36.36 0 0 1-.114-.137.465.465 0 0 1-.036-.191c0-.129.05-.229.15-.3.1-.07.242-.106.426-.106s.345.037.512.114l-.12.286a2.345 2.345 0 0 0-.204-.076.642.642 0 0 0-.195-.03c-.116 0-.175.032-.175.095 0 .036.019.067.057.092.037.026.12.065.247.116.113.045.197.089.25.129a.367.367 0 0 1 .154.324h.001Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgDailyLenses
