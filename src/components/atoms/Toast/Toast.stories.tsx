import React from 'react';
import { Story, Meta } from '@storybook/react';
import Toast from './index';

export default {
  title: 'Atoms/Toast',
  component: Toast,
} as Meta;

const Template: Story<{ message: string }> = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is a toast message',
};
