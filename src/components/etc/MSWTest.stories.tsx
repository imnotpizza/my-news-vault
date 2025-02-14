import withStoryProviders from '@/hoc/withStoryProviders';
import MSWTest from './MSWTest';
import { Meta } from '@storybook/react';
import RootProviders from './RootProviders';

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
