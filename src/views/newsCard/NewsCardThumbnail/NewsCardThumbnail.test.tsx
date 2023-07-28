import { render, screen } from '@testing-library/react';
import withTestProviders from '@/components/providers/withTestProviders';
import NewsCardThumbnail from '.';

// TODO: 이미지 관련 컴포넌트 분리 후 테스트 통합
const thumbnailImg = '/img/mock-news-thumbnail.png';
const thumbnailTitle = 'News Title';

describe('뉴스 썸네일 이미지 확인', () => {
  test('src, alt 속성 올바르게 들어오는 지 확인', () => {
    render(withTestProviders(NewsCardThumbnail, { src: thumbnailImg, alt: thumbnailTitle }));
    const providerIcon = screen.getByRole('img');
    expect(providerIcon).toHaveAttribute('alt', thumbnailTitle);
    expect(providerIcon).toHaveAttribute(
      'src',
      expect.stringContaining('mock-news-thumbnail.png'),
    );
  });

  test('src 없는경우, 디폴트 썸네일 표시', () => {
    render(withTestProviders(NewsCardThumbnail, { src: undefined, alt: thumbnailTitle }));
    const providerIcon = screen.getByRole('img');
    expect(providerIcon).toHaveAttribute('alt', thumbnailTitle);
    expect(providerIcon).toHaveAttribute(
      'src',
      expect.stringContaining('newscard-default-thumbnail.png'),
    );
  });
});
