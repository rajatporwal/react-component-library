import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoaderCircleHorizontalComponent from "./loader-circle-horizontal";

export default {
  title: "ReactComponentLibrary/Loaders/Loader Circle Horizontal",
  component: LoaderCircleHorizontalComponent,
} as ComponentMeta<typeof LoaderCircleHorizontalComponent>;

const Template: ComponentStory<typeof LoaderCircleHorizontalComponent> = () => <LoaderCircleHorizontalComponent />;

export const LoaderCircleHorizontal = Template.bind({});
