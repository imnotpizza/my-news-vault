import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from './index';

export default {
  title: 'Atoms/SelectBox',
  component: withStoryProviders(Select, {}),
} as Meta;

const Template: Story = () => (
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select an option" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
    </SelectContent>
  </Select>
);

export const Default = Template.bind({});
