import 'reflect-metadata';
import {PokemonService} from './service';
import {
  HttpClientPokemonInterface,
  PokemonServiceInterface,
} from './interfaces';
import {PokemonDTO} from './models/Pokemon';

describe('PokemonService', () => {
  let mockHttpClient: jest.Mocked<HttpClientPokemonInterface>;
  let service: PokemonServiceInterface;

  beforeEach(() => {
    mockHttpClient = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
    } as any;

    service = new PokemonService(mockHttpClient);
  });

  it('deve buscar todos os pokemons', async () => {
    const mockData: PokemonDTO[] = [
      {name: 'bulbasaur', id: 1} as PokemonDTO,
      {name: 'charmander', id: 4} as PokemonDTO,
    ];
    mockHttpClient.get.mockResolvedValueOnce(mockData);

    const result = await service.listAll();

    expect(mockHttpClient.get).toHaveBeenCalledWith('/pokemon');
    expect(result).toEqual(mockData);
  });

  it('deve buscar um pokemon pelo ID', async () => {
    const mockData: PokemonDTO = {name: 'pikachu', id: 25} as PokemonDTO;
    mockHttpClient.get.mockResolvedValueOnce(mockData);

    const result = await service.getPokemonById(25);

    expect(mockHttpClient.get).toHaveBeenCalledWith('/pokemon/25');
    expect(result).toEqual(mockData);
  });
});
