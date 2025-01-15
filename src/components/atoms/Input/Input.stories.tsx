import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import { Input } from './index';

export default {
  title: 'Atoms/Input',
  component: withStoryProviders(Input, {}),
} as Meta;

const Template: Story<React.ComponentProps<typeof Input>> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text',
};
