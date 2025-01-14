import React from 'react';
import { Story, Meta } from '@storybook/react';
import SelectBox from './index';

export default {
  title: 'Atoms/SelectBox',
  component: SelectBox,
} as Meta;

const Template: Story = (args) => <SelectBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
