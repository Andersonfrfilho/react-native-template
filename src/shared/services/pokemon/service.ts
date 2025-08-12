import {injectable, inject} from 'tsyringe';

import {
  HTTP_CLIENT_POKEMON_PROVIDER,
  HttpClientPokemonInterface,
  PokemonServiceInterface,
} from './interfaces';
import {PokemonDTO} from './models/Pokemon';

@injectable()
export class PokemonService implements PokemonServiceInterface {
  constructor(
    @inject(HTTP_CLIENT_POKEMON_PROVIDER)
    private readonly httpClientPokemon: HttpClientPokemonInterface,
  ) {}

  async getPokemonById(id: number): Promise<PokemonDTO> {
    return this.httpClientPokemon.get<PokemonDTO>(`/pokemon/${id}`);
  }

  async listAll(): Promise<PokemonDTO[]> {
    return this.httpClientPokemon.get<PokemonDTO[]>('/pokemon');
  }
}
