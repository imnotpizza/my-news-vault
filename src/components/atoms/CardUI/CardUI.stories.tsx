import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import Card from './index';

export default {
  title: 'Atoms/CardUI',
  component: withStoryProviders(Card, {}),
} as Meta;

const Template: Story = () => (
  <Card className='h-[500px]'>
    <Card.Header>
      <Card.Title>Card Title</Card.Title>
      <Card.Description>Card Description</Card.Description>
    </Card.Header>
    <Card.Content>Card Content</Card.Content>
    <Card.Footer>Card Footer</Card.Footer>
  </Card>
);

export const Default = Template.bind({});
