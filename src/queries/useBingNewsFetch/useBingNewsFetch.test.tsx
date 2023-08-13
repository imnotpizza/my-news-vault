import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { server } from '@/msw/server';
import useBingNewsFetch from '.';

describe('useBingNewsFetch', () => {
  describe('enabled 테스트', () => {
    it('enabled false이면 쿼리데이터 저장 안함', () => {});
    it('enabled true이면 쿼리데이터 초기화', () => {});
  });
  describe('쿼리데이터 API 호출 시 테스트', () => {
    it('정상호출 시, flattenData에 데이터 정상출력', () => {});
    it('검색결과 없을때, isEmpty true로 출력', () => {});
    it('에러 발생 시, queryStates.isError true', () => {});
  });
});
