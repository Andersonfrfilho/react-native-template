import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {HttpClientInterface} from './interfaces';

export class HttpClient implements HttpClientInterface {
  constructor(private readonly instance: AxiosInstance) {}

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get<T>(url, config).then(res => res.data);
  }

  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.instance.post<T>(url, data, config).then(res => res.data);
  }

  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.instance.put<T>(url, data, config).then(res => res.data);
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.delete<T>(url, config).then(res => res.data);
  }
}
