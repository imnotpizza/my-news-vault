import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import { TNewsItem } from '@/types';
import NewsCard from './index';

export default {
  title: 'Organisms/Search/NewsCard',
  component: withStoryProviders(NewsCard, {}),
} as Meta;

const Template: Story<any> = (args) => <NewsCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  newsItem: {
    newsId: '1',
    title: 'Sample News Title',
    description: 'This is a sample description for the news item.',
    thumbnail: 'https://placehold.co/600x400',
    url: 'https://example.com',
    providerIcon: 'https://placehold.co/30x30',
    datePublished: '2023-10-01',
    isScrapped: false,
    searchQuery: 'sample query',
  },
};
