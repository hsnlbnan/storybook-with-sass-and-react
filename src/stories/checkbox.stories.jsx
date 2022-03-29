import React from 'react';

import  Checkbox  from '../components/checkbox';

export default {
  title: 'Appricot/Form Elementleri/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const noPlaceholder = Template.bind({});
noPlaceholder.args = {
    checked: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
};

export const withPlaceholder = Template.bind({});
withPlaceholder.args = {
    placeholder: 'Kullanıcı sözleşmesini okudum, onaylıyorum.',
};

export const activeWithPlaceholder = Template.bind({});
activeWithPlaceholder.args = {
    placeholder: 'Kullanıcı sözleşmesini okudum, onaylıyorum.',
    checked: true,
};
