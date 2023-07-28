import { render, screen } from '@testing-library/react';
import withTestProviders from '@/components/providers/withTestProviders';
import NewsCardTitle from '.';

const description = '뉴스 설명입니다.';

describe('뉴스 타이틀 텍스트', () => {
  test('내용 출력 확인', () => {
    render(withTestProviders(NewsCardTitle, { children: description }));
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  test('내용 없으면 내용 출력하지 않음', async () => {
    render(withTestProviders(NewsCardTitle, { children: undefined }));
    expect(await screen.queryByText(description)).not.toBeInTheDocument();
  });

  // FIXME: toHaveStyle로 스타일 체크 못하는 문제 수정
  // test('타이틀 내용 너무 긴 경우, elipsis 처리 확인', () => {

  // });
});
