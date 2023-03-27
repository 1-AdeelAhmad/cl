import { styled } from '@mui/material'
import Button from '../Button'

export const StyledSecondaryButton = styled(Button)(({ theme }) => ({
  //  Contained Success Variant
  ['&.MuiButton-containedSuccess']: {
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.success.tones[70],
    },
    '&:disabled': {
      color: theme.palette.neutral.tones[60],
      backgroundColor: theme.palette.background[3],
    },
  },

  //  Outlined Success Variant
  ['&.MuiButton-outlinedSuccess']: {
    border: `1px solid ${theme.palette.neutral.tones[60]}`,
    color: theme.palette.success.tones[40],
    '&:hover': {
      backgroundColor: theme.palette.success.tones[99],
    },
    '&:focus': {
      borderColor: theme.palette.success.main,
    },
    '&:disabled': {
      color: theme.palette.neutral.tones[60],
      borderColor: theme.palette.neutral.tones[90],
    },
  },

  //  Text Variant
  ['&.MuiButton-textSuccess']: {
    color: theme.palette.success.tones[40],
    '&:hover': {
      backgroundColor: theme.palette.success.tones[99],
    },
  },
}))
