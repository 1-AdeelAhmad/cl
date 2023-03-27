import {
  styled,
  buttonClasses as MuiFilterButtonsClasses,
  svgIconClasses as MuiSvgIconClasses,
} from '@mui/material'
import Button from '../Button'

export const StyledFilterButton = styled(Button)(({ theme }) => ({
  [`&.${MuiFilterButtonsClasses.root}`]: {
    border: `1px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(2.5, 8),

    ['&:hover']: {
      backgroundColor: theme.palette.secondary.tones[40],
    },
  },

  [`& .${MuiFilterButtonsClasses.startIcon} .${MuiSvgIconClasses.root}`]: {
    fontSize: 32,

    [theme.breakpoints.up('md')]: {
      fontSize: 36,
    },
  },
}))
