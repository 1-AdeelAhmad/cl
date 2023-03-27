import {
  Snackbar as MuiSnackbar,
  snackbarClasses as MuiSnackbarClasses,
  styled,
} from '@mui/material'

export const StyledSnackbar = styled(MuiSnackbar)(({ theme }) => ({
  [`&.${MuiSnackbarClasses.root}`]: {
    backgroundColor: theme.palette.neutral.main,
    color: theme.palette.primary.tones[100],
    borderRadius: theme.spacing(4),
    padding: theme.spacing(4, 6),
    boxShadow: theme.shadows[8],
  },
}))
