import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextField from './TextField'
import { IconSearch } from '../Icons/general'
import { storyBookTitleMolecule } from '../../../consts'

const DemoIcon = <IconSearch />

export default {
  title: `${storyBookTitleMolecule}/Inputs/TextField`,
  
  component: TextField,
  args: {
    defaultValue: 'Test value',
  },
  argTypes: {
    id: { control: false },
    name: { control: false },
    onChange: { control: false },
    InputProps: { control: false },
    type: { control: false },
  },
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => {
  return <TextField {...args} />
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

export const WithIconLeft = Template.bind({})
WithIconLeft.args = { icon: DemoIcon }

export const WithIconLeftPlaceholder = Template.bind({})
WithIconLeftPlaceholder.args = {
  icon: DemoIcon,
  placeholder: 'Placeholder',
  defaultValue: null,
}

export const WithIconRight = Template.bind({})
WithIconRight.args = { icon: DemoIcon, iconPosition: 'right' }

export const WithIconRightPlaceholder = Template.bind({})
WithIconRightPlaceholder.args = {
  icon: DemoIcon,
  iconPosition: 'right',
  placeholder: 'Placeholder',
  defaultValue: null,
}

export const WithPrefix = Template.bind({})
WithPrefix.args = {
  prefix: '(+44)',
}

export const WithPrefixPlaceholder = Template.bind({})
WithPrefixPlaceholder.args = {
  prefix: '(+44)',
  placeholder: 'Placeholder',
  defaultValue: null,
}

export const WithSuffix = Template.bind({})
WithSuffix.args = {
  suffix: 'kg',
}

export const WithSuffixPlaceholder = Template.bind({})
WithSuffixPlaceholder.args = {
  suffix: 'kg',
  placeholder: 'Placeholder',
  defaultValue: null,
}
