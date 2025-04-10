import axios from 'axios';

const axiosAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SITE_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
});

export default axiosAuth;
