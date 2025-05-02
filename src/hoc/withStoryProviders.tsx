import TestProviders from '@/components/providers/withTestProviders';
import React from 'react';

/**
 * storybook에서 사용하는 경우 전역 provider 적용
 * @param Story
 * @param props
 * @returns
 */
const withStoryProviders = (Story: any, props: any) => () => (
    <TestProviders>
      <Story {...props} />
    </TestProviders>
);

export default withStoryProviders;
