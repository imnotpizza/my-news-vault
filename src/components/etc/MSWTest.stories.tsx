import withStoryProviders from '@/hoc/withStoryProviders';
import { Meta } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import MSWTest from './MSWTest';
import RootProviders from './RootProviders';
import { mswTestHandler } from '../../../mocks/handler/newsHandler';

export default {
  title: 'Atoms/MSWTest',
  component: withStoryProviders(MSWTest, {}),
} as Meta;

const Template = () => (
  <RootProviders>
    <MSWTest />
  </RootProviders>
);

export const Default = Template.bind({});

export const MswEmpty = Template.bind({});

MswEmpty.parameters = {
  msw: {
    handlers: [...mswTestHandler],
  },
};
