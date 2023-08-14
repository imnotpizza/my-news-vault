import { DEFAULT_MOCK_QUERY, EMPTY_RES_MOCK_QUERY, getMswRestHandler } from '@/msw/handlers';
import { server } from '@/msw/server';
import { mockPageProps } from '@/utils/mockData';
import { IUserInfoContext, UserInfoProvider } from '@/utils/userInfoProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react-hooks';
import useBingNewsFetch, { IUseBingNewsFetchParams } from '.';
import { queryClient } from '../queryClient';

const TestProvider = ({ children, props }) => (
  <QueryClientProvider client={queryClient}>
    <UserInfoProvider {...props.userInfo}>{children}</UserInfoProvider>
  </QueryClientProvider>
);

const getRenderHookResult = (params: IUseBingNewsFetchParams) => {
  return renderHook(
    () => {
      return useBingNewsFetch(params);
    },
    {
      wrapper: ({ children }) => <TestProvider props={mockPageProps}>{children}</TestProvider>,
    },
  );
};

afterEach(() => {
  queryClient.clear();
});

describe('useBingNewsFetch', () => {
  describe('enabled 테스트', () => {
    it('enabled false이면 쿼리데이터 저장 안함', () => {
      const { result } = getRenderHookResult({
        query: DEFAULT_MOCK_QUERY,
        enabled: false,
        maxPage: 3,
      });

      expect(result.current.data).toBe(undefined);
      expect(result.current.flattenData).toHaveLength(0);
    });
  });
  describe('쿼리데이터 API 호출 시 테스트', () => {
    it('정상호출 시, flattenData에 데이터 정상출력', async () => {
      const { result, waitForNextUpdate } = getRenderHookResult({
        query: DEFAULT_MOCK_QUERY,
        enabled: true,
        maxPage: 0,
      });

      await waitForNextUpdate();

      expect(result.current.data).not.toBe(undefined);
      expect(result.current.flattenData).toHaveLength(20);
    });
    it('검색결과 없을때, isEmpty true로 출력', async () => {
      const { result, waitForNextUpdate } = getRenderHookResult({
        query: EMPTY_RES_MOCK_QUERY,
        enabled: true,
        maxPage: 3,
      });

      await waitForNextUpdate();
      expect(result.current.isEmpty).toBe(true);
    });
    it('에러 발생 시, queryStates.isError true', async () => {
      server.use(
        getMswRestHandler(DEFAULT_MOCK_QUERY, (req, res, ctx) => {
          return res(ctx.status(500), ctx.json({ message: 'error' }));
        }),
      );
      const { result, waitForNextUpdate } = getRenderHookResult({
        query: DEFAULT_MOCK_QUERY,
        enabled: true,
        maxPage: 3,
      });
      await waitForNextUpdate();
      expect(result.current.isError).toBe(true);
    });
  });
});
