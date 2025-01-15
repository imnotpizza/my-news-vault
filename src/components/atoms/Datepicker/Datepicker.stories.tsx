import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import Datepicker from '.';

/**
 * ### Datepicker 컴포넌트
 * daypicker 라이브러리 기반 https://daypicker.dev/docs/anatomy
 */
export default {
  title: 'Atoms/Datepicker',
  component: withStoryProviders(Datepicker, {}),
} as Meta;

const Template: Story = () => <Datepicker />;

export const Default = Template.bind({});
