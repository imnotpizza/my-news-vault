import React from 'react';
import { Story, Meta } from '@storybook/react';
import Datepicker from './index';

export default {
  title: 'Atoms/Datepicker',
  component: Datepicker,
} as Meta;

const Template: Story = (args) => <Datepicker {...args} />;

export const Default = Template.bind({});
Default.args = {};
