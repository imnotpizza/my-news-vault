import { render, screen } from '@testing-library/react';
import withTestProviders from '@/components/providers/withTestProviders';
import NewsCardPublishedDate from '.';

describe('버튼 클릭시 작업수행', () => {
  test('날짜 문자열 출력', () => {
    render(withTestProviders(NewsCardPublishedDate, { children: '2023-05-05' }));
    expect(screen.getByText('2023-05-05')).toBeInTheDocument();
  });
  test('날짜 들어오지 않은경우, "입력된 날짜 없음 문구 출력"', () => {
    render(withTestProviders(NewsCardPublishedDate, { children: undefined }));
    expect(screen.getByText('입력된 날짜 없음')).toBeInTheDocument();
  });
});
