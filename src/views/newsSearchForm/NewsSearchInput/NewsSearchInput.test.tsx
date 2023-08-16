import withTestProviders from '@/components/providers/withTestProviders';
import { render, screen } from '@testing-library/react';
import NewsSearchInput from '.';

describe('NewsSearchInput 컴포넌트', () => {
  test('인풋이 제대로 렌더링되고, 입력 이벤트가 동작하는지 확인', () => {
    const onChangeMock = jest.fn();

    render(withTestProviders(NewsSearchInput, { onChange: onChangeMock }));
    const input = screen.getByRole('textbox');
    expect(input).toBeEnabled();
  });

  test('인풋이 비활성화되면 입력 이벤트가 동작하지 않아야 함', () => {
    const onChangeMock = jest.fn();
    render(withTestProviders(NewsSearchInput, { onChange: onChangeMock, disabled: true }));
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  test('인풋에 placeholder가 제대로 렌더링되는지 확인', () => {
    const placeholderText = '검색어를 입력해주세요';
    render(withTestProviders(NewsSearchInput, { placeholder: placeholderText }));
    const input = screen.getByPlaceholderText(placeholderText);
    expect(input).toBeInTheDocument();
  });
});
