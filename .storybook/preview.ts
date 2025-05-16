import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';

// MSW 초기화 함수 실행
initialize({
  serviceWorker: {
    url: '/mockServiceWorker.js',
  }
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
