import { apiPath } from '@/components/mswsample/useSampleQuery';
import { rest } from 'msw';

export const handlers = [
  rest.get(apiPath, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'test-name',
        },
        {
          name: 'test-name2',
        },
        {
          name: 'test-name3',
        },
      ]),
    );
  }),
];
