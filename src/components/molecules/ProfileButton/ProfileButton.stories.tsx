import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import ProfileButton from './index';

const SAMPLE_AVATAR =
  'https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png';

export default {
  title: 'Molecules/ProfileButton',
  component: withStoryProviders(ProfileButton, {}),
} as Meta;

const Template: Story = (args) => <ProfileButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Profile',
  onClick: () => alert('Profile clicked'),
  src: SAMPLE_AVATAR,
  userName: 'John Doe',
};
