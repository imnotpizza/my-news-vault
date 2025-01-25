import { Meta, Story } from '@storybook/react';
import withStoryProviders from '@/hoc/withStoryProviders';
import NewsCard from './index';
import { TNewsItem } from '@/types';

export default {
  title: 'Organisms/Search/NewsCard',
  component: withStoryProviders(NewsCard, {}),
} as Meta;

const Template: Story<{ item: TNewsItem }> = (args) => <NewsCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    newsId: '1',
    title: 'Sample News Title',
    description: 'This is a sample description for the news item.',
    thumbnail: 'https://via.placeholder.com/150',
    url: 'https://example.com',
    providerIcon: 'https://via.placeholder.com/30',
    datePublished: '2023-10-01',
    isScrapped: false,
    searchQuery: 'sample query',
  },
}; 