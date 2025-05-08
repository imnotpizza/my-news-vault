import { setupServer } from 'msw/node';
import { handlers } from './handler/handlers';

const server = setupServer(...handlers);
export default server;
