import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SpinnerLoaderComponent from "./spinner-loader";

export default {
  title: "ReactComponentLibrary/Loaders/Spinner Loader",
  component: SpinnerLoaderComponent,
} as ComponentMeta<typeof SpinnerLoaderComponent>;

const Template: ComponentStory<typeof SpinnerLoaderComponent> = () => <SpinnerLoaderComponent />;

export const SpinnerLoader = Template.bind({});
