import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardOnHoverComponent from "./card-on-hover";

export default {
  title: "ReactComponentLibrary/Cards/Card On Hover",
  component: CardOnHoverComponent,
} as ComponentMeta<typeof CardOnHoverComponent>;

const Template: ComponentStory<typeof CardOnHoverComponent> = (args) => <CardOnHoverComponent {...args} />;

export const CardOnHover = Template.bind({});
CardOnHover.args = {
  name: 'Rajat',
  description: 'I am a React JS developer. Connect with me on Linkedin www.linkedin.com/in/porwalrajat',
  readMoreUrl: 'https://rajatporwal.mystrikingly.com/',
  cardTitle: '01'
}
