import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
const SvgMyPrescriptions = (props: SvgIconProps) => {
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
        d="M19.881 8.963a.333.333 0 0 0-.319-.237H18.27c.287-.632.613-1.108.987-1.353a.334.334 0 0 0-.183-.612h-1.212c.256-.648.555-1.122.903-1.352a.334.334 0 0 0-.182-.612h-2.068v-.158a.39.39 0 0 0-.388-.389H4.339a.39.39 0 0 0-.389.389V19.86a.39.39 0 0 0 .389.389h11.785a.39.39 0 0 0 .39-.389v-.51c.093-.817.304-2.455.674-4.183.676-3.161 1.56-5.178 2.556-5.831a.334.334 0 0 0 .137-.375v.001ZM18.26 7.428c-.283.374-.546.868-.786 1.479a13.912 13.912 0 0 0-.44 1.337c.157-1.05.353-2.017.596-2.816h.63Zm-.466-1.965c-.533.757-.957 2.024-1.28 3.82v-3.82h1.28Zm-2.058 14.01H4.728V5.027h11.008v14.444Zm1.507-7.12c.204-1.089.454-2.115.758-2.962h.711c-.544.651-1.034 1.641-1.468 2.961ZM5.914 13.445a.39.39 0 0 1 .39-.39h7.856a.39.39 0 0 1 0 .778H6.303a.39.39 0 0 1-.389-.388Zm0 1.964a.39.39 0 0 1 .39-.389h7.856a.39.39 0 0 1 0 .778H6.303a.39.39 0 0 1-.389-.389Zm0 1.964a.39.39 0 0 1 .39-.388h7.856a.39.39 0 0 1 0 .777H6.303a.39.39 0 0 1-.389-.389Zm1.724-6.926h1.228v1.236a.39.39 0 0 0 .388.39h1.957a.39.39 0 0 0 .389-.39v-1.246h1.227a.39.39 0 0 0 .389-.39V8.104a.39.39 0 0 0-.39-.389H11.6V6.477a.39.39 0 0 0-.389-.39h-.002l-1.945.01a.387.387 0 0 0-.386.389v1.237h-1.24a.39.39 0 0 0-.388.39v1.946a.39.39 0 0 0 .389.389ZM8.027 8.5h1.239a.39.39 0 0 0 .388-.389v-1.24l1.167-.005v1.235a.388.388 0 0 0 .389.39h1.228V9.66H11.21a.39.39 0 0 0-.389.389v1.247H9.643v-1.237a.39.39 0 0 0-.389-.389H8.027V8.501Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}
export default SvgMyPrescriptions