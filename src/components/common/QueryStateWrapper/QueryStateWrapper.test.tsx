import withTestProviders from '@/components/providers/withTestProviders';
import { render, screen } from '@testing-library/react';
import QueryStateWrapper, { IQueryStateWrapperProps } from '.';

const mockProps: IQueryStateWrapperProps = {
  isLoading: false,
  isError: false,
  isEmpty: false,
  children: <div>Contents</div>,
};

describe('테스트', () => {
  it('isLoading true시 로딩 UI 띄움', () => {
    render(withTestProviders(QueryStateWrapper, { ...mockProps, isLoading: true }));
    expect(screen.getByAltText('로딩중')).toBeInTheDocument();
  });

  it('isError true시 에러 UI 띄움', () => {
    render(withTestProviders(QueryStateWrapper, { ...mockProps, isError: true }));
    expect(screen.getByAltText('검색 도중 문제가 발생하였습니다.')).toBeInTheDocument();
  });

  it('isEmpty true시 empty UI 띄움', () => {
    render(withTestProviders(QueryStateWrapper, { ...mockProps, isEmpty: true }));
    expect(screen.getByAltText('검색 결과가 없습니다.')).toBeInTheDocument();
  });

  it('isLoading, isError, isEmpty false시 children 띄움', () => {
    render(withTestProviders(QueryStateWrapper, mockProps));
    expect(screen.getByText('Contents')).toBeInTheDocument();
  });
});

describe('UI 2개 동시에 나오는 문제', () => {
  it('isError, isEmpty 동시에 뜰시 isError만', async () => {
    render(
      withTestProviders(QueryStateWrapper, {
        ...mockProps,
        isError: true,
        isEmpty: true,
      }),
    );
    expect(screen.queryByAltText('검색 도중 문제가 발생하였습니다.')).toBeInTheDocument();
    expect(screen.queryByAltText('검색 결과가 없습니다.')).not.toBeInTheDocument();
  });
});
