import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import ImageView from './index';

export default {
  title: 'Atoms/ImageView',
  component: withStoryProviders(ImageView, {}),
} as Meta;

const Template: Story = () => (
  <ImageView src="https://via.placeholder.com/150" alt="placeholder" className='w-[150px] h-[150px]' />
);

export const Default = Template.bind({});
