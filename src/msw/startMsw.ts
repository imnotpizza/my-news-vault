/**
 * msw 초기화 및 실행 함수
 * - 브라우저 환경에서는 worker.start()을 호출하여 MSW를 시작
 * - 서버 환경, 테스트 환경에서는 server.listen()을 호출하여 MSW를 시작
 * - production 환경에서는 MSW를 시작하지 않음
 */
async function startMsw() {
  if (process.env.NODE_ENV === 'production') return;
  if (typeof window !== 'undefined') {
    const worker = await import('@/msw/browser').then((res) => res.default);
    await worker.start({
      onUnhandledRequest: 'warn',
    });
  } else {
    const server = await import('@/msw/server').then((res) => res.default);
    server.listen();
  }
}

export default startMsw;
