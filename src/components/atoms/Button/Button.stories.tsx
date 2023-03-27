import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { storyBookTitleAtom } from "../../../consts";

export default {
  title: `${storyBookTitleAtom}/Buttons/Base Button`,
  component: Button,
  args: {
    children: "Button",
  },
  argTypes: {
    children: { control: false },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
