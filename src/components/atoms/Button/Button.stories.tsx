import { Meta, StoryFn, StoryObj } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import { Button } from '.';

/**
 * Button 컴포넌트
 * 
 */
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: withStoryProviders(Button, {
    children: 'Button',
  }),
} as Meta;
export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
  },
};
