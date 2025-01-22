import RootProviders from '@/app/_component/RootProviders';
import { StoryFn } from '@storybook/react';
import React from 'react';

/**
 * storybook에서 사용하는 경우 전역 provider 적용
 * @param Story
 * @param props
 * @returns
 */
const withStoryProviders = (Story: StoryFn, props: any) => () =>
  (
    <RootProviders>
      <Story {...props} />
    </RootProviders>
  );

export default withStoryProviders;
