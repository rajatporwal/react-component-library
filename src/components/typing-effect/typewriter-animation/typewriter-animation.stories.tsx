import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TypeWriterAnimationComponent from "./typewriter-animation";

export default {
  title: "ReactComponentLibrary/Typing Effect/TypeWriterAnimation",
  component: TypeWriterAnimationComponent,
} as ComponentMeta<typeof TypeWriterAnimationComponent>;

const Template: ComponentStory<typeof TypeWriterAnimationComponent> = (args) => <TypeWriterAnimationComponent {...args} />;

export const TypeWriterAnimation = Template.bind({});
TypeWriterAnimation.args = {
  text: "Hello world!",
};
