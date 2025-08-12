import {injectable} from 'tsyringe';
import {AppError} from '@shared/error/instance';
import {
  GetPokemonByIdUseCaseInterface,
  GetPokemonByIdUseCaseResponse,
} from './interface';
import {PokemonServiceInterface} from '../../interfaces';
import {GLOBAL_ERRORS} from '@shared/error/constants/global';

@injectable()
export class GetPokemonByIdUseCase implements GetPokemonByIdUseCaseInterface {
  constructor(
    @inject(POKEMON_SERVICE_PROVIDER)
    private readonly pokemonService: PokemonServiceInterface,
  ) {}

  async execute(id: number): Promise<GetPokemonByIdUseCaseResponse> {
    try {
      const response = await this.pokemonService.getPokemonById(id);
      return response;
    } catch (error) {
      throw new AppError({
        error: error?.message,
        stack: error?.stack,
        data: error?.data,
        ...GLOBAL_ERRORS.NOT_FOUND_ERROR,
      });
    }
  }
}
