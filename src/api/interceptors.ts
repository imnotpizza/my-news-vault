import { AxiosError, AxiosInstance, AxiosRequestHeaders, AxiosResponse } from 'axios';

export default function initInterceptors($axios: AxiosInstance, req?, res?) {
  /** request 보내기 전 */
  $axios.interceptors.request.use((config) => {
    // console.log('interceptors request', config);
    return config;
  });
  /** response 들어온 후 */
  $axios.interceptors.response.use((config) => {
    // console.log('interceptors response', config);
    return config;
  });

  return $axios;
}
