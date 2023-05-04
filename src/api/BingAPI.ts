import axios from 'axios';

const BingAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BING_API_BASEURL,
  headers: {
    'Ocp-Apim-Subscription-Key': process.env.NEXT_PUBLIC_BING_API_KEY,
  },
});

export default BingAPI;
