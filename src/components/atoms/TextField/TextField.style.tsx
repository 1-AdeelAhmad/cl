import {
  styled,
  TextField as MuiTextField,
  inputBaseClasses as MuiInputBaseClasses,
  outlinedInputClasses as MuiOutlinedInputClasses,
  InputAdornment as MuiInputAdornment,
  inputAdornmentClasses as MuiInputAdornmentClasses,
  typographyClasses as MuiTypographyClasses,
} from '@mui/material'

export const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  [`& .${MuiInputBaseClasses.root}`]: {
    padding: theme.spacing(4, 8),
  },

  [`& .${MuiInputBaseClasses.input}`]: {
    padding: theme.spacing(0),
    color: theme.palette.neutral.main,
  },

  [`& .${MuiOutlinedInputClasses.notchedOutline}`]: {
    borderColor: theme.palette.neutral.tones[80],

    '&:focus': {
      borderColor: theme.palette.neutral.tones[60],
    },
  },

  //  Targets prefix and suffix's
  [`& .${MuiOutlinedInputClasses.inputAdornedStart}`]: {
    paddingLeft: theme.spacing(0),
  },
}))

export const StyledInputAdornment = styled(MuiInputAdornment)(({ theme }) => ({
  [`&.${MuiInputAdornmentClasses.root} .${MuiTypographyClasses.root}`]: {
    color: theme.palette.neutral.main,
  },
}))
