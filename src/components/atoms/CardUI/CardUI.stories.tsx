import React from 'react';
import { Story, Meta } from '@storybook/react';
import CardUI from './index';

export default {
  title: 'Atoms/CardUI',
  component: CardUI,
} as Meta;

const Template: Story = (args) => <CardUI {...args} />;

export const Default = Template.bind({});
Default.args = {};
