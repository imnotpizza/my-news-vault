import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import FilterQueriesForm from './index';

export default {
  title: 'Molecules/FilterQueriesForm',
  component: withStoryProviders(FilterQueriesForm, {}),
} as Meta;

const Template: Story = (args) => <FilterQueriesForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '검색어를 입력하세요...',
  onSearch: (value: string) => alert(`검색어: ${value}`),
};
