import "../src/styles/main.scss";
import { addDecorator } from "@storybook/react";
import Center from "../src/commons/Center";

// add Center component to every story
addDecorator((story) => <Center>{story()}</Center>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
