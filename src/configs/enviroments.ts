import axios from 'axios';

// TODO: Add environments
export const AXIOS_INSTANCE = axios.create({
  baseURL: 'http://localhost:3001',
});
