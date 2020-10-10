import axios from 'axios';

// TODO: Add environments
export const AXIOS_INSTANCE = axios.create({
  baseURL: 'http://192.168.0.103:3000',
});
