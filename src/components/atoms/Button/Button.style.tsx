import {
  Button as MuiButton,
  buttonClasses as MuiButtonClasses,
  styled,
} from '@mui/material'

export const StyledButton = styled(MuiButton)(({ theme }) => ({
  [`&.${MuiButtonClasses.root}`]: {
    borderRadius: 8,
  },

  //  Disabled
  [`&.${MuiButtonClasses.disabled}`]: {
    color: theme.palette.neutral.tones[60],
  },

  //  Medium size
  [`&.${MuiButtonClasses.sizeMedium}`]: {
    padding: theme.spacing(4, 8),
  },

  //  Large size (set the same as medium since the DS doesn't have a large size)
  [`&.${MuiButtonClasses.sizeLarge}`]: {
    padding: theme.spacing(4, 8),
  },

  //  Small size
  [`&.${MuiButtonClasses.sizeSmall}`]: {
    padding: theme.spacing(3, 8),
  },
}))
