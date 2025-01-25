import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import { Button, ButtonProps } from './index';

export default {
  title: 'Atoms/Button',
  component: withStoryProviders(Button, {}),
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'default',
};

export const ButtonsByVariant = () => {
  return (
    <div className="flex gap-2">
      <Button size="default" variant="default">
        default
      </Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
    </div>
  );
};

export const ButtonsBySize = () => {
  return (
    <div className="flex gap-2">
      <Button size="default">default</Button>
      <Button size="sm">sm</Button>
      <Button size="lg">lg</Button>
      <Button size="icon">icon</Button>
    </div>
  );
};

export const ButtonsByAsChild = () => {
  return (
    <Button asChild variant="link">
      <a href="#">Link</a> 
    </Button>
  );
};
