import withTestProviders from '@/components/providers/withTestProviders';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsSearchButton from '.';

describe('NewsSearchButton 컴포넌트', () => {
  test('버튼이 제대로 렌더링되고, 클릭 이벤트가 동작하는지 확인', () => {
    const onClickMock = jest.fn();
    render(withTestProviders(NewsSearchButton, { onClick: onClickMock }));
    fireEvent.click(screen.getByAltText('뉴스 검색 버튼'));

    expect(screen.getByAltText('뉴스 검색 버튼')).toBeInTheDocument();
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('버튼이 비활성화되면 클릭 이벤트가 동작하지 않아야 함', () => {
    const onClickMock = jest.fn();
    render(withTestProviders(NewsSearchButton, { onClick: onClickMock, disabled: true }));
    fireEvent.click(screen.getByAltText('뉴스 검색 버튼'));
    expect(onClickMock).not.toHaveBeenCalled();
  });

  test('버튼이 비활성화되면 스타일이 변경되어야 함', () => {
    render(withTestProviders(NewsSearchButton, { disabled: true }));
    const button = screen.getByAltText('뉴스 검색 버튼');
    expect(button).toHaveStyle('opacity: 0.5');
    expect(button).toHaveStyle('cursor: default');
  });
});
