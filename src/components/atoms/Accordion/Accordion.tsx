import React from 'react'
import {
  StyledAccordion,
  StyledMuiAccordionSummary,
} from './Accordion.style'
import {
  Typography,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummaryProps as MuiAccordionSummaryProps,
  AccordionProps as MuiAccordionProps,
} from '@mui/material'

import { IconChevronDown } from '../Icons/general'
import useBreakpoints from '../../../hooks/useBreakpoints'

export interface AccordionProps {
  name?: string
  summary?: string
  expandIcon?: MuiAccordionSummaryProps['expandIcon']
  onChange?: MuiAccordionProps['onChange']
  children: MuiAccordionProps['children']
  className: string
}

export default function Accordion(props: AccordionProps): JSX.Element {
  const { isDesktop } = useBreakpoints()

  const {
    name = 'accordion',
    summary,
    expandIcon,
    onChange,
    children,
    className,
  } = props

  let summaryProps = {
    expandIcon: expandIcon ? (
      expandIcon
    ) : (
      <IconChevronDown/>
    ),
    'aria-controls': `${name}-content`,
    id: `${name}-header`,
    children: [
      <Typography
        key="accordion-summary-typography"
        variant={(isDesktop ? 'h6': 'subtitle2')}
      >
        {summary}
      </Typography>,
    ],
  }

  return (
    <StyledAccordion square onChange={onChange} elevation={0} className={className}>
        <StyledMuiAccordionSummary {...summaryProps} />
      <MuiAccordionDetails>{children}</MuiAccordionDetails>
    </StyledAccordion>
  )
}
