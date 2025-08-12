import axios from 'axios';
import {HttpClient} from './provider';

export function createHttpClient(baseURL: string) {
  const axiosInstance = axios.create({
    baseURL,
    timeout: 10000,
  });

  return new HttpClient(axiosInstance);
}
