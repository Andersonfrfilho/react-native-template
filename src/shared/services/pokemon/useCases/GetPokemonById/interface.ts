import {PokemonDTO} from '../../models/Pokemon';

export interface GetPokemonByIdUseCaseResponse extends PokemonDTO {}

export interface GetPokemonByIdUseCaseInterface {
  execute(id: number): Promise<GetPokemonByIdUseCaseResponse>;
}
