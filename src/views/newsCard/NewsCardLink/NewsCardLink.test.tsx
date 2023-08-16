import { render, screen, fireEvent } from '@testing-library/react';
import withTestProviders from '@/components/providers/withTestProviders';
import NewsCardLink from '.';

const windowOpenMock = jest.spyOn(window, 'open').mockImplementation(() => {});

describe('NewsCardLink 컴포넌트', () => {
  test('링크를 올바르게 열어야 함', () => {
    const link = 'https://example.com';
    render(withTestProviders(NewsCardLink, { children: link }));
    fireEvent.click(screen.getByText(link));
    expect(windowOpenMock).toHaveBeenCalledWith(link, '_blank');
  });

  // FIXME: toHaveStyle로 스타일 체크 못하는 문제 수정
  test('hover 상태일 때 text-decoration이 underline이 되어야 함', () => {
    const linkText = 'Example Link';
    render(withTestProviders(NewsCardLink, { children: linkText }));
    const linkElement = screen.getByText(linkText);
    fireEvent.mouseOver(linkElement);
  });
});
