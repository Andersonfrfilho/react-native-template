import {HttpClientInterface} from '@shared/providers/http/interfaces';
import {PokemonDTO} from './models/Pokemon';

export const HTTP_CLIENT_POKEMON_PROVIDER = 'HTTP_CLIENT_POKEMON_PROVIDER';
export const POKEMON_SERVICE_PROVIDER = 'POKEMON_SERVICE_PROVIDER';
export interface HttpClientPokemonInterface extends HttpClientInterface {}

export interface PokemonServiceInterface {
  getPokemonById(id: number): Promise<PokemonDTO>;
  listAll(): Promise<PokemonDTO[]>;
}
