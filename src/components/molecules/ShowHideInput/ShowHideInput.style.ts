import {
  styled,
  IconButton as MuiIconButton,
  iconButtonClasses as MuiIconButtonClasses,
} from '@mui/material'

export const StyledIconButton = styled(MuiIconButton)(({ theme }) => ({
  [`&.${MuiIconButtonClasses.root}`]: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    color: theme.palette.text.primary,

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  [`&.${MuiIconButtonClasses.disabled}`]: {
    color: theme.palette.neutral.tones[50],
  },
}))
