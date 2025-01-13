import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import Datepicker from './index';

export default {
  title: 'Atoms/Datepicker',
  component: withStoryProviders(Datepicker, {}),
} as Meta;

const Template: Story = () => <Datepicker />;

export const Default = Template.bind({});
