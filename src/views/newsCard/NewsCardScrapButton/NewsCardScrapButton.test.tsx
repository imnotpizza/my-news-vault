import { render, screen } from '@testing-library/react';
import withTestProviders from '@/components/providers/withTestProviders';
import NewsCardTitle from '.';

describe('버튼 클릭시', () => {
  test('스크랩되지 않은 상태일떼, 스크랩 추가 버튼 표시', () => {
    render(withTestProviders(NewsCardTitle, { isScrapped: false }));
    expect(screen.getByLabelText('스크랩 추가 버튼')).toBeInTheDocument();
  });
  test('스크랩된 상태일때, 스크랩 해제 버튼 표시', () => {
    render(withTestProviders(NewsCardTitle, { isScrapped: true }));
    expect(screen.getByLabelText('스크랩 해제 버튼')).toBeInTheDocument();
  });
  test('버튼 클릭시 동작 확인', () => {
    const onClickScrapMock = jest.fn();
    render(withTestProviders(NewsCardTitle, { onClickScrap: onClickScrapMock }));
    const scrapButton = screen.getByRole('button');
    scrapButton.click();
    expect(onClickScrapMock).toBeCalledTimes(1);
  });
  test('disabled가 true일 때, 버튼 비활성화', () => {
    render(withTestProviders(NewsCardTitle, { disabled: true }));
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
