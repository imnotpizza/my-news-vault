import React from 'react';
import { Story, Meta } from '@storybook/react';
import InfiniteScroll from './index';

export default {
  title: 'Atoms/InfiniteScroll',
  component: InfiniteScroll,
} as Meta;

const Template: Story = (args) => <InfiniteScroll {...args} />;

export const Default = Template.bind({});
Default.args = {};
