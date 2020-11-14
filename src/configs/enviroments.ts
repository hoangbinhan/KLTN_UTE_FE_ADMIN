import axios from 'axios';

// TODO: Add environments
export const baseUrl = 'http://192.168.0.106:3001'

export const AXIOS_INSTANCE = axios.create({
  baseURL: baseUrl,
});

