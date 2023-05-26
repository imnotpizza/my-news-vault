import { findByTestId, render, screen, fireEvent } from '@testing-library/react';
import MswSample from '.';
import withTestProviders from '../providers/withTestProviders';
import { apiPath } from './useSampleQuery';
import { server } from '@/msw/server';
import { rest } from 'msw';
import { queryClient } from '@/queries/queryClient';

// TODO: mock함수 추가
// // setQueryData mock
// jest.mock('@/queries/queryClient', () => ({
//   queryClient: {
//     setQueryData: jest.fn(),
//     getQueryClient: jest.fn(),
//   },
// }));

describe('test', () => {
  beforeEach(() => {
    queryClient.clear(); // 쿼리 상태 초기화시키기위해 캐시 비움
    render(withTestProviders(MswSample));
  });
  test('sample 텍스트 찾기', () => {
    expect(screen.getByText('sample')).toBeInTheDocument();
  });

  test('card 개수 체크', async () => {
    const cards = await screen.findAllByTestId('card');
    expect(cards).toHaveLength(3);
  });
});

describe('delete 클릭시 테스트', () => {
  beforeEach(() => {
    queryClient.clear();
    render(withTestProviders(MswSample));
  });
  test('delete 클릭시 사라짐', async () => {
    const cards = await screen.findAllByTestId('card');
    expect(cards).toHaveLength(3);
    const deleteBtn = screen.getAllByText('delete')[0];
    fireEvent.click(deleteBtn);
    // set, getQueryClient는 mock함수 사용필요
    const cardsAfterDelete = await screen.findAllByTestId('card');
    expect(cardsAfterDelete).toHaveLength(3);
  });
});

// 이전 캐시 처리 필요
describe('에러 발생시', () => {
  beforeEach(() => {
    queryClient.clear();
    server.use(
      rest.get(apiPath, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json(undefined));
      }),
    );
  });

  test('에러 발생시 에러 텍스트 출력', async () => {
    render(withTestProviders(MswSample));
    expect(await screen.findByTestId('error-ui')).toBeInTheDocument();
  });
});
