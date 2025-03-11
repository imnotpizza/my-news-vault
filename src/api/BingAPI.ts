import { DEFAULT_API_TIMEOUT } from '@/constants';
import axios from 'axios';
import initInterceptors from './interceptors';

const BingAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BING_API_BASEURL,
  headers: {
    'Ocp-Apim-Subscription-Key': process.env.NEXT_PUBLIC_BING_API_KEY,
  },
  timeout: DEFAULT_API_TIMEOUT,
});

export default initInterceptors(BingAPI);
