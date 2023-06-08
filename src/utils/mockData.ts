import { TRawNewsItem } from '@/types';

export const mockRawNewsItem: TRawNewsItem = {
  datePublished: '2021-08-01T00:00:00.0000000Z',
  description: 'test',
  headline: true,
  name: 'scrapped-newsId',
  provider: [
    {
      image: {
        thumbnail: {
          contentUrl: 'test',
        },
      },
      name: 'test',
    },
  ],
  image: {
    thumbnail: {
      contentUrl: 'test',
      height: '100',
      width: '100',
    },
    name: 'test',
  },
  url: 'test',
};

export const mockNewsItem = [
  {
    newsId: 'scrapped-newsId',
    datePublished: '2021-08-01',
    description: 'test',
    providerIcon: 'test',
    providerName: 'test',
    thumbnail: 'test',
    title: 'scrapped-newsId',
    isScrapped: false,
    url: 'test',
  },
  {
    newsId: 'not-scrapped-newsId',
    datePublished: '2021-08-01',
    description: 'test',
    providerIcon: 'test',
    providerName: 'test',
    thumbnail: 'test',
    title: 'not-scrapped-newsId',
    isScrapped: false,
    url: 'test',
  },
];

export const mockScrappedNewsItem = [
  {
    newsId: 'scrapped-newsId',
    datePublished: '2021-08-01',
    description: 'test',
    providerIcon: 'test',
    providerName: 'test',
    thumbnail: 'test',
    title: 'scrapped-newsId',
    isScrapped: true,
    url: 'test',
  },
  {
    newsId: 'not-scrapped-newsId2',
    datePublished: '2021-08-01',
    description: 'test',
    providerIcon: 'test',
    providerName: 'test',
    thumbnail: 'test',
    title: 'not-scrapped-newsId2',
    isScrapped: true,
    url: 'test',
  },
];
