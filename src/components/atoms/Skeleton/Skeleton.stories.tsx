import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import Skeleton from '.';

export default {
  title: 'Atoms/Skeleton',
  component: withStoryProviders(Skeleton, {}),
} as Meta;

const Template: Story = () => (
  <Skeleton.Container className="w-[300px] h-auto">
    <Skeleton.Circle />
    <Skeleton.Box className="w-1/3" />
    <Skeleton.Box className="w-2/3" />
    <Skeleton.Box className="w-full" />
    <Skeleton.Box className="w-full h-[200px]" />
  </Skeleton.Container>
);

export const Default = Template.bind({});
