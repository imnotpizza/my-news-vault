import RootProviders from '@/components/etc/RootProviders';
import { StoryFn } from '@storybook/react';
import React from 'react';

/**
 * storybook에서 사용하는 경우 전역 provider 적용
 * @param Story
 * @param props
 * @returns
 */
const withStoryProviders = (Story: any, props: any) => () => (
    <RootProviders>
      <Story {...props} />
    </RootProviders>
);

export default withStoryProviders;
