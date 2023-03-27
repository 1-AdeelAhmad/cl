import React, { useState } from 'react'
import { StyledIconButton } from './ShowHideInput.style'
import TextField from '../../atoms/TextField'
import { IconEyeCareVisible, IconNonVisible } from '../../atoms/Icons/general'
import { TextFieldProps } from '../../atoms/TextField/TextField'

export interface ShowHideInputProps extends TextFieldProps {
  fullWidth?: boolean
}

function ShowHideInput(props: ShowHideInputProps) {
  const [toggleVisibility, setToggleVisibility] = useState(false)

  const handlePrivacyChange = () => {
    setToggleVisibility(!toggleVisibility)
  }

  const showHideInputProps = {
    ...props,
    type: toggleVisibility ? 'text' : 'password',
    icon: (
      <StyledIconButton
        aria-label="toggle password visibility"
        onClick={handlePrivacyChange}
        disableFocusRipple
        disableRipple
        disabled={props.disabled}
      >
        {toggleVisibility ? <IconNonVisible /> : <IconEyeCareVisible />}
      </StyledIconButton>
    ),
  }

  return <TextField iconPosition="right" {...showHideInputProps} />
}

export default ShowHideInput
