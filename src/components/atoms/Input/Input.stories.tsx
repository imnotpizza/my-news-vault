import React from 'react';
import { Story, Meta } from '@storybook/react';
import Input from './index';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

const Template: Story = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};
