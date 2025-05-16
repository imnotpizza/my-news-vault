import { setupWorker } from 'msw/browser';
import { handlers } from './handler/handlers';

const worker = setupWorker(...handlers);
export default worker;
