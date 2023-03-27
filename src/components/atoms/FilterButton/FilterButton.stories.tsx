import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FilterButton from "./FilterButton";
import {
  Icon1DayLenses,
  Icon2WeeklyLenses,
  IconMonthlyLenses,
  IconToric,
} from "../Icons/general";
import { storyBookTitleAtom } from "../../../consts";

export default {
  title: `${storyBookTitleAtom}/Filter Buttons`,
  component: FilterButton,
  argTypes: {
    variant: {
      control: { type: "select", options: ["contained", "outlined"] },
    },
    size: {
      table: {
        disable: true,
      },
    },
    children: { control: "text" },
    icon: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    color: {
      table: {
        disable: true,
      },
    },
    disabled: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof FilterButton>;

const Template: ComponentStory<typeof FilterButton> = (args) => {
  return <FilterButton {...args} />;
};

export const Daily = Template.bind({});
Daily.args = {
  icon: <Icon1DayLenses />,
  variant: "contained",
  children: "Daily",
};

export const TwoWeekly = Template.bind({});
TwoWeekly.args = {
  icon: <Icon2WeeklyLenses />,
  variant: "contained",
  children: "Two Weekly",
};

export const Monthly = Template.bind({});
Monthly.args = {
  icon: <IconMonthlyLenses />,
  variant: "contained",
  children: "Monthly",
};

export const Toric = Template.bind({});
Toric.args = {
  icon: <IconToric />,
  variant: "contained",
  children: "Toric",
};
