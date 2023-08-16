import withTestProviders from '@/components/providers/withTestProviders';
import { render, screen } from '@testing-library/react';
import AlertText from '.';

const alertText = '검색어가 입력되지 않았습니다.';

describe('텍스트 표시여부 확인', () => {
  it('디폴트 상태에서는 텍스트 안보임', () => {
    render(withTestProviders(AlertText, { children: alertText }));
    expect(screen.queryByText('검색어가 입력되지 않았습니다.')).not.toBeInTheDocument();
  });
  it('show true시, alert 텍스트 표시 확인', () => {
    render(withTestProviders(AlertText, { children: alertText, show: true }));
    expect(screen.getByText('검색어가 입력되지 않았습니다.')).toBeInTheDocument();
  });
});
