import axios from 'axios';

export const saveToken = async (authToken: string) => {
  const apiRes = await axios.post('/api/token/save', { token: authToken });
  return apiRes.data;
};
