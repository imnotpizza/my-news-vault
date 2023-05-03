import { rest } from 'msw';

export const handlers = [
  // // 빈 일정
  // rest.get(`${mockBaseUrl}/schedule/0`, (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json({}));
  // }),
  // // 저장된 일정
  // rest.get(`${mockBaseUrl}/schedule/1`, (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(mockScheduleData));
  // }),
  // rest.get('/test', (req, res, ctx) => {
  //   return res(
  //     ctx.status(200),
  //     ctx.json({
  //       id: 'test-id',
  //       name: 'test-name',
  //     }),
  //   );
  // }),
];
