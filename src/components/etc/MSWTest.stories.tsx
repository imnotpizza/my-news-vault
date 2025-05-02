import withStoryProviders from '@/hoc/withStoryProviders';
import { Meta } from '@storybook/react';
import MSWTest from './MSWTest';
import { mswTestHandler } from '@/msw/handler/newsHandler';

const MSWTestStory = withStoryProviders(MSWTest, {});

export default {
  title: 'Atoms/MSWTest',
  component: MSWTestStory,
  parameters: {
    msw: {
      handlers: [...mswTestHandler],
    },
  },
} as Meta;

// 더이상 TestProviders가 필요 없으니 제거
const Template = (args) => <MSWTestStory {...args} />;

export const Default = Template.bind({});
export const MswEmpty = Template.bind({});
