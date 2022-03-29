import React from "react";

import Button from "../components/Button";

export default {
  title: "Appricot/Buton",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  design: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  design: "secondary",
};

export const Pill = Template.bind({});
Pill.args = {
  pill: true,
};

export const Block = Template.bind({});
Block.args = {
  block: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const fontWeight = Template.bind({});
fontWeight.args = {
  fontWeight: "bold",
};
