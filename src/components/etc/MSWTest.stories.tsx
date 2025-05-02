import withStoryProviders from '@/hoc/withStoryProviders';
import { Meta } from '@storybook/react';
import MSWTest from './MSWTest';
import { mswTestHandler } from '@/msw/handler/newsHandler';
import TestProviders from '../providers/withTestProviders';

export default {
  title: 'Atoms/MSWTest',
  component: withStoryProviders(MSWTest, {}),
} as Meta;

const Template = () => (
  <TestProviders>
    <MSWTest />
  </TestProviders>
);

export const Default = Template.bind({});

export const MswEmpty = Template.bind({});

MswEmpty.parameters = {
  msw: {
    handlers: [...mswTestHandler],
  },
};
