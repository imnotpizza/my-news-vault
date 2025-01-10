import React from 'react';
import { Story, Meta } from '@storybook/react';
import GridUI from './index';

export default {
  title: 'Atoms/GridUI',
  component: GridUI,
} as Meta;

const Template: Story = (args) => <GridUI {...args} />;

export const Default = Template.bind({});
Default.args = {};
