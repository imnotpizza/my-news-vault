import axios from 'axios';

export const saveToken = async (authToken: string) => {
  const apiRes = await axios.post('/api/token/save', { authToken });
  return apiRes.data;
};

export const removeToken = async () => {
  const apiRes = await axios.post('/api/token/remove');
  return apiRes.data;
};
