import { TRawNewsItem } from '@/types';

export const mockRawNewsItem: TRawNewsItem = {
  datePublished: '2021-08-01T00:00:00.0000000Z',
  description: 'test',
  headline: true,
  name: 'test',
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
