import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoaderTextComponent from "./loader-text";

export default {
  title: "ReactComponentLibrary/Loaders/Loader Text",
  component: LoaderTextComponent,
} as ComponentMeta<typeof LoaderTextComponent>;

const Template: ComponentStory<typeof LoaderTextComponent> = () => <LoaderTextComponent />;

export const LoaderText = Template.bind({});
