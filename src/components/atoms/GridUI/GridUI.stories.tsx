import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import GridUI from './index';

export default {
  title: 'Atoms/GridUI',
  component: withStoryProviders(GridUI, {}),
} as Meta;

const Template: Story = () => <GridUI />;

export const Default = Template.bind({});
