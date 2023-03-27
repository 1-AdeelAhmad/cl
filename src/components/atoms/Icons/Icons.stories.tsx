import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as FlagIcons from "./flags";
import * as GeneralIcons from "./general";
import * as PaymentIcons from "./payment";
import * as SocialIcons from "./social";
import IconWrapper from "./Icons";
import { storyBookTitleAtom } from "../../../consts";

export default {
  title: `${storyBookTitleAtom}/Icons`,
  component: IconWrapper,
} as ComponentMeta<typeof IconWrapper>;

const renderIconList: Function = (data: any[]): JSX.Element[] => {
  return data.map((Icon) => <Icon />);
};

const flagIconsData = Object.values(FlagIcons);
const generalIconsData = Object.values(GeneralIcons);
const paymentIconsData = Object.values(PaymentIcons);
const socialIconsData = Object.values(SocialIcons);

const TemplateFlag: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(flagIconsData);

const TemplateGeneral: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(generalIconsData);

const TemplatePayment: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(paymentIconsData);

const TemplateSocial: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(socialIconsData);

export const Flags = TemplateFlag.bind({});
export const General = TemplateGeneral.bind({});
export const Payment = TemplatePayment.bind({});
export const Social = TemplateSocial.bind({});
