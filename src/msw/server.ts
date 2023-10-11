import { setupServer } from 'msw/node';
import { handlers } from './rootHandler';

// mock server 생성
export const server = setupServer(...handlers);
