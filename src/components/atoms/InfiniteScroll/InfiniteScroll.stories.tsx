import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import { InfiniteScrollWrapper } from './index';

export default {
  title: 'Atoms/InfiniteScroll',
  component: withStoryProviders(InfiniteScrollWrapper, {}),
} as Meta;

const Template: Story = () => (
  <InfiniteScrollWrapper ioRef={() => {}} isLoading={false}>
    Content
  </InfiniteScrollWrapper>
);

export const Default = Template.bind({});
