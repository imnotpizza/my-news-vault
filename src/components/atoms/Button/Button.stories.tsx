import { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
} as Meta;
export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
  },
};
