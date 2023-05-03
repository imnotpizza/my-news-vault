import withTestProviders from '@/components/providers/withTestProviders';
import { fireEvent, render, screen } from '@testing-library/react';
import TestButton from '.';

describe('test button', () => {
  it('hello', () => {
    expect(1).toBe(1);
  });
});

describe('test button', () => {
  it('render', () => {
    render(withTestProviders(TestButton)());
    expect(screen.getByText('TestButton')).toBeInTheDocument();
  });

  it('click', () => {
    render(withTestProviders(TestButton)());
    const button = screen.getByText('TestButton');
    // 클릭시 문구 출력
    fireEvent.click(button);
    expect(screen.getByText('button clicked')).toBeInTheDocument();
    // 재클릭시 문구 사라짐
    fireEvent.click(button);
    expect(screen.queryByText('button clicked')).not.toBeInTheDocument();
  });
});
