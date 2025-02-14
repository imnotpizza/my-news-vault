import withStoryProviders from '@/hoc/withStoryProviders';
import MSWTest from './MSWTest';
import { Meta } from '@storybook/react';
import RootProviders from './RootProviders';
import { http, HttpResponse } from 'msw';

export default {
  title: 'Atoms/MSWTest',
  component: withStoryProviders(MSWTest, {}),
} as Meta;

const Template = () => (
  <RootProviders>
    <MSWTest />
  </RootProviders>
);

export const Default = Template.bind({});

export const MswEmpty = Template.bind({});

MswEmpty.parameters = {
  msw: {
    handlers: [
      http.get('https://jsonplaceholder.typicode.com/posts', ({ params }) => {
        const mockPosts = [
          { userId: 1, id: 1, title: '테스트 글 제목 #1', body: '내용 예시 #1' },
          { userId: 2, id: 2, title: '테스트 글 제목 #2', body: '내용 예시 #2' },
        ];
        return HttpResponse.json(mockPosts);
      }),
    ],
  },
};
