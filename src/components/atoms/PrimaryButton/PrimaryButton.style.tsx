import { styled, buttonClasses as MuiButtonClasses } from '@mui/material'
import Button from '../Button'

export const StyledPrimaryButton = styled(Button)(({ theme }) => ({
  //  Contained Primary Variant
  [`&.${MuiButtonClasses.containedPrimary}`]: {
    '&:hover': {
      backgroundColor: theme.palette.primary.tones[50],
    },
    '&:disabled': {
      backgroundColor: theme.palette.background[3],
    },
  },

  //  Outlined Variant
  [`&.${MuiButtonClasses.outlined}`]: {
    border: `1px solid ${theme.palette.neutral.tones[60]}`,
    '&:hover': {
      backgroundColor: theme.palette.primary.tones[95],
    },
    '&:focus': {
      backgroundColor: theme.palette.primary.tones[90],
    },
    '&:disabled': {
      border: `1px solid ${theme.palette.neutral.tones[90]}`,
    },
  },

  //  Text Variant
  [`&.${MuiButtonClasses.text}`]: {
    '&:hover': {
      backgroundColor: theme.palette.primary.tones[95],
    },
    '&:focus': {
      backgroundColor: theme.palette.primary.tones[90],
    },
  },
}))
