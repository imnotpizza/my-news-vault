import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import { Toast, ToastProvider, ToastViewport, ToastTitle, ToastDescription } from './index';

export default {
  title: 'Atoms/Toast',
  component: withStoryProviders(Toast, {}),
} as Meta;

const Template: Story = () => (
  <ToastProvider>
    <Toast>
      <ToastTitle>Toast Title</ToastTitle>
      <ToastDescription>Toast Description</ToastDescription>
    </Toast>
    <ToastViewport />
  </ToastProvider>
);

export const Default = Template.bind({});
