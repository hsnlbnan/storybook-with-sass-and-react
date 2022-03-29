import React from "react";

import Icon from "../components/Icon";

export default {
  title: "Appricot / Icon",
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const IconSet = Template.bind({});
IconSet.args = {
  name: "dashboard",
  color: "#333",
  size: "lg",
};
