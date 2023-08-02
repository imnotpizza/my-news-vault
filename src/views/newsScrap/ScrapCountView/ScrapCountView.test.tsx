import withTestProviders from '@/components/providers/withTestProviders';
import { render, screen } from '@testing-library/react';
import ScrapCountView from '.';

describe('카운트 수 제대로 표시되는지 홗인', () => {
  it('카운트 수 제대로 표시되는지 확인', () => {
    render(withTestProviders(ScrapCountView, { children: 10 }));
    const count = screen.getByText('총 스크랩 수: 10개');
    expect(count).toBeInTheDocument();
  });

  it('카운트 수 제공되지 않은경우, 0으로 표시되는지 확인', () => {
    render(withTestProviders(ScrapCountView, { children: undefined }));
    const count = screen.getByText('총 스크랩 수: 0개');
    expect(count).toBeInTheDocument();
  });
});
