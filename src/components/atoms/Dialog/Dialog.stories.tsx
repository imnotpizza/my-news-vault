import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dialog from './index';

export default {
  title: 'Atoms/Dialog',
  component: Dialog,
} as Meta;

const Template: Story<{ title: string; children: React.ReactNode }> = (args) => (
  <Dialog {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Dialog Title',
  children: 'This is the dialog content',
};
