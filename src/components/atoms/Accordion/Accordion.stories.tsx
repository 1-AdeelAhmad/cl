import React from "react";

import Accordion from "./Accordion";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@mui/material";
import { storyBookTitleAtom } from "../../../consts";

export default {
  title: `${storyBookTitleAtom}/Accordion`,
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  name: "example",
  summary: "Summary Accordion 1",
  children: [
    <Typography key="entry-1" variant="subtitle2">
      Entry 1
    </Typography>,
    <Typography key="entry-2" variant="subtitle2">
      Entry 2
    </Typography>,
    <Typography key="entry-3" variant="subtitle2">
      Entry 3
    </Typography>,
    <Typography key="entry-4" variant="subtitle2">
      Entry 4
    </Typography>,
  ],
};
