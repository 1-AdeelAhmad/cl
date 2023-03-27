import { CssBaseline } from "@mui/material";
import customTheme from "../src/themes";
import ThemeProvider from "./theme-provider";
import { addDecorator } from "@storybook/react";
import { StylesProvider } from "@material-ui/core";

addDecorator((storyFn) => (
  <StylesProvider injectFirst>{storyFn()}</StylesProvider>
));
/* snipped for brevity */

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={customTheme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];

const selectedViewports = {
  phone: {
    name: "XS",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
  tablet: {
    name: "S",
    styles: {
      width: "600px",
      height: "1024px",
    },
  },
  tabletLarge: {
    name: "M",
    styles: {
      width: "1024px",
      height: "1336px",
    },
  },
  desktop: {
    name: "L",
    styles: {
      width: "1440px",
      height: "900px",
    },
  },
  desktopLarge: {
    name: "XL",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
};

export const parameters = {
  viewport: {
    //viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    viewports: selectedViewports,
  },
  paddings: [
    { name: "Small", value: "16px" },
    { name: "Medium", value: "32px", default: true },
    { name: "Large", value: "64px" },
  ],
  options: {
    showPanel: true,
    panelPosition: "bottom",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
