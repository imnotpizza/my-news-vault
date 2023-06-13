import withTestProviders from '@/components/providers/withTestProviders';
import { render, screen } from '@testing-library/react';
import QueryStateWrapper, { IQueryStateWrapperProps } from '.';

const mockProps: IQueryStateWrapperProps = {
  isLoading: false,
  isError: false,
  isEmpty: false,
  isDisabled: false,
  children: <div>Contents</div>,
};

describe('테스트', () => {
  it('isLoading true시 로딩 UI 띄움', () => {
    render(withTestProviders(QueryStateWrapper, { ...mockProps, isLoading: true }));
    expect(screen.getByTestId('loading-ui')).toBeInTheDocument();
  });

  it('isError true시 에러 UI 띄움', () => {
    render(withTestProviders(QueryStateWrapper, { ...mockProps, isError: true }));
    expect(screen.getByTestId('error-ui')).toBeInTheDocument();
  });

  it('isEmpty true시 empty UI 띄움', () => {
    render(withTestProviders(QueryStateWrapper, { ...mockProps, isEmpty: true }));
    expect(screen.getByAltText('검색 결과가 없습니다.')).toBeInTheDocument();
  });

  it('isDisabled true시 disabled UI 띄움', () => {
    render(withTestProviders(QueryStateWrapper, { ...mockProps, isDisabled: true }));
    expect(screen.getByAltText('검색 결과가 없습니다.')).toBeInTheDocument();
  });

  it('isLoading, isError, isEmpty false시 children 띄움', () => {
    render(withTestProviders(QueryStateWrapper, mockProps));
    expect(screen.getByText('Contents')).toBeInTheDocument();
  });
});

describe('UI 2개 동시에 나오는 문제', () => {
  it('isError, isEmpty 동시에 뜰시 isError만 띄우기', async () => {
    render(
      withTestProviders(QueryStateWrapper, {
        ...mockProps,
        isError: true,
        isEmpty: true,
      }),
    );
    expect(screen.queryByTestId('error-ui')).toBeInTheDocument();
    expect(screen.queryByTestId('empty-ui')).not.toBeInTheDocument();
  });
});
