import { render, screen } from '@testing-library/react';
import withTestProviders from '@/components/providers/withTestProviders';
import NewsCardDesc from '.';

// TODO: 이미지 관련 컴포넌트 분리 후 테스트 통합
const providerImg = '/img/mock-news-provider.png';
const providerTitle = 'News Provider';

describe('뉴스 내용 텍스트', () => {
  test('src와 alt 속성이 올바르게 전달되었을 때 렌더링되어야 함', () => {
    render(withTestProviders(NewsCardDesc, { src: providerImg, alt: providerTitle }));
    const providerIcon = screen.getByRole('img');
    expect(providerIcon).toHaveAttribute('alt', providerTitle);
    expect(providerIcon).toHaveAttribute(
      'src',
      expect.stringContaining('mock-news-provider.png'),
    );
  });

  test('src 없는경우, 디폴트 아이콘 보여져야 함', () => {
    render(withTestProviders(NewsCardDesc, { src: undefined, alt: providerTitle }));
    const providerIcon = screen.getByRole('img');
    expect(providerIcon).toHaveAttribute('alt', providerTitle);
    expect(providerIcon).toHaveAttribute(
      'src',
      expect.stringContaining('newscard-default-providerlogo.svg'),
    );
  });
});
