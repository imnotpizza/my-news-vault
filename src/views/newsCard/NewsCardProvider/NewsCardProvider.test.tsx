import { render, screen } from '@testing-library/react';
import withTestProviders from '@/components/providers/withTestProviders';
import NewsCardDesc from '.';

const providerImg = '/path/to/mock-news-provider.png';
const providerTitle = 'News Provider';

const providerRegex = /\/path\/to\/mock-news-provider\.png$/;
const defaultProviderRegex = /\/path\/to\/default-news-provider\.png$/;

describe('뉴스 내용 텍스트', () => {
  test('src와 alt 속성이 올바르게 전달되었을 때 렌더링되어야 함', () => {
    render(withTestProviders(NewsCardDesc, { src: providerImg, alt: providerTitle }));
    const providerIcon = screen.getByRole('img');
    expect(providerIcon).toHaveAttribute('alt', providerTitle);
    expect(providerIcon).toHaveAttribute('src', "/_next/image?url=%2Fpath%2Fto%2Fmock-news-provider.png&w=64&q=75");
  });

  test('src 없는경우, 디폴트 아이콘 보여져야 함', () => {
    render(withTestProviders(NewsCardDesc, { src: undefined, alt: providerTitle }));
    const providerIcon = screen.getByRole('img');
    expect(providerIcon).toHaveAttribute('alt', providerTitle);
    expect(providerIcon).toHaveAttribute('src', )
  });
});
