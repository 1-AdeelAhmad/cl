import {
  accordionClasses as MuiAccordionClasses,
  AccordionSummary as MuiAccordionSummary,
  accordionSummaryClasses as MuiAccordionSummaryClasses,
  svgIconClasses as MuiSvgIconClasses,
  styled
} from '@mui/material'
import { Accordion as MuiAccordion } from '@mui/material'

export const StyledAccordion = styled(MuiAccordion)(({ theme }) => ({
  [`&.${MuiAccordionClasses.root}`]: {
    borderBottom: `1px solid ${theme.palette.neutral.tones[80]}`,
  },
  [`.${MuiSvgIconClasses.root}`]: {
    [theme.breakpoints.down('md')]: {
      fontSize: 12
    }
  }
}))

export const StyledMuiAccordionSummary = styled(MuiAccordionSummary)(
  ({ theme }) => ({
    [`.${MuiAccordionSummaryClasses.expandIconWrapper} .${MuiSvgIconClasses.root}`]:
      {
        fill: 'none',
        border: `2px ${theme.palette.neutral.main}`,
        [theme.breakpoints.down('lg')]: {
          border: `1.5px ${theme.palette.neutral.main}`,
        },
      },
  })
)
