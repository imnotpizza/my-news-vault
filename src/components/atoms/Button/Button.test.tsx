import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

/**
 * 테스트 목록
 * - 클릭 테스트
 * - disabled 테스트
 * - 사이즈별 버튼 크기 테스트
 * - variant 테스트
 */
describe('Atoms/Button Test', () => {
  it('클릭 테스트', async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    const button = screen.getByText('Click me');
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('disabled 테스트', async () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        Click me
      </Button>,
    );
    const button = screen.getByText('Click me');
    await userEvent.click(button);
    expect(button).toBeDisabled();
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
