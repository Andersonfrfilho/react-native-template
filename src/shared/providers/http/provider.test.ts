// HttpClient.spec.ts
import {AxiosInstance} from 'axios';
import {HttpClient} from './provider';

describe('HttpClient', () => {
  let mockAxios: jest.Mocked<AxiosInstance>;
  let client: HttpClient;

  beforeEach(() => {
    mockAxios = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
    } as any;

    client = new HttpClient(mockAxios);
  });

  it('deve fazer requisição GET e retornar os dados', async () => {
    mockAxios.get.mockResolvedValueOnce({data: {foo: 'bar'}});

    const result = await client.get<{foo: string}>('/test');

    expect(mockAxios.get).toHaveBeenCalledWith('/test', undefined);
    expect(result).toEqual({foo: 'bar'});
  });

  it('deve fazer requisição POST e retornar os dados', async () => {
    mockAxios.post.mockResolvedValueOnce({data: {id: 1}});

    const result = await client.post<{id: number}>('/test', {name: 'John'});

    expect(mockAxios.post).toHaveBeenCalledWith(
      '/test',
      {name: 'John'},
      undefined,
    );
    expect(result).toEqual({id: 1});
  });

  it('deve fazer requisição PUT e retornar os dados', async () => {
    mockAxios.put.mockResolvedValueOnce({data: {updated: true}});

    const result = await client.put<{updated: boolean}>('/test', {
      name: 'John',
    });

    expect(mockAxios.put).toHaveBeenCalledWith(
      '/test',
      {name: 'John'},
      undefined,
    );
    expect(result).toEqual({updated: true});
  });

  it('deve fazer requisição DELETE e retornar os dados', async () => {
    mockAxios.delete.mockResolvedValueOnce({data: {deleted: true}});

    const result = await client.delete<{deleted: boolean}>('/test');

    expect(mockAxios.delete).toHaveBeenCalledWith('/test', undefined);
    expect(result).toEqual({deleted: true});
  });
});
