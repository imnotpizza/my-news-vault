import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import LoginButton from './index';

export default {
  title: 'Molecules/LoginButton',
  component: withStoryProviders(LoginButton, {}),
} as Meta;

const Template: Story = (args) => <LoginButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  // 여기에 LoginButton 컴포넌트의 기본 props를 설정합니다.
  label: 'Login',
  onClick: () => alert('Login clicked'),
};
