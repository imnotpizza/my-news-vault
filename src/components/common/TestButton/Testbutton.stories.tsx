// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import TestButton from '.';

const meta: Meta<typeof TestButton> = {
  title: 'Example/TestButton',
  component: TestButton,
  tags: ['#test'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

type Story = StoryObj<typeof TestButton>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export default meta;
