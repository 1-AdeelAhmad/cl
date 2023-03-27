import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ShowHideInput from './ShowHideInput'
import { storyBookTitleMolecule } from '../../../consts'

export default {
  title: `${storyBookTitleMolecule}/Inputs/Show Hide Input`,
  component: ShowHideInput,
  args: {
    defaultValue: 'Test value',
  },
  argTypes: {
    id: { control: false },
    name: { control: false },
    onChange: { control: false },
    InputProps: { control: false },
    type: { control: false },
    defaultValue: { control: false },
  },
} as ComponentMeta<typeof ShowHideInput>

const Template: ComponentStory<typeof ShowHideInput> = (args) => {
  return <ShowHideInput {...args} />
}

export const Basic = Template.bind({})
Basic.args = { defaultValue: null }

export const BasicFilled = Template.bind({})
BasicFilled.args = {}

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const Error = Template.bind({})
Error.args = {
  error: true,
}

export const ErrorWithMessage = Template.bind({})
ErrorWithMessage.args = {
  error: true,
  helperText: 'This is an ERROR message',
}

export const WithHelperMessage = Template.bind({})
WithHelperMessage.args = {
  helperText: 'This is a helper message',
}
