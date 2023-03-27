import {
  Divider as MuiDivider,
  dividerClasses as MuiDividerClasses,
  styled,
} from '@mui/material'

export const StyledDivider = styled(MuiDivider)(({ theme }) => ({
  [`&.${MuiDividerClasses.root}`]: {
    color: theme.palette.neutral.tones[80],
  },
}))
