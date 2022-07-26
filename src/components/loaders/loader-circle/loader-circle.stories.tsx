import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoaderCircleComponent from "./loader-circle";

export default {
  title: "ReactComponentLibrary/Loaders/Loader Circle",
  component: LoaderCircleComponent,
} as ComponentMeta<typeof LoaderCircleComponent>;

const Template: ComponentStory<typeof LoaderCircleComponent> = () => <LoaderCircleComponent />;

export const LoaderCircle = Template.bind({});
