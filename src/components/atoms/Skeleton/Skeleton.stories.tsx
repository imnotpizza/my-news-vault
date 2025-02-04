import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import Skeleton from '.';
import { cn } from '@/lib/utils';

export default {
  title: 'Atoms/Skeleton',
  component: withStoryProviders(Skeleton, {}),
} as Meta;

const Template: Story = () => (
  <Skeleton.Container className="w-[300px] h-auto">
    <Skeleton.Circle />
    <Skeleton.Box className="w-1/3" />
    <Skeleton.Box className="w-2/3" />
    <Skeleton.Box className="w-full" />
    <div className="w-full flex gap-2">
      <Skeleton.Box className="" />
      <Skeleton.Box className="" />
    </div>
    <Skeleton.Box className="w-full h-[200px]" />
  </Skeleton.Container>
);

export const Default = Template.bind({});

export const NewsCardSkeleton = () => {
  return (
    <Skeleton.Container
      className={cn(
        'p-0 relative',
        'desktop:w-[14.44rem] desktop:h-[23.38rem] tablet:w-[14.44rem] tablet:h-[23.38rem]',
        'mobile:w-full mobile:h-auto',
      )}
    >
      <Skeleton.Box className="w-full h-[200px]" />
      <div className="p-4 flex flex-col gap-2">
        <Skeleton.Box className="w-full h-4" />
        <Skeleton.Box className="w-full h-4" />
        <Skeleton.Box className="w-full h-4" />
        <Skeleton.Box className="w-full h-4" />
        <div className="flex justify-between items-center mt-2 gap-2">
          <Skeleton.Box className="w-14" />
        </div>
      </div>
    </Skeleton.Container>
  );
};
