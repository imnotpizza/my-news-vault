import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// mock server 생성
export const server = setupServer(...handlers);
